<template>
  <!-- <LoadingScreen id="loadingScreen" /> -->
  <div class="homeView" id="homeView">
    <CoverSection id="coverSection"></CoverSection>
    <ExperienceAndProjectsSection
      id="experienceSection"
    ></ExperienceAndProjectsSection>
    <ContactSection id="contactSection"></ContactSection>
  </div>
</template>

<script setup lang="ts">
import ContactSection from "@/components/ContactSection.vue";
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
.cursorPointer {
  cursor: pointer;
}
</style>
