<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
html {
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: $darkBlackColor;
}
</style>

<script lang="ts">
import Vue from "vue";
var json = require("@/static/content.json");
// @ is an alias to /src

export default Vue.extend({
  name: "homePage",
  components: {},
  data() {
    return {
      json: {}
    };
  },
  mounted() {
    this.json = json;
  }
});
</script>
