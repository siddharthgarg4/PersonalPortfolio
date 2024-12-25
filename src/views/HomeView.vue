<template>
  <!-- <LoadingScreen id="loadingScreen" /> -->
  <div class="homeView" id="homeView">
    <CoverSection id="coverSection"></CoverSection>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use "../assets/styles/variables.scss" as *;
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
.homeView {
  background-color: $offWhiteColor;
}
.cursorPointer {
  cursor: pointer;
}
</style>
