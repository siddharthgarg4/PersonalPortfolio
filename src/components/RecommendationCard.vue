<template>
  <BContainer fluid class="h-100">
    <BCard
      v-if="currentRecommendationDetails"
      no-body
      class="recommendationCard h-100"
    >
      <BRow class="g-0">
        <!-- The image is displayed on the left side for smaller sizes !-->
        <BCol cols="3" lg="12" class="recommendationCardImgContainer">
          <BCardImg
            :src="`/images/${currentRecommendationDetails.recommenderImage}`"
            :alt="currentRecommendationDetails.recommenderName"
            class="recommendationCardImg"
            loading="lazy"
          />
        </BCol>
        <BCol cols="9" lg="12">
          <BCardBody>
            <p class="cardTitle">
              {{ currentRecommendationDetails.recommenderName }}
            </p>
            <p class="cardSubtitle">
              {{ currentRecommendationDetails.recommenderPosition }}
            </p>
            <p class="cardParagraph">
              {{ currentRecommendationDetails.recommendationDescription }}
            </p>
          </BCardBody>
        </BCol>
      </BRow>
    </BCard>
    <div v-else>
      <p>No recommendation details found.</p>
    </div>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// Type-only import for PropType
import type { PropType } from "vue";
// Import content for cards
import json from "@/assets/content.json";
// import { getDynamicImageUrl } from "@/composables/sharedUtils";

export default defineComponent({
  name: "CustomCard",
  props: {
    recommendation: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    // Reactives
    const currentRecommendationDetails = ref<RecommendationType | null>(null);

    // Computed
    // const computedImageSrc = computed(() => {
    //   return getDynamicImageUrl(
    //     currentRecommendationDetails.value?.recommenderImage || ``,
    //   );
    // });

    // Method to load data
    const loadRecommendationDetails = (): void => {
      currentRecommendationDetails.value = json[
        props.recommendation
      ] as typeof currentRecommendationDetails.value;
    };

    // Mounted lifecycle hook
    onMounted(() => {
      loadRecommendationDetails();
    });

    return {
      currentRecommendationDetails,
      // computedImageSrc,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.recommendationCard {
  cursor: pointer;
  background-color: $lightWhiteColor;
  border: none;
  transition:
    transform 300ms ease,
    filter 300ms ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow($dolphinBlueColor 0px 5px 5px);
    }
  }

  @media (hover: none) {
    //mobile devices - user tap
    &:active {
      transform: translateY(-5px);
      filter: drop-shadow($dolphinBlueColor 0px 5px 5px);
    }
  }

  @media (max-width: $screen-md) {
    justify-content: center;

    .cardParagraph {
      text-align: left;
    }
  }
}
.recommendationCardImgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.recommendationCardImg {
  border-radius: 50%;
  width: 25%;
  margin-top: 1.25rem;
  @media (max-width: $screen-md) {
    width: 75%;
    margin-top: 0;
  }
}
</style>
