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
  pointer-events: auto;
}
.fadeoutLoader {
  opacity: 0;
  visibility: hidden;
  /* Allow clicks through */
  pointer-events: none;
  transition:
    opacity 2s,
    visibility 2s;
}
</style>
