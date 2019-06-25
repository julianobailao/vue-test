import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue,
    secondary: colors.pink,
    accent: colors.blue,
    error: colors.red,
    info: colors.cyan,
    success: colors.green,
    warning: colors.amber,
  },
  options: {
    customProperties: true,
  },
  iconfont: 'md',
});
