<template>
  <BContainer fluid class="removePadding h-100">
    <div v-if="currentRecommendationDetails" class="h-100">
      <BCard no-body class="recommendationCard h-100 cursorPointer">
        <BRow class="g-0">
          <!-- The image is displayed on the left side for smaller sizes !-->
          <BCol
            cols="3"
            lg="12"
            class="d-flex justify-content-center align-items-center"
          >
            <BCardImg
              :src="`/images/${currentRecommendationDetails.recommenderImage}`"
              :alt="currentRecommendationDetails.recommenderName"
              class="recommendationCardImg"
            />
          </BCol>
          <BCol cols="9" lg="12">
            <BCardBody>
              <p class="cardTitle removeMargin">
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
    </div>
    <div v-else class="h-100">
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
  background-color: $lightWhiteColor;
  border: none;
  align-items: center;
  &:hover {
    box-shadow: $dolphinBlueColor 0px 5px 10px;
    -webkit-transform: translate3d(0px, -5px, 0px);
    -moz-transform: translate3d(0px, -5px, 0px);
    -ms-transform: translate3d(0px, -5px, 0px);
    -o-transform: translate3d(0px, -5px, 0px);
    transform: translate3d(0px, -5px, 0px);

    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    transition: all 500ms ease;
  }
  @media (max-width: $screen-md) {
    justify-content: center;
    & {
      pointer-events: none; /* Disables hover interaction */
    }
  }
  .cardParagraph {
    font-size: 1.25vw;
    font-weight: 400;
    text-align: center;
    @media (max-width: $screen-md) {
      font-size: 3.4vw;
      text-align: left;
    }
  }
}
.recommendationCardImg {
  height: 7.5vw;
  width: auto !important;
  margin-top: 1.25rem;
  border-radius: 50%;
  @media (max-width: $screen-md) {
    height: 15vw;
    margin-left: 1.25rem;
    margin-top: 0;
  }
}
</style>
