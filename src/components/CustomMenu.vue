<template>
  <b-container fluid class="removePadding customMenuContainer">
    <b-row class="menu">
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
        <div class="optionContainer" @click="scrollToSection('cover')">
          <img
            src="../static/assets/homeNav.png"
            alt="Home"
            class="img-fluid navIcon"
          />
        </div>
        <div class="optionContainer" @click="scrollToSection('experience')">
          <img
            src="../static/assets/projectsNav.png"
            alt="Experience"
            class="img-fluid navIcon"
          />
        </div>
        <div class="optionContainer" @click="scrollToSection('about')">
          <img
            src="../static/assets/aboutNav.png"
            alt="About Me"
            class="img-fluid navIcon"
          />
        </div>
        <div class="optionContainer" @click="scrollToSection('contact')">
          <img
            src="../static/assets/contactNav.png"
            alt="Contact"
            class="img-fluid navIcon"
          />
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isActivated: false
    };
  },
  methods: {
    toggleMenu(element: any) {
      this.isActivated = !this.isActivated;
    },
    scrollToSection(section: string) {
      let sectionElement = document.getElementById(section);
      if (sectionElement != null) {
        sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
        this.isActivated = !this.isActivated;
      } else {
        console.log(
          "The element associated with the menu item is null / could not be found."
        );
      }
    }
  }
});
</script>

<style lang="scss">
@import "../styles/main.scss";
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
  @media (max-width: $screen-sm) {
    margin-top: 50px;
  }
  .optionContainer {
    position: relative;
    margin-top: 0;
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
