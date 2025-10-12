<template>
  <BContainer class="aboutMeContainer" fluid>
    <BRow class="aboutMeDescriptionContainer">
      <BCol lg="6">
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
          <span class="tintFont"
            >software engineering to product management</span
          >
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
          currently
          <span class="tintFont">seeking new projects and opportunities</span>
          with an aligned goal of creating
          <!-- eslint-disable-next-line -->
          <span class="tintFont">long-term, positive societal impact</span>.
          Feel free to reach out through any of the social links at the bottom
          of the page to discuss outrageous ideas, grab a coffee or even just to
          say hi! 💬 ☕ 🙌🏽
        </p>
      </BCol>
      <BCol lg="6" class="myImageContainer">
        <img class="img-fluid divider" src="/images/divider.png" />
        <img class="img-fluid myImage" src="/images/me-2.png" />
        <img class="img-fluid divider" src="/images/divider.png" />
      </BCol>
    </BRow>
    <BRow>
      <BRow class="removePadding">
        <BCol class="componentSubtitleContainer">
          <p class="componentTitle removeMargin">Recommendations</p>
        </BCol>
      </BRow>
      <Carousel v-bind="carouselConfig" class="removePadding">
        <Slide
          v-for="(rec, i) in recommendations"
          :key="i"
          class="cardContainer customCarouselContent"
        >
          <recommendationCard :recommendation="rec"></recommendationCard>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Carousel specific imports
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";

export default defineComponent({
  name: "AboutMeSection",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    // Reactives
    const carouselConfig = {
      wrapAround: true,
      snapAlign: "start",
      autoplay: 8000,
      transition: 300,
      pauseAutoplayOnHover: true,
      breakpoints: {
        0: {
          itemsToShow: 1,
        },
        992: {
          itemsToShow: 3,
        },
      },
    };

    const recommendations: string[] = [
      "andrewKalymonRecommendation",
      "nathanAptRecommendation",
      "mikeCRecommendation",
      "andreGattiRecommendation",
      "kellyWengertRecommendation",
      "aaronStuartRecommendation",
    ];

    return {
      carouselConfig,
      recommendations,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.aboutMeContainer {
  background: $offWhiteColor;
  padding: 5% 7.5% 5% 7.5%;
  @media (max-width: $screen-md) {
    padding: 7.5% 5% 7.5% 5%;
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
.customCarouselContent {
  padding: 10px 15px;
  @media (max-width: $screen-md) {
    padding: 0px;
  }
}
</style>
