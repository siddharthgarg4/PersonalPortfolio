<template>
  <b-container class="experienceProjectContainer" fluid>
    <b-row>
      <b-col class="componentTitleContainer">
        <p class="componentTitle removeMargin" v-scrollAnimation>
          Work Experience
        </p>
      </b-col>
    </b-row>
    <b-row v-scrollAnimation>
      <b-row>
        <b-col class="componentSubtitleContainer">
          <p class="componentTitle removeMargin">Full-time</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" class="cardContainer">
          <customCard projectName="upliftFT"></customCard>
        </b-col>
      </b-row>
    </b-row>
    <b-row v-scrollAnimation>
      <b-row>
        <b-col class="componentSubtitleContainer">
          <p class="componentTitle removeMargin">Internship</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" class="cardContainer">
          <customCard projectName="uplift"></customCard>
        </b-col>
        <b-col lg="6" class="cardContainer">
          <customCard projectName="shopify"></customCard>
        </b-col>
        <b-col lg="6" class="cardContainer">
          <customCard projectName="tile"></customCard>
        </b-col>
        <b-col lg="6" class="cardContainer">
          <customCard projectName="td"></customCard>
        </b-col>
      </b-row>
    </b-row>
    <b-row v-scrollAnimation>
      <b-row>
        <b-col class="componentTitleContainer">
          <p class="componentTitle removeMargin">Personal Projects</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="endgame"></customCard>
        </b-col>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="grow"></customCard>
        </b-col>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="healthline"></customCard>
        </b-col>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="blindsight"></customCard>
        </b-col>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="instameet"></customCard>
        </b-col>
        <b-col lg="4" class="cardContainer">
          <customCard projectName="paypool"></customCard>
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<style lang="scss">
@import "../styles/main.scss";
.cardContainer {
  margin-bottom: 35px;
}
.experienceProjectContainer {
  background-color: $lightWhiteColor;
  background-image: url("../static/assets/dotBackground-2.png"),
    url("../static/assets/dotBackground-2-flipped.png"),
    url("../static/assets/dotBackground-2.png"),
    url("../static/assets/dotBackground-2-flipped.png");
  background-position: top 6.125% left, top 26.5% right, top 54.5% left,
    top 99% right;
  padding: 5% 7.5% 5% 7.5%;
  background-repeat: no-repeat;
  background-size: 30%;
  @media (max-width: $screen-md) {
    background-size: 70%;
    background-position: top 2.65% left, top 28.75% right, top 62% left,
      top 99.5% right;
  }
}
.componentTitleContainer {
  margin-top: 35px;
  margin-bottom: 35px;
}
.componentTitle {
  font-size: 2.5vw;
  font-weight: 600;
  text-align: start;
  line-height: 3.25vw;
  @media (max-width: $screen-md) {
    font-size: 5.58vw;
    line-height: 6.5vw;
    text-align: center;
  }
}
.componentSubtitleContainer {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
