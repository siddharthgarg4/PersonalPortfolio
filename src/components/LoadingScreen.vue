<template>
  <div class="loader"></div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.loader {
  background-image: url("@/assets/loading-moving-car.svg");
  background-color: $dolphinBlueColor;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  bottom: 0;
  display: block;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999; /* should be at the top of every element */
}
</style>
