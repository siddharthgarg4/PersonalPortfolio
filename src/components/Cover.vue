<template>
  <b-container class="coverContainer" fluid>
    <b-row>
      <b-col class="justify-content-start d-flex">
        <img class="sgLogo" src="../assets/sgLogo.png" />
      </b-col>
      <b-col class="justify-content-end d-flex menuContainer removePadding">
        <customMenu></customMenu>
      </b-col>
    </b-row>
    <b-row align-v="center" class="coverCenter align-items-center d-flex">
      <b-col lg="6" class="coverText">
        <b-row>
          <b-col class="align-items-center removePadding" cols="12">
            <p class="coverTitle">Hi, I’m Sid</p>
          </b-col>
          <b-col class="align-items-center removePadding" cols="12">
            <p class="coverPara">
              Using <span class="blueFont">software engineering</span> as a gateway to 
              translate problems into empowering humanistic solutions.
            </p>
          </b-col>
          <b-col class="align-items-center removePadding" cols="12">
            <p class="coverResume cursorPointer" @click="goToResume">
              In a hurry? Check out my <span class="blueFont">resume</span>.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="6" class="extraPadding" v-scrollAnimation>
        <img
          class="img-responsive fitImage"
          src="../assets/coverMainPicture.png"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex justify-content-start">
        <div
          class="solidVerticalLine cursorPointer"
          @click="scrollToExperience"
        ></div>
      </b-col>
      <b-col cols="12" class="d-flex justify-content-start">
        <p
          class="scrollMoreText removeMargin cursorPointer"
          @click="scrollToExperience"
        >
          Scroll to Learn More
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    scrollToExperience() {
      let sectionElement = document.getElementById("experience");
      if (sectionElement != null) {
        sectionElement.scrollIntoView({ block: "start", behavior: "smooth" });
      } else {
        console.log(
          "The element associated with the menu item is null / could not be found."
        );
      }
    },
    goToResume() {
      window.open('https://drive.google.com/open?id=1znD9D40aV2y3--KMBDNguyxXOTcXZnXw', "_blank");
    }
  }
});
</script>

<style lang="scss">
@import "../styles/main.scss";
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
  background: linear-gradient(
    90deg,
    $offWhiteColor 72.5%,
    $darkBlueColor 27.5%
  );
  padding: 1.5%;
  @media (max-width: $screen-md) {
    background: linear-gradient(
      180deg,
      $offWhiteColor 72.5%,
      $darkBlueColor 27.5%
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
  font-size: 3.125vw;
  font-weight: 400;
  text-align: start;
  @media (max-width: $screen-md) {
    font-size: 6.7vw;
    text-align: center;
  }
}
.coverPara {
  font-size: 2.5vw;
  font-weight: 600;
  text-align: start;
  line-height: 3vw;
  @media (max-width: $screen-md) {
    font-size: 5vw;
    line-height: 5.5vw;
    text-align: center;
  }
}
.blueFont {
  color: $darkBlueColor;
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
  border-left: 2px solid $darkBlueColor;
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
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
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
