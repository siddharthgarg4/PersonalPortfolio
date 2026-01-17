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
              My name's Siddharth (Sid), and I'm an engineer fueled by empathy
              and curiosity. I thrive at the intersection of complex
              problem-solving and user-centric design.
              <br /><br />
              <!-- 2. Philosophy -->
              <span class="tintFont">“Seek Discomfort”</span>
              (<span class="urlFont" @click="handleAboutMeLink('yesTheoryYT')"
                >inspired by Yes Theory</span
              >) has been my guiding principle—a constant reminder to embrace
              new opportunities and unfamiliar challenges.
              <!-- 3. Education -->
              This mindset shaped my higher education in Canada, where I
              balanced rigorous academics with part-time work at the university
              library, leadership positions in student extracurriculars,
              hackathons across North America, and an academic exchange in
              Europe.
              <br /><br />
              In late 2022, I graduated with dual degrees—a
              <span class="tintFont">Bachelor of Computer Science</span>
              (<span class="urlFont" @click="handleAboutMeLink('uwCS')"
                >University of Waterloo</span
              >) and a
              <span class="tintFont">
                Bachelor of Business Administration - Finance
              </span>
              (<span class="urlFont" @click="handleAboutMeLink('wluBBA')"
                >Wilfrid Laurier University</span
              >).
              <!-- 4. Experiences -->
              Fascinated by the intersection of these fields, I have explored
              several roles ranging from software engineering to product
              management at companies of varying sizes, industries, and market
              segments.
              <br /><br />
              Most recently, I was at an ed-tech company building
              <span class="tintFont">AI-powered workforce systems</span>
              designed to empower individuals, organizations, and governments in
              a rapidly evolving digital landscape.
              <br /><br />
              <!-- 5. Extracurricular -->
              Outside of school and work, you'll find me hiking, nurturing
              plants, playing soccer, or embarking on adventures in new cities.
              <!-- 6. Outro -->
              With a strong desire to contribute to the greater social good, I'm
              currently seeking
              <span class="tintFont"> new projects and opportunities </span>
              that align with my goal of creating
              <span class="tintFont">long-term, positive societal impact</span>.
              <br /><br />
              Feel free to connect with me through any of the social links at
              the bottom of the page to discuss outrageous ideas, grab a coffee,
              or even just to say hi! 💬 ☕ 🙌🏽
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
import { defineComponent, onMounted, ref } from "vue";
import { visitLink } from "@/composables/sharedUtils";
import json from "@/assets/content.json";
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
    const currentPersonalDetails = ref<AboutMeType | null>(null);
    const carouselConfig = useCarouselConfig({
      breakpoints: {
        0: { itemsToShow: 1 },
        // needed to adjust for ipad pro
        991: { itemsToShow: 2 },
        1199: { itemsToShow: 3 },
      },
    });

    const recommendations: string[] = [
      "andrewKalymonRecommendation",
      "nathanAptRecommendation",
      "mikeCRecommendation",
      "andreGattiRecommendation",
      "kellyWengertRecommendation",
      "aaronStuartRecommendation",
    ];

    // Method to handle safe link visit
    const handleAboutMeLink = (aboutMeLink: AboutMeLinkType): void => {
      const link = currentPersonalDetails.value?.[aboutMeLink];
      if (link) {
        visitLink(link);
      } else {
        console.error(`No link found for ${aboutMeLink}`);
      }
    };
    // Method to load data
    const loadAboutMeData = (): void => {
      currentPersonalDetails.value = json[
        "me"
      ] as typeof currentPersonalDetails.value;
    };

    // Mounted lifecycle hook
    onMounted(() => {
      loadAboutMeData();
    });

    return {
      carouselConfig,
      recommendations,
      handleAboutMeLink,
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
