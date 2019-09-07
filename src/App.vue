<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";
@import "styles/variable.scss";
html {
  scroll-behavior: smooth;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $highlight;
}
</style>

<script lang="ts">
import Vue from "vue";
var json = require("@/static/content.json");
// @ is an alias to /src

export default Vue.extend({
  name: "home",
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
