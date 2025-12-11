<template>
  <div class="customMenuContainer">
    <div
      class="optionContainer coreMenu"
      @click="toggleMenu"
      :class="{ active: isActivated }"
    >
      <div class="bar top"></div>
      <div class="bar center"></div>
      <div class="bar bottom"></div>
    </div>
    <div class="subMenu" :class="{ active: isActivated }">
      <div class="optionContainer" @click="scrollToSection('coverSection')">
        <img src="/images/homeNav.png" alt="Home" class="img-fluid navIcon" />
      </div>
      <div
        class="optionContainer"
        @click="scrollToSection('experienceSection')"
      >
        <img
          src="/images/projectsNav.png"
          alt="Experience"
          class="img-fluid navIcon"
        />
      </div>
      <div class="optionContainer" @click="scrollToSection('aboutMeSection')">
        <img
          src="/images/aboutNav.png"
          alt="About Me"
          class="img-fluid navIcon"
        />
      </div>
      <div class="optionContainer" @click="scrollToSection('contactSection')">
        <img
          src="/images/contactNav.png"
          alt="Contact"
          class="img-fluid navIcon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { visitSection } from "@/composables/sharedUtils";

export default defineComponent({
  name: "CustomMenu",
  setup() {
    //Reactives
    const isActivated = ref<boolean>(false);

    //Methods
    const toggleMenu = (): void => {
      isActivated.value = !isActivated.value;
    };
    const scrollToSection = (section: string): void => {
      visitSection(section);
      toggleMenu();
    };

    return {
      isActivated,
      toggleMenu,
      scrollToSection,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.customMenuContainer {
  min-width: 35px;
  width: calc((0.06 * (47.5% - (0.5 * var(--bs-gutter-x)))));
  aspect-ratio: 1 / 1;
  position: fixed;
  // below the loader but above everything else
  z-index: 9998 !important;
  @media (orientation: portrait) {
    width: calc((0.15 * (46.25% - (0.5 * var(--bs-gutter-x)))));
  }
}
.coreMenu {
  // overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
}
.optionContainer {
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  // margin: 15px 0 0 0;
  background: $lightWhiteColor;
  border-radius: 50%;
  position: absolute;
  border: 1px solid $darkBlackColor;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  transition: all 500ms ease;
  .bar {
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
    height: 1px;
    background: $darkBlackColor;
    position: absolute;
  }
  .top {
    top: 35%;
    left: 20%;
    width: 27.5%;
  }
  .bottom {
    top: 65%;
    left: 50%;
    width: 27.5%;
  }
  .center {
    top: 50%;
    left: 20%;
    width: 60%;
  }
  &:hover {
    transition: all 300ms ease;
    border-color: $offWhiteColor;
    background-color: $dolphinBlueColor;
    .bar {
      background-color: $offWhiteColor;
    }
    .navIcon {
      filter: invert(100%) brightness(1) contrast(1) saturate(100%);
    }
  }
  &.active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    .center {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    .top {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .bottom {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
.subMenu {
  width: 100%;
  height: 100%;
  margin-top: 85%;
  position: absolute;
  display: none;
  .optionContainer {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 15%;
  }
  &.active {
    display: block;
  }
}
.navIcon {
  position: absolute;
  right: 20%;
  top: 20%;
  height: 60%;
  width: 60%;
  -webkit-user-drag: none;
  user-select: none;
  // ensures hover/clicks still work
  pointer-events: auto;
}
</style>
