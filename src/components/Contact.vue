<template>
  <b-container class="contactContainer" fluid>
    <b-row>
      <b-col cols="12">
        <p class="coverTitle removeMargin">Like what you see? Let’s talk!</p>
      </b-col>
      <b-col cols="12">
        <p class="aboutMeDescription">
          <!-- eslint-disable-next-line -->
          I am currently seeking opportunities for Fall 2021.<br />Made with ♡ in Waterloo
        </p>
      </b-col>
    </b-row>
    <b-row class="contactIconContainer">
      <b-col>
        <img
          src="../static/assets/linkedinContact.png"
          class="img-fluid contactIcon cursorPointer"
          @click="goToLink(json['linkedin'])"
        />
        <img
          src="../static/assets/emailContact.png"
          class="img-fluid contactIcon emailIcon cursorPointer"
          @click="goToLink(json['email'])"
        />
        <img
          src="../static/assets/githubContact.png"
          class="img-fluid contactIcon cursorPointer"
          @click="goToLink(json['github'])"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
var json = require("@/static/content.json");
import Vue from "vue";
export default Vue.extend({
  created() {
    this.json = json;
  },
  methods: {
    goToLink(givenLink) {
      window.open(givenLink, "_blank");
    },
  },
});
</script>

<style lang="scss">
@import "../styles/main.scss";
.contactContainer {
  background: $babyBlueColor;
  padding: 5% 7.5% 5% 7.5%;
  .coverTitle,
  .aboutMeDescription {
    color: $lightWhiteColor;
    text-align: center;
  }
  .coverTitle {
    font-weight: 500;
    line-height: 3.5vw;
    @media (max-width: $screen-md) {
      line-height: 7vw;
    }
  }
  .aboutMeDescription {
    margin: 15px 0 0 0;
    font-weight: 500;
  }
}
.contactIcon {
  height: auto;
  width: 3vw;
  margin: 30px 2.5vw 15px 2.5vw;
  @media (max-width: $screen-lg) and (min-width: $screen-sm) {
    width: 50px;
  }
  @media (max-width: $screen-sm) and (min-width: $screen-xs) {
    width: 40px;
  }
  @media (max-width: $screen-xs) {
    width: 30px;
  }
}
</style>
