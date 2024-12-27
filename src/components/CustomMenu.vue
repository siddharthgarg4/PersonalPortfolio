<template>
  <BContainer fluid class="removePadding customMenuContainer">
    <BRow class="menu">
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
          <img
            :src="`/images/homeNav.png`"
            alt="Home"
            class="img-fluid navIcon"
          />
        </div>
        <div
          class="optionContainer"
          @click="scrollToSection('experienceSection')"
        >
          <img
            :src="`/images/projectsNav.png`"
            alt="Experience"
            class="img-fluid navIcon"
          />
        </div>
        <div class="optionContainer" @click="scrollToSection('aboutSection')">
          <img
            :src="`/images/aboutNav.png`"
            alt="About Me"
            class="img-fluid navIcon"
          />
        </div>
        <div class="optionContainer" @click="scrollToSection('contactSection')">
          <img
            :src="`/images/contactNav.png`"
            alt="Contact"
            class="img-fluid navIcon"
          />
        </div>
      </div>
    </BRow>
  </BContainer>
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
.menu {
  position: relative;
  border: 1px solid transparent;
}
.customMenuContainer {
  position: fixed;
  z-index: 2 !important;
}
.coreMenu {
  overflow: hidden;
}
.optionContainer {
  cursor: pointer;
  display: block;
  height: 50px;
  width: 50px;
  margin: 15px 0 0 0;
  background: $lightWhiteColor;
  padding: 0;
  right: 0;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  border: 1px solid $darkBlackColor;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  transition: all 500ms ease;
  @media (max-width: $screen-sm) {
    height: 35px !important;
    width: 35px !important;
  }
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
  position: absolute;
  right: 0;
  display: none;
  margin-top: 65px;
  width: unset;
  padding: unset;
  @media (max-width: $screen-sm) {
    margin-top: 50px;
  }
  .optionContainer {
    position: relative;
    margin-top: 0px;
    margin-bottom: 10px;
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
}
</style>
