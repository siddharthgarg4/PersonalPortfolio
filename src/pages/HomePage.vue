<template>
  <div>
    <loadingScreen id="loadingScreen" :isLoading="isLoading"></loadingScreen>
    <div class="homePage" id="homePage">
      <cover id="cover" @complete-loading="handleChildMounted"></cover>
      <expereinceAndProjects id="experience"></expereinceAndProjects>
      <aboutMe id="about"></aboutMe>
      <contact id="contact"></contact>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default Vue.extend({
  name: "homePage",
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    handleChildMounted() {
      console.log("loading turned to false");
      this.isLoading = false;
    },
  },
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
