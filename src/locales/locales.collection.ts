export interface LocaleInfo {
  readonly title: string;
  readonly value: string;
  readonly icon: string;
}

const locales: LocaleInfo[] = [];

locales.push({
  title: 'English',
  value: 'en',
  icon: '/img/en.png',
});

locales.push({
  title: 'Português',
  value: 'pt-BR',
  icon: '/img/pt-BR.png',
});

export default locales;
