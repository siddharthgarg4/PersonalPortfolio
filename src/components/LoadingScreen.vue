<template>
  <div :class="{ loader: true, fadeout: !keepLoading }">Loading ...</div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["keepLoading"],
};
</script>

<style lang="scss">
@import "../styles/main.scss";
.loader {
  background-color: $springGreenColor;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
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
