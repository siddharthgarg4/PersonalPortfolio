<template>
  <div class="customMenuContainer">
    <div
      class="mainMenu optionContainer"
      @click="toggleMenu"
      :class="{ active: isActivated }"
    >
      <div class="bar top"></div>
      <div class="bar center"></div>
      <div class="bar bottom"></div>
    </div>
    <div class="subMenu" :class="{ active: isActivated }">
      <div
        class="optionContainer"
        @click="scrollToSection('coverSection')"
        data-label="Home"
      >
        <img src="/images/homeNav.png" alt="Home" class="img-fluid navIcon" />
      </div>
      <div
        class="optionContainer"
        @click="scrollToSection('experienceSection')"
        data-label="Experience"
      >
        <img
          src="/images/projectsNav.png"
          alt="Experience"
          class="img-fluid navIcon"
        />
      </div>
      <div
        class="optionContainer"
        @click="scrollToSection('aboutMeSection')"
        data-label="About Me"
      >
        <img
          src="/images/aboutNav.png"
          alt="About Me"
          class="img-fluid navIcon"
        />
      </div>
      <div
        class="optionContainer"
        @click="scrollToSection('contactSection')"
        data-label="Contact"
      >
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
  width: 2.75rem;
  position: fixed;
  // anchor to the top right
  top: 1.75rem;
  right: 3.5rem;
  // below the loader but above everything else
  z-index: 9998 !important;

  transform: translate3d(0, 0, 0); 
  -webkit-transform: translate3d(0, 0, 0);
  
  /* Prevent scrolling adjustments */
  contain: layout;
  @media (orientation: portrait) {
    right: 1.75rem;
  }
}
.optionContainer {
  cursor: pointer;
  // display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: $lightWhiteColor;
  border-radius: 50%;
  border: 1px solid $darkBlackColor;
  box-sizing: border-box;
  transition: all 300ms ease;

  &.active {
    // applies to both hover and touch
    transform: scale(0.8);
  }
  @media (hover: hover) {
    // only applies to hover devices (laptop)
    &:hover {
      transition: all 300ms ease;
      border-color: $lightWhiteColor;
      background-color: $dolphinBlueColor;
      .navIcon {
        filter: invert(100%) brightness(1) contrast(1) saturate(100%);
      }
    }
  }
}
.mainMenu {
  .bar {
    position: absolute;
    height: 1px;
    background: $darkBlackColor;
    transition: all 300ms ease;
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
  &.active {
    .center {
      transform: rotate(-45deg);
    }
    .top,
    .bottom {
      transform: rotate(45deg);
    }
  }
  @media (hover: hover) {
    // only applies to hover devices (laptop)
    &:hover {
      .bar {
        background-color: $lightWhiteColor;
      }
    }
  }
}
.subMenu {
  width: 100%;
  position: absolute;
  // display: none;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition:
    opacity 300ms ease,
    visibility 300ms;

  &.active {
    // display: block;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .optionContainer {
    // only apply to submenu
    position: relative;
    margin-top: 15%;
    &::after {
      content: attr(data-label); // Grabs the text from data-label attribute
      position: absolute;
      right: 80%; // Positions it to the left of the circle
      top: 50%;
      transform: translateY(-50%);
      background: $lightWhiteColor;
      color: $darkBlackColor;
      padding: 4px 10px;
      border-radius: 0.2em;
      border: 1px solid $darkBlackColor;
      font-size: 0.8rem;
      white-space: nowrap;
      opacity: 0;
      // pointer-events: none;
      transition: all 300ms ease;
    }
    @media (hover: hover) {
      &:hover::after {
        opacity: 1;
        right: 120%; // Slight slide-in effect
      }
    }
    @media (hover: none) {
      &::after {
        opacity: 1;
        right: 120%; // Slight slide-in effect
      }
    }
  }
}
.navIcon {
  position: absolute;
  height: 60%;
  width: 60%;
  // center icon
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // prevent user drag
  user-select: none;
  -webkit-user-drag: none;
  // ensures hover/clicks still work
  pointer-events: auto;
}
</style>
