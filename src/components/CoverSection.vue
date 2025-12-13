<template>
  <BContainer class="d-flex flex-column coverContainer" fluid>
    <BRow>
      <BCol class="d-flex justify-content-start">
        <img class="sgLogo" src="@/assets/sgLogo.png" />
      </BCol>
      <BCol class="d-flex justify-content-end">
        <customMenu></customMenu>
      </BCol>
    </BRow>
    <BRow class="d-flex align-items-center coverCenter">
      <BCol cols="6" class="fullWidthOnPortrait">
        <p class="coverTitle">Hi 👋🏽 I’m Siddharth</p>
        <p class="coverPara">
          Using
          <span class="tintFont">{{ currentHighlightedKeySkill }}</span>
          to translate problems into empowering, empathy-driven solutions.
        </p>
        <p class="cursorPointer coverResume" @click="handleVisitResume">
          In a hurry? Check out my <span class="tintFont">resume</span>.
        </p>
      </BCol>
      <BCol cols="6" class="d-flex justify-content-center fullWidthOnPortrait">
        <img class="fitImage" src="@/assets/coverFinal.svg" />
      </BCol>
    </BRow>
    <BRow>
      <BCol class="d-flex flex-column">
        <div
          class="cursorPointer solidVerticalLine"
          @click="visitSection('experienceSection')"
        ></div>
        <p
          class="cursorPointer removeMargin scrollMoreText"
          @click="visitSection('experienceSection')"
        >
          Scroll to Learn More
        </p>
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
.sgLogo {
  height: auto;
  width: 6%;
  min-width: 35px;
  @media (orientation: portrait) {
    width: 12% !important;
  }
}
.coverCenter {
  flex-grow: 1;
  @media (orientation: portrait) {
    // override Bootstrap horizontal layout
    flex-direction: column !important;
    justify-content: space-around;
    .fullWidthOnPortrait {
      width: 100% !important;
    }
  }
}
.fitImage {
  width: 57.5%;
  object-fit: contain;
}
.solidVerticalLine {
  border-left: 2px solid $dolphinBlueColor;
  height: 7.5dvh;
  height: 7.5vh;
  margin: 2px;
  display: inline-block;
  @media (orientation: portrait) {
    border-left: 2px solid $offWhiteColor;
    height: 5dvh;
    height: 5vh;
  }
}
// .beforeEnter {
//   opacity: 0;
//   z-index: 0;
//   transform: translateY(100px);
//   transition: all 2s ease-out;
// }
// .enter {
//   opacity: 1;
//   z-index: 1;
//   transform: translateY(0px);
// }
</style>
