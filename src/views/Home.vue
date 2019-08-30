<template>
  <div class="home" id="home">
    <b-container class="homePage" fluid>
      <b-row class="navigation d-flex align-items-center">
        <b-col lg="2" sm="3" md="2" xl="1" cols="3" class="pagination-centered">
          <img class="img-fluid logo" src="../assets/sgLogo.png" />
        </b-col>
        <b-col lg="4" sm="6" md="8" xl="6" cols="6">
          <hr class="navigation-decorator" />
        </b-col>
        <b-col lg="4" xl="4" sm="0" md="0" class="d-none d-lg-block">
          <b-row class="justify-content-around d-flex align-items-start">
            <b-col class="align-items-center no-gutters col-auto">
              <p class="navigation-item">projects</p>
            </b-col>
            <b-col class="align-items-center no-gutters col-auto">
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
          class="menu-container remove-all-padding"
        >
          <custom-menu></custom-menu>
        </b-col>
      </b-row>

      <b-row class="center-name align-items-center d-flex" align-h="center">
        <b-col class="col-auto">
          <img class="img-fluid center-image" src="../assets/center.png" />
        </b-col>
      </b-row>

      <div class="fixed-icon-container github">
        <img src="../assets/gitHub.png" class="img-fluid fixed-icon" />
      </div>
      <div class="fixed-icon-container linkedin">
        <img src="../assets/linkedIn.png" class="img-fluid fixed-icon" />
      </div>

      <b-row align-v="end" align-h="center scroll-container">
        <b-col cols="4" class="d-flex justify-content-center">
          <img src="../assets/scrollMore.png" class="img-fluid scroll-icon" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="project-page" fluid>
      <b-row class="remove-all-padding d-flex">
        <b-col class="d-flex justify-content-center remove-all-padding">
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
                cardColour="#E29188"
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
                cardColour="#A88A8C"
                projectName="grow"
              >
              </flip-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col md="6" sm="12" xs="12" class="remove-all-padding">
          <b-row>
            <b-col cols="12" class="easy-gr remove-all-padding">
              <flip-card
                :active-hover="true"
                height="100%"
                width="100%"
                transition="1s"
                class="simple-test"
                cardColour="#898C95"
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
                cardColour="#FEF4F3"
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
                cardColour="#FAB2AF"
                projectName="kinemagic"
              >
              </flip-card>
            </b-col>
          </b-row>
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
  min-height: 2400px;
  max-height: 400vh;
  width: 100vw !important;
  max-width: 100vw;
  max-width: 100vw;
  height: 400vh;
  background-color: $tint;
  @media (max-width: $screen-sm) {
    min-height: 3350px;
  }
  .homePage {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 3%;
    padding-bottom: 3%;
    height: 98vh;
    min-height: 600px;
    @media (max-width: $screen-sm) {
      margin-bottom: 75px;
      height: 90vh;
    }
  }
  .scroll-container {
    margin-top: 10%;
    @media (max-width: $screen-sm) {
      margin-top: 30%;
    }
  }
  .menu-container {
    height: 50px;
    @media (max-width: $screen-sm) {
      height: 40px !important;
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
    right: 25px !important;
    @media (max-width: $screen-sm) {
      right: 15px !important;
    }
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
  .scroll-icon {
    max-width: 50px;
    max-height: 25px;

    @media (max-width: $screen-sm) {
      max-width: 40px;
      max-height: 22px;
    }
  }
  .center-name {
    height: 65%;
  }
}
.remove-all-padding {
  padding: 0 !important;
}
.project-page {
  height: 150vh;
  min-height: 1200px;
  background-color: $tint;
  margin-top: 20px;
  @media (max-width: $screen-sm) {
    min-height: 2150px;
  }
  .page-title {
    font-size: 45px;
    margin: 0;
    font-family: "Oh Now!", sans-serif;
    @media (max-width: $screen-lg) {
      font-size: 35px !important;
    }
  }
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
  .buttonOne {
    background-colour: red;
  }
  .buttonTwo {
    background-colour: blue;
  }
}
</style>
