<template>
  <b-container class="aboutMeContainer" fluid>
    <b-row class="aboutMeDescriptionContainer" v-scrollAnimation>
      <b-col lg="6">
        <p class="componentTitle">This is Me</p>
        <p class="aboutMeDescription removeMargin">
          Hello again! 👋🏽<br /><br />My name’s Siddharth (Sid), and I am
          thrilled that you have taken an interest in learning more about me. My
          motto in life, one that I have always stood by and is a common theme
          underlying my personal and professional journey thus far, is to
          <span class="tintFont">“Seek Discomfort”</span>. That is, to
          constantly challenge myself to push outside my comfort zone, as I
          believe that we stop growing once we are unwilling to have new
          experiences and tread the unknown. <br /><br />
          I stumbled across this slogan as a high-school teenager through a
          Youtube channel called “Yes Theory”; a group of young individuals open
          to new possibilities and an unwavering quest to seek opportunities to
          fulfil their goals. Such an inspiring message resonated deeply within
          me to the extent that I embarked on a journey of higher education as
          an <span class="tintFont">international student in Canada</span>, away
          from my family, at the age of nineteen. <br /><br />
          However, this did not diminish my inner desire to seek further
          challenges. I participated in hackathons across North America, an
          academic exchange in Europe, worked part-time at the university
          library and engaged in extracurriculars such as Habitat for Humanity
          among others during my studies. In October of 2022, I had the pleasure
          of graduating with
          <!-- eslint-disable-next-line -->
          <span class="tintFont">dean’s honors in a dual degree program</span>
          with a Bachelor of Computer Science (University of Waterloo) and a
          Bachelor of Business Administration (Wilfrid Laurier University).<br /><br />
          Furthermore, as a part of the co-op work (internship) program during
          my education, I explored multiple roles ranging from
          <!-- eslint-disable-next-line -->
          <span class="tintFont">software engineering to product management</span>
          at companies in different industries, locations and stages of growth.
          These experiences taught me a diverse range of technical skills while
          providing me the opportunity to apply theoretical business knowledge
          on a wide breadth of products and markets. <br /><br />
          With a strong desire to contribute to the greater social good, I am
          currently
          <span class="tintFont">seeking a full-time position</span>
          in a company with similar goals of creating a
          <!-- eslint-disable-next-line -->
          <span class="tintFont">long-term, positive societal impact</span>.
          Feel free to message me using any of the socials at the bottom of the
          page to discuss opportunities, grab a coffee or even just to say hi 💬
          ☕ 🙌🏽
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
