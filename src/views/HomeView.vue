<template>
  <div class="homeView" id="homeView">
    <LoadingScreen id="loadingScreen" :stopLoading="shouldStopLoading" />
    <CoverSection id="coverSection" @coverLoaded="coverMounted"></CoverSection>
    <ExperienceAndProjectsSection
      id="experienceSection"
    ></ExperienceAndProjectsSection>
    <AboutMeSection id="aboutMeSection"></AboutMeSection>
    <ContactSection id="contactSection"></ContactSection>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "homeView",
  setup() {
    // Reactives
    const isCoverMounted = ref<boolean>(false);
    const isMinLoadTimeElapsed = ref<boolean>(false);

    // Computed
    const shouldStopLoading = computed((): boolean => {
      return isCoverMounted.value && isMinLoadTimeElapsed.value;
    });

    // Created
    setTimeout(() => {
      isMinLoadTimeElapsed.value = true;
    }, 4000);

    // Method to handle website mounted event
    const coverMounted = (): void => {
      isCoverMounted.value = true;
    };

    return {
      coverMounted,
      shouldStopLoading,
    };
  },
});
</script>

<style lang="scss">
@use "@/assets/styles/variables.scss" as *;
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
</style>
