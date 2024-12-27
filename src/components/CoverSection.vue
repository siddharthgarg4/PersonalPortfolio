<template>
  <BContainer class="coverContainer" fluid>
    <BRow>
      <BCol class="justify-content-start d-flex">
        <img class="sgLogo" src="@/assets/sgLogo.png" />
      </BCol>
      <BCol class="justify-content-end d-flex menuContainer removePadding">
        <customMenu></customMenu>
      </BCol>
    </BRow>
    <BRow align-v="center" class="coverCenter align-items-center d-flex">
      <BCol lg="6" class="coverText">
        <BRow>
          <BCol class="align-items-center removePadding" cols="12">
            <p class="coverTitle">Hi 👋🏽 I’m Siddharth</p>
          </BCol>
          <BCol class="align-items-center removePadding" cols="12">
            <p class="coverPara">
              Using
              <span class="tintFont">{{
                getCurrentHighlightedKeySkill()
              }}</span>
              to translate problems into empowering, empathy-driven solutions.
            </p>
          </BCol>
          <BCol class="align-items-center removePadding" cols="12">
            <p class="coverResume cursorPointer" @click="handleVisitResume">
              In a hurry? Check out my <span class="tintFont">resume</span>.
            </p>
          </BCol>
        </BRow>
      </BCol>
      <BCol lg="6" class="extraPadding">
        <img class="img-responsive fitImage" src="@/assets/coverFinal.svg" />
      </BCol>
    </BRow>
    <BRow>
      <BCol cols="12" class="d-flex justify-content-start">
        <div
          class="solidVerticalLine cursorPointer"
          @click="visitSection('experienceSection')"
        ></div>
      </BCol>
      <BCol cols="12" class="d-flex justify-content-start">
        <p
          class="scrollMoreText removeMargin cursorPointer"
          @click="visitSection('experienceSection')"
        >
          Scroll to Learn More
        </p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import { visitLink, visitSection } from "@/composables/sharedUtils";
import json from "@/assets/content.json";

export default defineComponent({
  name: "CoverSection",
  setup() {
    // Reactives
    const currentPersonalDetails = ref<AboutMeType | null>(null);
    const currentHighlightedKeySkillIndex = ref<number>(0);

    // Method to handle resume click event and ensure link exists
    const handleVisitResume = (): void => {
      if (currentPersonalDetails.value) {
        visitLink(currentPersonalDetails.value.resume);
      }
    };
    // Method to shift key skill text for rotating cover text
    const getCurrentHighlightedKeySkill = (): string => {
      console.log("Changing key skill");
      if (currentPersonalDetails.value) {
        return currentPersonalDetails.value.keySkills[
          currentHighlightedKeySkillIndex.value
        ];
      }
      return "";
    };

    // Method to load data
    const loadAboutMeData = (): void => {
      currentPersonalDetails.value = json["me"] as AboutMeType | null;
    };

    // Mounted lifecycle hook
    onMounted(() => {
      loadAboutMeData();
      // Set interval to shift key skill text every 3 seconds
      const interval = window.setInterval(() => {
        currentHighlightedKeySkillIndex.value++;
        // Divide by length of key skills to ensure it doesn't exceed length
        currentHighlightedKeySkillIndex.value %=
          currentPersonalDetails.value?.keySkills.length || 1;
      }, 3000);
      // // Emit event when mounted
      // window.dispatchEvent(new CustomEvent("cover-loaded"));

      onBeforeUnmount(() => {
        clearInterval(interval);
      });
    });

    return {
      visitSection,
      handleVisitResume,
      getCurrentHighlightedKeySkill,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.row {
  margin-right: 0px;
  margin-left: 0px;
}
.coverContainer {
  min-height: 100vh;
  padding: 1.5%;
  background: linear-gradient(
    90deg,
    $offWhiteColor 72.5%,
    $dolphinBlueColor 27.5%
  );
  @media (max-width: $screen-md) {
    background: linear-gradient(
      180deg,
      $offWhiteColor 72.5%,
      $dolphinBlueColor 27.5%
    );
  }
}
.sgLogo {
  height: 50px;
  width: auto;
  margin: 15px 0 0 0;
  @media (max-width: $screen-sm) {
    height: 35px !important;
  }
}
.fitImage {
  width: 35vw;
  object-fit: contain;
  height: auto;
  @media (max-width: $screen-md) and (min-width: $screen-xs) {
    width: 45vw;
  }
  @media (max-width: $screen-xs) {
    width: 65vw;
  }
}
.coverTitle {
  padding-bottom: 1%;
  font-size: 3.125vw;
  font-weight: 400;
  text-align: start;
  @media (max-width: $screen-md) {
    font-size: 6.7vw;
    text-align: center;
  }
}
.coverPara {
  padding-top: 1%;
  font-size: 2vw;
  font-weight: 500;
  text-align: start;
  line-height: 2.2vw;
  @media (max-width: $screen-md) {
    font-size: 4.3vw;
    line-height: 4.7vw;
    text-align: center;
  }
}
.coverCenter {
  min-height: 70vh;
  @media (max-width: $screen-md) and (min-width: $screen-xs) {
    min-height: 75vh;
  }
  @media (max-width: $screen-xs) {
    min-height: 80vh;
  }
}
.coverText {
  @media (max-width: $screen-md) {
    padding-top: 6.5vh;
  }
}
.solidVerticalLine {
  border-left: 2px solid $dolphinBlueColor;
  height: 7.5vh;
  margin: 2px;
  display: inline-block;
  @media (max-width: $screen-md) {
    border-left: 2px solid $offWhiteColor;
    height: 5vh;
  }
}
.scrollMoreText {
  font-size: 1.5vw;
  font-weight: 600;
  text-align: start;
  padding-top: 5px;
  display: inline-block;
  @media (max-width: $screen-md) {
    font-size: 3vw;
    color: $offWhiteColor;
  }
}
.beforeEnter {
  opacity: 0;
  z-index: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  z-index: 1;
  transform: translateY(0px);
}
.menuContainer {
  margin: 0 15px 0 15px;
}
.coverResume {
  font-size: 1.5vw;
  font-weight: 600;
  text-align: start;
  @media (max-width: $screen-md) {
    font-size: 3vw;
    text-align: center;
  }
}
</style>
