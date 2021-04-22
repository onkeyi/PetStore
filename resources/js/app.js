import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
import "./filters";
import "./components";
import VueLogger from "vuejs-logger";

Vue.prototype.$appName = process.env.MIX_APP_NAME;
Vue.prototype.$perPage = process.env.MIX_APP_PER_PAGE;

const isProduction = process.env.MIX_APP_ENV === "production";

const options = {
    isEnabled: !isProduction,
    logLevel: isProduction ? "error" : "debug",
    stringifyArguments: false,
    showLogLevel: false,
    showMethodName: false,
    separator: "|",
    showConsoleColors: true,
};

Vue.use(VueLogger, options);

new Vue({
    el: "#app",
    router,
    i18n,
    store,
    render: (h) => h(App),
});
