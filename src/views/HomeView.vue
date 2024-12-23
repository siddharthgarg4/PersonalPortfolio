<script setup lang="ts">
// import LoadingScreen from "@/components/LoadingScreen.vue";
</script>

<template>
  <LoadingScreen />
</template>

<style lang="scss">
@use "../styles/main" as *;
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
