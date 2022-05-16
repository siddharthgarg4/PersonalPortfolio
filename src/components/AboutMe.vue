<template>
  <b-container class="aboutMeContainer" fluid>
    <b-row class="aboutMeDescriptionContainer" v-scrollAnimation>
      <b-col lg="6">
        <p class="componentTitle">This is Me</p>
        <p class="aboutMeDescription removeMargin">
          {{ json["me"].description }}
        </p>
      </b-col>
      <b-col lg="6" class="myImageContainer">
        <img class="img-fluid divider" src="../static/assets/divider.png" />
        <img class="img-fluid myImage" src="../static/assets/me-2.png" />
        <img class="img-fluid divider" src="../static/assets/divider.png" />
      </b-col>
    </b-row>
    <b-row v-scrollAnimation>
      <b-col lg="4" class="cardContainer">
        <recommendationCard
          recommendation="andreGattiRecommendation"
        ></recommendationCard>
      </b-col>
      <b-col lg="4" class="cardContainer">
        <recommendationCard
          recommendation="kellyWengertRecommendation"
        ></recommendationCard>
      </b-col>
      <b-col lg="4" class="cardContainer">
        <recommendationCard
          recommendation="aaronStuartRecommendation"
        ></recommendationCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
var json = require("@/static/content.json");
export default {
  created() {
    this.json = json;
  },
};
</script>

<style lang="scss">
@import "../styles/main.scss";
.aboutMeContainer {
  background: $offWhiteColor;
  padding: 5% 7.5% 5% 7.5%;
}
.aboutMeDescription {
  font-weight: 400;
  font-size: 1.5vw;
  text-align: start;
  white-space: pre-line;
  @media (max-width: $screen-md) {
    font-size: 3vw;
    margin: 1rem;
    text-align: center;
  }
}
.aboutMeDescriptionContainer {
  margin-bottom: 35px;
}
.aboutMeImageContainer {
  justify-content: flex-end;
}
.divider {
  width: 50%;
  opacity: 0.25;
  margin: 0 25% 0 25%;
}
.myImage {
  margin: 20px 0 20px 0;
}
.myImageContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
