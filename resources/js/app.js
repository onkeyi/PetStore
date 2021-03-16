import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import i18n from './i18n';
import './components';

Vue.prototype.$appName = process.env.MIX_APP_NAME;
Vue.prototype.$perPage = process.env.MIX_APP_PER_PAGE;

const app = new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
});