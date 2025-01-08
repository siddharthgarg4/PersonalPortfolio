<template>
  <BContainer fluid class="removePadding h-100">
    <div v-if="currentExperienceDetails">
      <BCard
        no-body
        class="customCard cursorPointer h-100 overflow-hidden"
        @click="visitLink(currentExperienceDetails.link)"
      >
        <BRow class="g-0">
          <!-- The image is displayed on the left side for full-time experiences !-->
          <BCol cols="12" :lg="isExperienceFT ? 6 : 12">
            <BCardImg
              :src="computedImageSrc"
              :alt="currentExperienceDetails.title"
              class="rounded-0 h-100"
            />
          </BCol>
          <BCol cols="12" :lg="isExperienceFT ? 6 : 12">
            <BCardBody>
              <p class="cardTitle removeMargin">
                {{ currentExperienceDetails.title }}
              </p>
              <p class="cardSubtitle">
                {{ currentExperienceDetails.subtitle }}
              </p>
              <div v-if="isExperienceFT" class="ftPosition">
                <ul>
                  <li
                    v-for="(
                      ftDescriptionItem, index
                    ) in cachedParsedFTDescription"
                    :key="index"
                  >
                    <p class="cardParagraph">{{ ftDescriptionItem }}</p>
                  </li>
                </ul>
              </div>
              <div v-else class="internPosition">
                <p class="cardParagraph">
                  {{ currentExperienceDetails.description }}
                </p>
              </div>
            </BCardBody>
          </BCol>
        </BRow>
        <div class="viewProjectOverlay">
          <p class="overlayText removeMargin">
            {{ currentExperienceDetails.overlayTitle }}
          </p>
        </div>
      </BCard>
    </div>
    <div v-else>
      <p>No experience details found.</p>
    </div>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
// Type-only import for PropType
import type { PropType } from "vue";
// Import content for cards
import json from "@/assets/content.json";
import { visitLink, getDynamicImageUrl } from "@/composables/sharedUtils";

export default defineComponent({
  name: "CustomCard",
  props: {
    experienceName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    // Reactives
    const currentExperienceDetails = ref<ExperienceType | null>(null);
    const isExperienceFT = ref<boolean>(false);

    // Computed
    const computedImageSrc = computed(() => {
      return getDynamicImageUrl(
        currentExperienceDetails.value?.coverImageName || ``,
      );
    });

    // Method to parse FT description
    const parsedFTDescription = computed((): string[] => {
      return currentExperienceDetails.value?.description.split(";") || [];
    });
    
    // Cache the parsed FT description
    const cachedParsedFTDescription = computed(() => {
      return parsedFTDescription.value.slice();
    });

    // Method to highlight certain words (also need to remove scoped from style tag)
    // const highlightedText = (text: string): string => {
    //   let highlightedText: string = text;
    //   // Fetch highlightedWords from the json object
    //   const highlightedWords: string[] = currentExperienceDetails.value?.highlightedWords || [];
    //   // Loop through each word to highlight
    //   highlightedWords.forEach((word) => {
    //     const regex = new RegExp(`(${word})`, "gi"); // Case-insensitive match
    //     highlightedText = highlightedText.replace(
    //       regex,
    //       '<span class="highlighted">$1</span>'
    //     );
    //   });
    //   console.log(highlightedText);
    //   return highlightedText;
    // };

    // Method to load data
    const loadExperienceDetails = (): void => {
      const experience = json[props.experienceName] as ExperienceType | null;
      if (experience) {
        currentExperienceDetails.value = experience;
        isExperienceFT.value = experience.experienceType === "full-time";
      }
    };

    // Mounted
    onMounted(() => {
      loadExperienceDetails();
    });

    return {
      computedImageSrc,
      currentExperienceDetails,
      isExperienceFT,
      parsedFTDescription,
      visitLink,
      cachedParsedFTDescription
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.customCard {
  background-color: $offWhiteColor;
  border: none;
  .card-img-left {
    height: auto;
    width: 49%;
    object-fit: contain;
  }
}

.customCard:hover {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  -webkit-transition: 300ms ease;
  transition: 300ms ease;
}
.customCard:hover .viewProjectOverlay {
  opacity: 1;
}
.viewProjectOverlay {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.overlayText {
  color: $lightWhiteColor;
  font-size: 2.5vw;
  font-weight: 400;
  padding: 1.25rem;
  @media (max-width: $screen-md) {
    font-size: 5.58vw;
  }
}
.ftPosition {
  ul {
    padding-left: 0;
    list-style: decimal;
    ::marker {
      font-size: 1.3vw;
      @media (max-width: $screen-md) {
        font-size: 2.6vw;
      }
    }
  }
  li {
    margin-left: 1.5vw;
    line-height: 1.25;
    @media (max-width: $screen-md) {
      margin-left: 3vw;
    }
  }
  .cardParagraph {
    text-align: left;
    margin-bottom: 0.5rem;
    line-height: inherit;
  }
  // .highlighted {
  //   color: $offWhiteColor;
  //   background-color: $dolphinBlueColor; /* You can change this color */
  //   border-radius: 25px;
  //   padding: 1.5px 7.5px;
  // }
}
</style>
