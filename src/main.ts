import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/scss/bootstrap.scss";
import BootstrapVue from "bootstrap-vue";
import Cover from "@/components/Cover.vue";
import ExperienceAndProjects from "@/components/ExperienceAndProjects.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("cover", Cover);
Vue.component("expereinceAndProjects", ExperienceAndProjects);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
