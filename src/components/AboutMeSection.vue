<template>
  <BContainer class="aboutMeContainer componentContainerPadding" fluid>
    <BRow>
      <BCol cols="12" lg="6">
        <BRow>
          <BCol cols="12" class="componentSubtitleContainer">
            <p class="componentTitle">This is Me</p>
          </BCol>
          <BCol cols="12" class="aboutMeDescriptionContainer">
            <p class="aboutMeDescription">
              <!-- 1. Intro -->
              Hello again! 👋🏽
              <br /><br />
              My name's Siddharth (Sid), and here's a little glimpse of my
              journey so far.
              <br /><br />
              <span class="tintFont">“Seek Discomfort”</span> has been a
              defining theme throughout — a constant reminder that holistic
              growth comes from the steadfast pursuit of new opportunities and
              challenges in unfamiliar environments. <br /><br />
              <!-- 2. International -->
              <!-- 3. Education -->
              This mindset is reflected throughout my higher education in
              Canada, where I participated in several hackathons across North
              America, engaged in extracurriculars like Habitat for Humanity,
              took part in an academic exchange in Europe, and worked part-time
              at the university library, among other experiences. In October
              2022, I graduated with dual degrees — a
              <span class="tintFont">Bachelor of Computer Science</span> and a
              <span class="tintFont">Bachelor of Business Administration</span>.
              <br /><br />
              <!-- 4. Experiences -->
              Fascinated by the intersection of these fields, I explored roles
              ranging from
              <!-- eslint-disable-next-line -->
              <span class="tintFont">
                software engineering to product management
              </span>
              at companies across different sizes, industries, and market
              segments. My most recent experience was at an ed-tech company,
              building
              <span class="tintFont">AI-powered workforce systems</span> aimed
              at empowering individuals, organizations, and governments in a
              rapidly evolving digital world. <br /><br />
              <!-- 5. Extracurricular -->
              Outside of school and work, I enjoy hiking, playing soccer,
              exploring cities, going on unplanned adventures, and meeting new
              people.
              <br /><br />
              <!-- 6. Outro -->
              With a strong desire to contribute to the greater social good, I'm
              <!-- eslint-disable-next-line -->
              currently
              <span class="tintFont"
                >seeking new projects and opportunities</span
              >
              with an aligned goal of creating
              <!-- eslint-disable-next-line -->
              <span class="tintFont">long-term, positive societal impact</span>.
              <br /><br />
              Feel free to reach out through any of the social links at the
              bottom of the page to discuss outrageous ideas, grab a coffee or
              even just to say hi! 💬 ☕ 🙌🏽
            </p>
          </BCol>
        </BRow>
      </BCol>
      <BCol cols="12" lg="6" class="myImageContainer">
        <img
          class="img-fluid divider"
          src="/images/divider.png"
          loading="lazy"
        />
        <img class="img-fluid myImage" src="/images/me-2.png" loading="lazy" />
        <img
          class="img-fluid divider"
          src="/images/divider.png"
          loading="lazy"
        />
      </BCol>
    </BRow>
    <BRow class="recommendationComponentContainer">
      <BCol cols="12" class="componentSubtitleContainer">
        <p class="componentTitle">Recommendations</p>
      </BCol>
      <BCol cols="12" class="carouselContainer">
        <Carousel v-bind="carouselConfig" class="paddingForCarouselNav">
          <Slide v-for="(rec, i) in recommendations" :key="i">
            <recommendationCard :recommendation="rec"></recommendationCard>
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Carousel specific imports
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";
// Carousel custom default configs
import { useCarouselConfig } from "@/composables/carouselConfig";

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
    const carouselConfig = useCarouselConfig();

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
  background-color: $offWhiteColor;
}
.aboutMeDescriptionContainer {
  margin-bottom: 25px;
}
.myImageContainer {
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}
.divider {
  width: 50%;
  opacity: 0.25;
}
.divider:first-of-type {
  margin-block-end: 7.5%;
}
.divider:last-of-type {
  margin-block-start: 7.5%;
}
.myImage {
  width: 67.5%;
}
:deep(.carousel__viewport) {
  // to account for recommendation card effect
  padding: 15px 0px;
}
.recommendationComponentContainer {
  // subtract padding (15px) above
  .componentSubtitleContainer {
    margin-bottom: 5px !important;
  }
  .paddingForCarouselNav {
    padding-bottom: 15px !important;
  }
}
</style>
