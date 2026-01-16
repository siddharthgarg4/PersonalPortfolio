<template>
  <div class="homeView" id="homeView">
    <LoadingScreen id="loadingScreen" :stopLoading="shouldStopLoading" />
    <CoverSection id="coverSection" @coverLoaded="coverMounted"></CoverSection>
    <customMenu></customMenu>
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

    // // Function to set dynamic vh
    // const setInnerVh = () => {
    //   const vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty("--inner--vh", `${vh}px`);
    // };

    // // Mounted lifecycle
    // onMounted(() => {
    //   setInnerVh(); // initial set
    //   window.addEventListener("resize", setInnerVh);
    // });

    // // Cleanup
    // onBeforeUnmount(() => {
    //   window.removeEventListener("resize", setInnerVh);
    // });

    // Created
    setTimeout(() => {
      isMinLoadTimeElapsed.value = true;
    }, 3000);

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
