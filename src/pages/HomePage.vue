<template>
  <div>
    <loadingScreen
      id="loadingScreen"
      :keepLoading="!isWebsiteMounted || !minLoadingTimeElapsed"
    ></loadingScreen>
    <div class="homePage" id="homePage">
      <cover id="cover" @cover-loaded="websiteMounted"></cover>
      <expereinceAndProjects id="experience"></expereinceAndProjects>
      <aboutMe id="about"></aboutMe>
      <contact id="contact"></contact>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "homePage",
  data() {
    return {
      isWebsiteMounted: false,
      minLoadingTimeElapsed: false,
    };
  },
  created() {
    setTimeout(() => {
      this.minLoadingTimeElapsed = true;
      //min loading time 6 seconds
    }, 6000);
  },
  methods: {
    websiteMounted() {
      this.isWebsiteMounted = true;
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
