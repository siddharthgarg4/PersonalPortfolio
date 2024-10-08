<template>
  <div :class="{ loader: true, fadeout: !keepLoading }"></div>
</template>

<script lang="ts">
export default {
  name: "LoadingScreen",
  props: ["keepLoading"],
};
</script>

<style lang="scss">
@import "../styles/main.scss";
.loader {
  background-image: url("../assets/loading-moving-car.svg");
  background-color: #12390c;
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
  z-index: 9999;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
