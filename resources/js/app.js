import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './messages.js'

import './components'

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: navigator.language.split('-')[0],
    fallbackLocale: 'ja',
    messages
});

Vue.prototype.$appName = process.env.MIX_APP_NAME;
Vue.prototype.$perPage = process.env.MIX_APP_PER_PAGE;

const app = new Vue({
    el: '#app',
    router,
    i18n,
    render: h => h(App)
});