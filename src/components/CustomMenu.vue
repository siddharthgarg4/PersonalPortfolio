<template>
  <b-container
    fluid
    class="quick-menu"
    id="quick-menu"
    ref="quick-menu"
    :class="{ active: isActivated }"
  >
    <div :class="{ 'sub-menu': isActivated, sizeZero: !isActivated }">
      <a
        :class="{ 'menu-animate icon1': isActivated, sizeZero: !isActivated }"
        @click="scrollToSection('homePage')"
      ></a>
      <a
        :class="{ 'menu-animate icon2': isActivated, sizeZero: !isActivated }"
        @click="scrollToSection('project-page')"
      ></a>
      <a
        :class="{ 'menu-animate icon3': isActivated, sizeZero: !isActivated }"
        @click="scrollToSection('about-page')"
      ></a>
      <a
        :class="{ 'menu-animate icon4': isActivated, sizeZero: !isActivated }"
        @click="scrollToSection('project-page')"
      ></a>
    </div>
    <div class="menu fixed-top" :style="menuStyle">
      <div
        class="core-menu"
        :class="{ 'margin-reduce': isActivated }"
        @click="toggleMenu"
      >
        <div class="bar"></div>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "custom-menu",
  props: {
    backgroundColor: {
      type: String,
      default: "#20babb"
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      isActivated: false
    };
  },
  methods: {
    getSubMenu(n: any) {
      let menuPosition = [
        ["0", "-160"],
        ["80", "-138.6"],
        ["138.6", "-80"],
        ["160", "0"]
      ];
      return {
        top: menuPosition[n][0] + "px",
        left: menuPosition[n][1] + "px"
      };
    },
    menuStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      };
    },
    toggleMenu(e: any) {
      this.isActivated = !this.isActivated;
    },
    processCallback(key: any) {
      this.$emit("process", key);
    },
    scrollToSection(section: string) {
      let sectionElement = document.getElementById(section);
      if (sectionElement != null) {
        sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
        this.isActivated = !this.isActivated;
      } else {
        // console.log(
        //   "The element associated with the menu item is null / could not be found."
        // );
      }
    }
  }
});
</script>

<style lang="scss">
@import "../style/main.scss";
@import "../style/variable.scss";
.menu-animate {
  -webkit-animation: bounce 1s linear 1s;
  -moz-animation: bounce 1s linear 1s;
  animation: bounce 1s linear 1s;
}

.quick-menu {
  color: #fff;
  position: fixed;
  width: 50px;
  height: 50px;
  z-index: 4000 !important ;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
  @media (max-width: $screen-sm) {
    height: 40px !important;
    width: 40px !important;
  }
  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 50px;
    height: 50px;
    background-color: #050f19;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    margin-left: 13px;
    @media (max-width: $screen-sm) {
      height: 40px !important;
      width: 40px !important;
      margin-left: 15px;
    }
    .core-menu {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      margin-left: 6px;
      @media (max-width: $screen-sm) {
        margin-top: 2px;
        margin-left: 10px;
      }
      .bar {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        width: 28px;
        height: 3px;
        background: #ffeaea;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 16px;
        -webkit-transform-origin: 0% 50%;
        -moz-transform-origin: 0% 50%;
        -ms-transform-origin: 0% 50%;
        -o-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        &:before,
        &:after {
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          transition: all 1s ease;
          content: "";
          width: 28px;
          height: 3px;
          background: #ffeaea;
          position: absolute;
          left: 0px;
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }
        &:before {
          margin-top: 30%;
        }
        &:after {
          margin-top: 60%;
        }
      }
    }
  }
  .sub-menu {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    margin-top: 60px;

    width: 50px;
    height: 50px;
    @media (max-width: $screen-sm) {
      height: 40px !important;
      width: 40px !important;
    }
    font-size: 30px;
    text-align: center;
    border-radius: 50% !important;
    a {
      outline: none;
      text-decoration: none;
      display: inline-block;
      border-radius: 50% !important;
      width: 100%;
      height: 100%;
      i {
        outline: none;
        font-size: 30px;
        margin-top: 12px;
        background: transparent;
        &:before {
          vertical-align: middle;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  &.active {
    -webkit-transform: rotate(0deg) !important;
    -moz-transform: rotate(0deg) !important;
    -ms-transform: rotate(0deg) !important;
    -o-transform: rotate(0deg) !important;
    transform: rotate(0deg) !important;
    .menu {
      -webkit-transform: scale(0.7);
      -moz-transform: scale(0.7);
      -ms-transform: scale(0.7);
      -o-transform: scale(0.7);
      transform: scale(0.7);
      .bar {
        top: 50%;
        margin-top: -1.5px;
        left: 50%;
        margin-left: -12px;
        -webkit-transform-origin: 50% 50%;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -o-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: rotate(405deg);
        -moz-transform: rotate(405deg);
        -ms-transform: rotate(405deg);
        -o-transform: rotate(405deg);
        transform: rotate(405deg);
        &:before {
          -webkit-transform-origin: 50% 50%;
          -moz-transform-origin: 50% 50%;
          -ms-transform-origin: 50% 50%;
          -o-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          -webkit-transform: rotate(-450deg);
          -moz-transform: rotate(-450deg);
          -ms-transform: rotate(-450deg);
          -o-transform: rotate(-450deg);
          transform: rotate(-450deg);
          margin-top: 0px;
        }
        &:after {
          opacity: 0;
        }
      }
    }
  }
}
@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
  }
}
@-moz-keyframes bounce {
  0%,
  100% {
    -moz-transform: translateY(0px);
  }
  10% {
    -moz-transform: translateY(6px);
  }
  30% {
    -moz-transform: translateY(-4px);
  }
  70% {
    -moz-transform: translateY(3px);
  }
  90% {
    -moz-transform: translateY(-2px);
  }
}
@keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
  }
  10% {
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px);
    transform: translateY(6px);
  }
  30% {
    -webkit-transform: translateY(-4px);
    -moz-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    -o-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  70% {
    -webkit-transform: translateY(3px);
    -moz-transform: translateY(3px);
    -ms-transform: translateY(3px);
    -o-transform: translateY(3px);
    transform: translateY(3px);
  }
  90% {
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    transform: translateY(-2px);
  }
}
.margin-reduce {
  margin-left: 5px !important;
}
.sizeZero {
  height: 0px;
  width: 0px;
}
.icon1 {
  background-image: url("../assets/homeLogo.png");
  background-color: #050f19;
  background-size: 40px;
  @media (max-width: $screen-sm) {
    background-size: 30px;
  }
  background-repeat: no-repeat;
  background-position: center;
  right: 10px;
  top: 200px;
}
.icon2 {
  background-image: url("../assets/projectsLogo.png");
  background-color: #050f19;
  top: 60px;
  right: 40px;
  background-size: 40px;
  @media (max-width: $screen-sm) {
    background-size: 30px;
  }
  background-repeat: no-repeat;
  background-position: center;
}
.icon3 {
  background-image: url("../assets/aboutLogo.png");
  background-color: #050f19;
  top: 110px;
  right: 10px;
  background-size: 40px;
  @media (max-width: $screen-sm) {
    background-size: 30px;
  }
  background-repeat: no-repeat;
  background-position: center;
}
.icon4 {
  background-image: url("../assets/contactLogo.png");
  background-color: #050f19;
  top: 160px;
  right: 10px;
  background-size: 40px;
  @media (max-width: $screen-sm) {
    background-size: 30px;
  }
  background-repeat: no-repeat;
  background-position: center;
}
.fullSize {
  height: 100%;
  width: 100%;
}
</style>
