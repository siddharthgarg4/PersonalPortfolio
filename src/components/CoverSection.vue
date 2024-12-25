<template>
  <BContainer class="coverContainer" fluid>
    <BRow>
      <BCol class="justify-content-start d-flex">
        <img class="sgLogo" src="../assets/sgLogo.png" />
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
              Using <span class="tintFont">{{ position[0] }}</span>
              to translate problems into empowering, empathy-driven solutions.
            </p>
          </BCol>
          <BCol class="align-items-center removePadding" cols="12">
            <p class="coverResume cursorPointer" @click="goToResume">
              In a hurry? Check out my <span class="tintFont">resume</span>.
            </p>
          </BCol>
        </BRow>
      </BCol>
      <BCol lg="6" class="extraPadding">
        <img class="img-responsive fitImage" src="../assets/coverFinal.svg" />
      </BCol>
    </BRow>
    <BRow>
      <BCol cols="12" class="d-flex justify-content-start">
        <div class="solidVerticalLine cursorPointer"></div>
      </BCol>
      <BCol cols="12" class="d-flex justify-content-start">
        <p class="scrollMoreText removeMargin cursorPointer">
          Scroll to Learn More
        </p>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "CoverSection",
  setup() {
    // Reactive state
    const position = ref<string[]>([
      "software engineering",
      "product management",
      "technical design",
    ]);

    // Mounted lifecycle hook
    onMounted(() => {
      const interval = window.setInterval(() => {
        changePositionText();
      }, 3000);
      // // Emit event when mounted
      // window.dispatchEvent(new CustomEvent("cover-loaded"));

      onBeforeUnmount(() => {
        clearInterval(interval);
      });
    });

    // Methods (defined as functions)
    // const scrollToExperience = () => {
    //   const sectionElement = document.getElementById("experience");
    //   if (sectionElement) {
    //     sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
    //   } else {
    //     console.log(
    //       "The element associated with the menu item is null / could not be found."
    //     );
    //   }
    // };

    const goToResume = (): void => {
      window.open(
        "https://drive.google.com/open?id=1znD9D40aV2y3--KMBDNguyxXOTcXZnXw",
        "_blank",
      );
    };

    const changePositionText = (): void => {
      // Safely shift and push the first element of the position array
      const firstElement = position.value.shift()!;
      position.value.push(firstElement);
    };

    // Return the reactive state and methods to the template
    return {
      position,
      // scrollToExperience,
      goToResume,
    };
  },
});
</script>

<style scoped lang="scss">
@use "../assets/styles/variables.scss" as *;
.row {
  margin-right: 0px;
  margin-left: 0px;
}
.removePadding {
  padding: 0;
}
.removeMargin {
  margin: 0;
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
.tintFont {
  color: $dolphinBlueColor;
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
