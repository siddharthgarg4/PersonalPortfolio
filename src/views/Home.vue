<template>
  <div class="home" id="home">
    <b-container fluid>
      <b-row class="navigation d-flex align-items-center">
        <b-col lg="2" sm="3" md="2" xl="1" cols="3" class="pagination-centered">
          <img class="img-fluid logo" src="../assets/sgLogo.png" />
        </b-col>
        <b-col lg="4" sm="6" md="8" xl="6" cols="6">
          <hr class="navigation-decorator" />
        </b-col>
        <b-col lg="4" xl="4" sm="0" md="0" class="d-none d-lg-block">
          <b-row class="justify-content-around d-flex align-items-start">
            <b-col class="align-items-center no-gutters col-md-auto">
              <p class="navigation-item">projects</p>
            </b-col>
            <b-col class="align-items-center no-gutters col-md-auto">
              <p class="navigation-item">about</p>
            </b-col>
            <b-col class="align-items-center no-gutters col-md-auto">
              <p class="navigation-item">contact</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="3" md="2" lg="2" xl="1" cols="3">
          //put it here !!!!
        </b-col>
      </b-row>
      <b-row class="center-name">
      </b-row>
       <b-row class="bottom-navigation">
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
  min-height: 100vh;
  max-height: 100vh;
  background-color: $tint;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 3%;
  padding-bottom: 3%;
  .navigation-item {
    font-size: 25px;
    font-family: "Oh Now!", sans-serif;
    padding-top: 8pt;

    @media (max-width: $screen-lg) {
      font-size: 20px !important;
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
}
</style>
