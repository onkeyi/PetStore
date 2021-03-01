import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components'

Vue.prototype.$appName = process.env.MIX_APP_NAME;
Vue.prototype.$perPage = process.env.MIX_APP_PER_PAGE;

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});