<template>
  <BContainer fluid class="removePadding h-100">
    <div v-if="currentExperienceDetails">
      <BCard
        :img-src="`/images/${currentExperienceDetails.coverImageName}`"
        :img-alt="currentExperienceDetails.title"
        class="customCard cursorPointer h-100"
        :img-left="isExperienceFT"
      >
        <p class="cardTitle removeMargin">
          {{ currentExperienceDetails.title }}
        </p>
        <p class="cardSubtitle">{{ currentExperienceDetails.subtitle }}</p>
        <div class="ftPosition" v-if="isExperienceFT">
          <ul>
            THIS IS FT EXPERIENCE (PLACEHOLDER)
          </ul>
        </div>
        <div class="internPosition" v-else>
          <p class="cardParagraph">
            {{ currentExperienceDetails.description }}
          </p>
        </div>
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
import { defineComponent, ref, onMounted } from "vue";
// Type-only import for PropType
import type { PropType } from "vue";
// Import content for cards
import json from "@/assets/content.json";

export default defineComponent({
  name: "CustomCard",
  props: {
    experienceName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    //Reactives
    const isScreenMedorSmaller = ref<boolean>(false);
    const currentExperienceDetails = ref<ExperienceType | null>(null);
    const isExperienceFT = ref<boolean>(false);

    //Method to load data
    const loadExperienceDetails = (): void => {
      const experience = json[props.experienceName] as ExperienceType | null;
      if (experience) {
        console.log(experience);
        currentExperienceDetails.value = experience;
        isExperienceFT.value =
          currentExperienceDetails.value.experienceType === "full-time";
        console.log(isExperienceFT.value);
      }
    };

    //Mounted
    onMounted(() => {
      loadExperienceDetails();
    });

    // //Computed
    // const currentExperienceDetails = computed<ExperienceType>(() => {
    //   return json[props.experienceName] as ExperienceType;
    // });
    // const isExperienceFT = computed<boolean>(() => {
    //   return currentExperienceDetails.value.experienceType === "full-time";
    // });

    // Method to get image URL
    // const getExperienceImageURL = () => {
    //   //need to resolve the card image URLs
    //   // return require(`@/assets/images/${props.experienceName}.png`);
    //   return new URL("@/assets/images/flysafe.png", import.meta.url).href;
    // };

    return {
      isScreenMedorSmaller,
      currentExperienceDetails,
      isExperienceFT,
      // getExperienceImageURL,
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

// .card-body-with-image {
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
// }
// .experience-image-left {
//   width: 40%;
//   height: auto;
//   object-fit: contain;
//   margin-right: 2rem;
// }

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
.cardTitle {
  font-weight: 500;
  font-size: 1.9vw;
  text-align: center;
  @media (max-width: $screen-md) {
    font-size: 3.8vw;
  }
}
.cardSubtitle {
  font-size: 1.4vw;
  font-weight: 600;
  text-align: center;
  color: $dolphinBlueColor;
  @media (max-width: $screen-md) {
    font-size: 2.8vw;
  }
}
.cardParagraph {
  font-size: 1.3vw;
  font-weight: 400;
  text-align: center;
  line-height: 1.25;
  @media (max-width: $screen-md) {
    font-size: 3.4vw;
  }
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
    @media (max-width: $screen-md) {
      margin-left: 3vw;
    }
  }
  .cardParagraph {
    text-align: left;
    margin-bottom: 0.5rem;
  }
  .highlighted {
    color: $offWhiteColor;
    background-color: $dolphinBlueColor; /* You can change this color */
    border-radius: 25px;
    padding: 1.5px 7.5px;
  }
}
</style>
