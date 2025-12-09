<template>
  <div class="loader" :class="{ fadeoutLoader: !isVisible }"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "LoadingScreen",
  props: {
    stopLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isVisible = ref<boolean>(true);

    watch(
      () => props.stopLoading,
      (newVal) => {
        isVisible.value = !newVal;
      },
    );

    return {
      isVisible,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.loader {
  //background
  inset: 0; //sets top, right, bottom, left to 0
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $dolphinBlueColor;
  //loading image
  background-image: url("@/assets/loading-moving-car.svg");
  background-position: center;
  background-repeat: no-repeat;
  //safety settings
  overflow: hidden;
  z-index: 9999; // should be at the top of every element
  pointer-events: auto;
}
.fadeoutLoader {
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 2s ease,
    visibility 2s ease;
  //allow click through
  pointer-events: none;
}
</style>
