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

    // function to lock and unlock scroll
    const toggleScrollLock = (lock: boolean): void => {
      if (lock) {
        document.body.classList.add("no-scroll");
        document.documentElement.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
      }
    };

    watch(
      () => props.stopLoading,
      (newVal) => {
        isVisible.value = !newVal;
        toggleScrollLock(!newVal);
      },
      { immediate: true },
    );

    return {
      isVisible,
    };
  },
});
</script>
