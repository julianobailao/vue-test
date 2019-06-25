import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HeaderSidebarTemplate from './views/layout/header-sidebar.template.vue';
import routes from '@/services/router-loader/router.loader';

Vue.use(Router);

export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});
