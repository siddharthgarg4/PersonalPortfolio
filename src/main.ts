import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import Flip from "@/components/FlipCard.vue";
import CustomMenu from "@/components/CustomMenu.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("flip-card", Flip);
Vue.component("about", About);
Vue.component("custom-menu", CustomMenu);
Vue.component("contact", Contact);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
