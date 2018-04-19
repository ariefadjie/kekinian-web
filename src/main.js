import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './routes';
import App from './App';

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
