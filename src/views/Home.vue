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
        <b-col sm="3" md="2" lg="2" xl="1" cols="3">
          "something goes here"
        </b-col>
      </b-row>

      <b-row class="center-name align-items-center d-flex" align-h="center">
        <b-col class="col-auto">
          <img class="img-fluid center-image" src="../assets/center.png">
        </b-col>
      </b-row>

      <b-row align-h="end">
        <b-col class="col-auto">
          <img src="../assets/gitHub.png" class="img-fluid fixed-icon">
        </b-col>
      </b-row>

      <b-row class="justify-content-end d-flex" align-v="end">
        <b-col cols="4" class="d-flex justify-content-center">
          <img src="../assets/scrollMore.png" class="img-fluid scroll-icon">
        </b-col>
        <b-col cols="4" class="d-flex justify-content-end">
          <img src="../assets/linkedIn.png" class="img-fluid fixed-icon">
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "../style/main.scss";
@import "../style/variable.scss";
.home {
  min-height: 400vh;
  max-height: 400vh;
  height: 400vh;
  background-color: $tint;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 3%;
  padding-bottom: 3%;
  .homePage {
    height: 90vh;
    // background-color: white;
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
  .fixed-icon {
    max-width: 50px;
    max-width: 50px;
    padding-top: 20px;
    @media (max-width: $screen-sm) {
      max-width: 40px;
      max-width: 40px;
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
</style>
