import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

//fontAwesome

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

//pages

import ContactPage from './components/pages/contact-page.vue';
import MainPage from './components/pages/main-page/main-page.vue';
import OfferPage from './components/pages/offer-page.vue';

// router

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: MainPage,
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactPage,
    },
    {
      name: 'offer',
      path: '/offer',
      component: OfferPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 78,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
