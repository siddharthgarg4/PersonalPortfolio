<template>
  <div class="homePage" id="homePage">
    <cover id="cover"></cover>
    <expereinceAndProjects id="experience"></expereinceAndProjects>
    <aboutMe id="about"></aboutMe>
    <contact id="contact"></contact>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default Vue.extend({
  name: "homePage"
});
</script>

<style lang="scss">
@import "../styles/main.scss";
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.homePage {
  background-color: $offWhiteColor;
}
.cursorPointer {
  cursor: pointer;
}
</style>
