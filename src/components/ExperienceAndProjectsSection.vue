<template>
  <BContainer class="experienceProjectContainer" fluid>
    <BRow v-animated-scroll>
      <BCol class="componentTitleContainer">
        <p class="componentTitle">Work Experience</p>
      </BCol>
    </BRow>
    <BRow v-animated-scroll>
      <BCol cols="12" class="componentSubtitleContainer">
        <p class="componentTitle">Full-time</p>
      </BCol>
      <BCol cols="12" class="cardContainer">
        <customCard experienceName="ffaiFT"></customCard>
      </BCol>
      <BCol cols="12" class="cardContainer">
        <customCard experienceName="upliftFT"></customCard>
      </BCol>
    </BRow>
    <BRow v-animated-scroll class="align-items-stretch">
      <BCol cols="12" class="componentSubtitleContainer">
        <p class="componentTitle">Internship</p>
      </BCol>
      <BCol cols="12" lg="6" class="cardContainer">
        <customCard experienceName="uplift"></customCard>
      </BCol>
      <BCol cols="12" lg="6" class="cardContainer">
        <customCard experienceName="shopify"></customCard>
      </BCol>
      <BCol cols="12" lg="6" class="cardContainer">
        <customCard experienceName="tile"></customCard>
      </BCol>
      <BCol cols="12" lg="6" class="cardContainer">
        <customCard experienceName="td"></customCard>
      </BCol>
    </BRow>
    <BRow v-animated-scroll>
      <BCol cols="12" class="componentCarouselTitleContainer">
        <p class="componentTitle">Personal Projects</p>
      </BCol>
      <BCol cols="12" class="removePadding carouselContainer">
        <Carousel v-bind="carouselConfig" class="paddingForCarouselNav">
          <Slide v-for="(project, i) in projects" :key="i">
            <customCard :experienceName="project"></customCard>
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
import animatedScroll from "@/directives/scrollAnimation.ts";
// Carousel specific imports
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css";
// Carousel custom default configs
import { useCarouselConfig } from "@/composables/carouselConfig";

export default defineComponent({
  name: "ExperienceAndProjectsSection",
  directives: {
    "animated-scroll": animatedScroll,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    // Reactives
    const carouselConfig = useCarouselConfig();

    const projects: string[] = [
      "endgame",
      "grow",
      "healthline",
      "blindsight",
      "instameet",
      "paypool",
    ];

    return {
      projects,
      carouselConfig,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.experienceProjectContainer {
  background-color: $lightWhiteColor;
  background-image: url("/images/dotBackground-2.png"),
    url("/images/dotBackground-2-flipped.png"),
    url("/images/dotBackground-2.png"),
    url("/images/dotBackground-2-flipped.png");
  background-position:
    top 7.5% left,
    top 26.5% right,
    top 54.5% left,
    top 81.5% right;
  padding: 5% 7.5% 5% 7.5%;
  background-repeat: no-repeat;
  background-size: 30%;
  @media (max-width: $screen-md) {
    background-size: 70%;
    background-position:
      top 4.5% left,
      top 28.75% right,
      top 62% left,
      top 78.5% right;
  }
}
</style>
