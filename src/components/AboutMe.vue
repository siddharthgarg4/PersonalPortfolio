<template>
  <b-container class="aboutMeContainer" fluid>
    <b-row class="aboutMeDescriptionContainer" v-scrollAnimation>
      <b-col lg="6">
        <p class="componentTitle">This is Me</p>
        <p class="aboutMeDescription removeMargin">
          <!-- 1. Intro -->
          Hello again! 👋🏽<br /><br />My name’s Siddharth (Sid), and I'm thrilled
          that you have taken an interest in learning more about me. A guiding
          principle in my life, and a common theme underlying my professional
          and personal journey so far, has been to
          <span class="tintFont">“Seek Discomfort”</span>. That is, a constant
          reminder to myself that true, holistic growth happens outside my
          comfort zone, through new challenges and ventures into the unknown.
          <br /><br />
          <!-- 2. International -->
          I stumbled across this slogan as a high-school teenager through a
          Youtube channel called “Yes Theory”; a group of young individuals open
          to new possibilities and an unwavering quest to seek opportunities to
          fulfil their goals. Their inspiring message resonated deeply within
          me, to the extent that I embarked on a journey of higher education as
          an <span class="tintFont">international student in Canada</span>, away
          from my family, at the age of eighteen. <br /><br />
          <!-- 3. Education -->
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
          <!-- 4. Experiences -->
          Through my education, I got numerous co-operative (internship) work
          experiences to explore roles ranging from
          <!-- eslint-disable-next-line -->
          <span class="tintFont">software engineering to product management</span> 
          at companies of varying locations, industries and stages of growth.
          Currently, I am honing my craft at an ed-tech company, working on
          <span class="tintFont">AI-powered workforce systems</span>–at the
          intersection of technology and societal impact–focused on empowering
          individuals and organisations to thrive in a rapidly digital
          environment. <br /><br />
          <!-- 5. Extracurricular -->
          Outside of school and work, I enjoy hiking, playing soccer, exploring
          new cities, going on unplanned adventures and meeting new people.
          <br /><br />
          <!-- 6. Outro -->
          With a strong desire to contribute to the greater social good, I'm
          <!-- eslint-disable-next-line -->
          currently <span class="tintFont">seeking new projects and opportunities</span>
          with an aligned goal of creating
          <!-- eslint-disable-next-line -->
          <span class="tintFont">long-term, positive societal impact</span>.
          Feel free to reach out through any of the social links at the bottom
          of the page to discuss outrageous ideas, grab a coffee or even just to
          say hi! 💬 ☕ 🙌🏽
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
  @media (max-width: $screen-md) {
    padding: 7.5% 5% 7.5% 5%;
  }
}
.aboutMeDescription {
  font-weight: 400;
  font-size: 1.25vw;
  text-align: start;
  white-space: pre-line;
  line-height: 1.25;
  @media (max-width: $screen-md) {
    font-size: 3.8vw;
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
