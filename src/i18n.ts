import Vue from 'vue';
import VueI18n, { LocaleMessages } from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context('./', true, /.locale.json/);
  const messages: LocaleMessages = {};
  locales.keys().forEach((key: string) => {
    const fileName: string | undefined = key.split('/').pop();

    if (!fileName) {
      return;
    }

    const splitedKey: string[] = fileName.split('.');
    const indexKey: number = splitedKey.length - 3;
    const index: string = splitedKey[indexKey];
    const group: string = splitedKey[0];

    if (!messages[index]) {
      messages[index] = {};
    }

    if (!messages[index][group]) {
      messages[index][group] = {};
    }

    messages[index][group] = locales(key);
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
