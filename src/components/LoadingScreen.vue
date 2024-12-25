<template>
  <div :class="{ loader: true }"></div>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
// Type-only import for PropType
// import type { PropType } from "vue";

// export default defineComponent({
//   name: "LoadingScreen",
//   //   props: {
//   //     // Define the prop with type annotation and default value if necessary
//   //     keepLoading: {
//   //       type: Boolean as PropType<boolean>,
//   //       required: true,
//   //     },
//   //   },
// });
</script>

<style scoped lang="scss">
@use "../assets/styles/variables.scss" as *;
.loader {
  background-image: url("../assets/loading-moving-car.svg");
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
