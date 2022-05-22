<template>
  <b-container class="aboutMeContainer" fluid>
    <b-row class="aboutMeDescriptionContainer" v-scrollAnimation>
      <b-col lg="6">
        <p class="componentTitle">This is Me</p>
        <p class="aboutMeDescription removeMargin">
          Hello again! 👋🏽<br /><br />My name’s Siddharth (Sid) and I am
          currently in my last semester of the Computer Science (University of
          Waterloo) and Business Administration (Wilfrid Laurier University)
          Double Degree program.<br /><br />As part of the co-operative
          (internship) program, I explored multiple roles ranging from
          <!-- eslint-disable-next-line -->
          <span class="tintFont">software development to product management</span>
          at companies in various industries and stages of growth. These
          opportunities have allowed me to refine my leadership and technical
          skills while working on products currently in the market.<br /><br />
          With a strong desire to contribute to the greater
          <span class="tintFont">social good</span>, I am currently seeking a
          full-time position in a company with similar goals to create a
          <span class="tintFont">long-term, positive societal impact</span>.
          Furthermore, as a professional at the intersection of software and
          product, I am constantly challenging myself to push outside my comfort
          zone, as I believe that we stop growing once we are unwilling to have
          new experiences and tread the unknown.<br /><br />Outside of school
          and work, I love exploring new cities, going on unplanned adventures,
          hiking and meeting new people. Feel free to message me using any of
          the socials at the bottom of this page to discuss opportunities, grab
          a coffee or even just to say hi 💬 ☕ 🙌🏽
        </p>
      </b-col>
      <b-col lg="6" class="myImageContainer">
        <img class="img-fluid divider" src="../static/assets/divider.png" />
        <img class="img-fluid myImage" src="../static/assets/me-3.png" />
        <img class="img-fluid divider" src="../static/assets/divider.png" />
      </b-col>
    </b-row>
    <b-row v-scrollAnimation>
      <b-col lg="4" class="cardContainer">
        <recommendationCard
          recommendation="nathanAptRecommendation"
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
  line-height: 1.25;
  @media (max-width: $screen-md) {
    font-size: 3vw;
    margin: 1rem;
    text-align: center;
  }

  .tintFont {
    font-weight: 600;
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
  margin: auto;
  height: 60%;
}
.myImageContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
