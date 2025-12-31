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
