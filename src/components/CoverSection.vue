<template>
  <BContainer class="coverContainer" fluid>
    <BRow>
      <BCol class="logoContainer">
        <img class="sgLogo" src="@/assets/sgLogo.png" />
      </BCol>
      <BCol class="menuContainer">
        <customMenu></customMenu>
      </BCol>
    </BRow>
    <BRow class="coverCenter">
      <BCol class="coverTextContainer">
        <p class="coverTitle">Hi 👋🏽 I’m Siddharth</p>
        <p class="coverPara">
          Using
          <span class="tintFont">{{ currentHighlightedKeySkill }}</span>
          to translate problems into empowering, empathy-driven solutions.
        </p>
        <p class="viewResumePointer coverResume" @click="handleVisitResume">
          In a hurry? Check out my <span class="tintFont">resume</span>.
        </p>
      </BCol>
      <BCol class="coverImageContainer">
        <img class="coverImage" src="@/assets/coverFinal.svg" />
      </BCol>
    </BRow>
    <BRow>
      <BCol
        class="scrollMoreContainer"
        @click="visitSection('experienceSection')"
      >
        <div class="solidVerticalLine"></div>
        <p class="scrollMoreText">Scroll to Learn More</p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";
import { visitLink, visitSection } from "@/composables/sharedUtils";
import json from "@/assets/content.json";

export default defineComponent({
  name: "CoverSection",
  setup(_, { emit }) {
    // Reactives
    const currentPersonalDetails = ref<AboutMeType | null>(null);

    // Key-Skill reactives
    let interval: number;
    const currentHighlightedKeySkillIndex = ref<number>(0);
    const currentHighlightedKeySkill = computed(() => {
      const skills = currentPersonalDetails.value?.keySkills || [];
      //computed so reactive if underlying ref change value
      return skills[currentHighlightedKeySkillIndex.value] || "";
    });

    // Helper methods for key skill index
    const rotateKeySkillIndex = (): void => {
      if (!currentPersonalDetails.value) return;
      currentHighlightedKeySkillIndex.value++;
      currentHighlightedKeySkillIndex.value %=
        currentPersonalDetails.value?.keySkills.length || 1;
    };
    const loadAboutMeData = (): void => {
      currentPersonalDetails.value = json[
        "me"
      ] as typeof currentPersonalDetails.value;
    };

    // Method to handle resume click event and ensure link exists
    const handleVisitResume = (): void => {
      if (currentPersonalDetails.value) {
        visitLink(currentPersonalDetails.value.resume);
      }
    };

    // Lifecycle hooks
    onMounted(() => {
      loadAboutMeData();
      //shift key skill every 3 seconds
      interval = window.setInterval(() => {
        rotateKeySkillIndex();
      }, 3000);
      emit("coverLoaded");
    });
    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return {
      visitSection,
      handleVisitResume,
      currentHighlightedKeySkill,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
// @use "@/assets/styles/main.scss" as *;
.coverContainer {
  display: flex;
  flex-direction: column;
  height: calc(var(--inner--vh) * 100);
  width: 100dvw;
  width: 100vw;
  // min-height: 100vh;
  padding: 1.5% 3.75%;
  background: linear-gradient(
    90deg,
    $offWhiteColor 72.5%,
    $dolphinBlueColor 27.5%
  );
  @media (orientation: portrait) {
    background: linear-gradient(
      180deg,
      $offWhiteColor 72.5%,
      $dolphinBlueColor 27.5%
    );
    padding: 3.75%;
  }
}
.logoContainer {
  display: flex;
  justify-content: start;
}
.sgLogo {
  height: auto;
  width: 6%;
  min-width: 35px;
  @media (orientation: portrait) {
    width: 12% !important;
  }
}
.menuContainer {
  display: flex;
  justify-content: end;
}
.coverCenter {
  display: flex;
  flex-grow: 1;
  //safety css
  justify-content: center;
  @media (orientation: portrait) {
    // override Bootstrap horizontal layout
    flex-direction: column !important;
  }
}
.coverTextContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media (orientation: portrait) {
    align-items: center;
  }
}
.coverImageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.viewResumePointer {
  cursor: pointer;
}
.coverImage {
  width: 57.5%;
  object-fit: contain;
  @media (orientation: portrait) and (min-width: $screen-sm) {
    width: 47.5%;
  }
}
.scrollMoreContainer {
  cursor: pointer;
}
.solidVerticalLine {
  // margin to align with text
  margin-bottom: 2px;
  margin-left: 2px;
  // vertical border - so entire width is clickable
  border-left: 2px solid $dolphinBlueColor;
  height: calc(var(--inner--vh) * 7.5);
  @media (orientation: portrait) {
    border-left: 1.5px solid $offWhiteColor;
    height: calc(var(--inner--vh) * 5);
  }
}
</style>
