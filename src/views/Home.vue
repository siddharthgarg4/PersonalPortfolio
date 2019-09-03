<template>
  <div class="home" id="home">
    <b-container class="homePage" id="homePage" fluid>
      <b-row class="navigation d-flex align-items-center">
        <b-col lg="2" sm="3" md="2" xl="1" cols="3" class="pagination-centered">
          <img class="img-fluid logo" src="../assets/sgLogo.png" />
        </b-col>
        <b-col lg="4" sm="6" md="8" xl="6" cols="6">
          <hr class="navigation-decorator" />
        </b-col>
        <b-col lg="4" xl="4" sm="0" md="0" class="d-none d-lg-block">
          <b-row class="justify-content-around d-flex align-items-start">
            <b-col class="align-items-center no-gutters col-auto" @click="scrollToSection('project-page')">
              <p class="navigation-item">projects</p>
            </b-col>
            <b-col class="align-items-center no-gutters col-auto" @click="scrollToSection('about-page')">
              <p class="navigation-item">about</p>
            </b-col>
            <b-col class="align-items-center no-gutters col-auto">
              <p class="navigation-item">contact</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          sm="3"
          md="2"
          lg="2"
          xl="1"
          cols="3"
          class="menu-container d-flex justify-content-end"
        >
          <custom-menu></custom-menu>
        </b-col>
      </b-row>

      <b-row class="center-name align-items-center d-flex" align-h="center">
        <b-col class="col-auto">
          <img class="img-fluid center-image" src="../assets/center.png" />
        </b-col>
      </b-row>

      <div class="fixed-icon-container github" @click="goToGithub()">
        <img src="../assets/gitHub.png" class="img-fluid fixed-icon" />
      </div>
      <div class="fixed-icon-container linkedin" @click="goToLinkedIn()">
        <img src="../assets/linkedIn.png" class="img-fluid fixed-icon" />
      </div>

      <b-row align-v="end" align-h="center">
        <b-col
          cols="4"
          class="d-flex justify-content-center"
          @click="scrollToSection('project-page')"
          style="height: 100px;"
        >
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </b-col>
      </b-row>

    </b-container>
    <b-container class="project-page" id="project-page" fluid>

        <b-row class="remove-all-padding d-flex title-container" align-v="center" align-h="center">
          <b-col class="d-flex justify-content-center remove-all-padding col-auto">
            <p class="page-title">Personal Portfolio</p>
          </b-col>
        </b-row>

      <b-row>
        <b-col md="6" sm="12" xs="12" class="remove-all-padding">
          <b-row>
            <b-col cols="12" class="blindsight remove-all-padding">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#F37C74"
                projectName="blindsight"
              >
              </flip-card>
            </b-col>
            <b-col cols="12" class="grow remove-all-padding">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#122D40"
                projectName="grow"
              >
              </flip-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col md="6" sm="12" xs="12" class="remove-all-padding">
          <b-row>
            <b-col cols="12" class="easy-gr remove-all-padding order-last order-md-first">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#122D40"
                projectName="easygr"
              >
              </flip-card>
            </b-col>
            <b-col cols="12" class="healthline remove-all-padding">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#FFFFFF"
                projectName="healthline"
              >
              </flip-card>
            </b-col>
            <b-col cols="12" class="kinemagic remove-all-padding">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#F37C74"
                projectName="kinemagic"
              >
              </flip-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid id="about-page" class="about-page">

        <b-row class="remove-all-padding d-flex title-container" align-v="center" align-h="center">
          <b-col class="d-flex justify-content-center remove-all-padding col-auto">
            <p class="page-title">This is me</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <about backgroundColour="#122D40" aboutSection='myself'></about>
          </b-col>
        </b-row>

        <b-row class="divider"></b-row>

        <b-row>
          <b-col>
            <about backgroundColour="#F37C74" aboutSection='experience' rightPicture='true'></about>
          </b-col>
        </b-row>

    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
var json = require("@/static/content.json");
export default Vue.extend({
  name: "home",
  data() {
    return {
      json: {}
    };
  },
  methods: {
    goToGithub() {
      window.open("https://github.com/siddharthgarg-waterloo", "_blank");
    },
    goToLinkedIn() {
      window.open(
        "https://www.linkedin.com/in/siddharthgarg-waterloo/",
        "_blank"
      );
    },
      scrollToSection(section: string) {
        let sectionElement = document.getElementById(section);
        if (sectionElement != null) {
          sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
        } else {
        // console.log(
        //   "The element associated with the menu item is null / could not be found."
        // );
      }
    }
  },
  mounted() {
    this.json = json;
  }
});
</script>

<style lang="scss">
@import "../style/main.scss";
@import "../style/variable.scss";
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
.home {
  background-color: $tint;
  .homePage {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 3%;
    padding-bottom: 3%;
    min-height: 99vh;
  }
  .menu-container {
    height: 50px;
    padding-right: 5%;
    @media (max-width: $screen-sm) {
      height: 40px !important;
      padding-right: 7% !important;
    }
    @media (max-width: $screen-sm) {
      padding-right: 12% !important;
    }
  }
  .navigation-item {
    font-size: 30px;
    font-family: "Oh Now!", sans-serif;
    padding-top: 8pt;
    @media (max-width: $screen-lg) {
      font-size: 25px !important;
    }
  }
  .navigation-decorator {
    background-color: $highlight;
    color: $highlight;
  }
  .logo {
    height: 17pt;
    width: 22px;
  }
  .center-image {
    max-width: 400px;
    min-width: 200px;
    padding-top: 5%;
    @media (max-width: $screen-xs) {
      max-width: 300px;
      min-width: 100px;
    }
  }
  .fixed-icon-container {
    position: fixed;
    z-index: 4000 !important;
  }
  .github {
    bottom: 105px;
    @media (max-width: $screen-sm) {
      bottom: 65px;
    }
  }
  .linkedin {
    bottom: 45px;
    @media (max-width: $screen-sm) {
      bottom: 20px;
    }
  }
  .fixed-icon {
    max-width: 50px;
    min-width: 50px;
    max-height: 75px;
    height: auto;
    @media (max-width: $screen-sm) {
      max-width: 40px;
      min-width: 40px;
    }
    @media (max-width: $screen-xs) {
    }
  }
  .center-name {
    min-height: 75vh;
  }
}
.remove-all-padding {
  padding: 0 !important;
}
.page-title {
    font-size: 45px;
    margin: 0;
    font-family: "Oh Now!", sans-serif;
  }
.project-page {
  .blindsight {
    height: 55vh;
    min-height: 440px;
  }
  .easy-gr {
    height: 40vh;
    min-height: 320px;
  }
  .healthline {
    height: 50vh;
    min-height: 400px;
  }
  .grow {
    height: 75vh;
    min-height: 600px;
  }
  .kinemagic {
    height: 40vh;
    min-height: 320px;
  }
  .fullSize {
    height: 100%;
    width: 100%;
  }
}
$base: 0.6rem;
.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #050f19;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}
.title-container {
  height: 10vh;
  min-height: 75px;
}

.about-page {
  min-height: 100vh;
  .divider {
    height: 1vh;
  }
}
</style>
