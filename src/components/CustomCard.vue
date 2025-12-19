<template>
  <BContainer fluid class="h-100">
    <div ref="customCardRef">
      <BCard
        v-if="currentExperienceDetails"
        no-body
        class="customCard h-100"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @pointerleave="onPointerUp"
        @click="onClick"
        :preventExcessiveDragging="true"
        :class="{ touchScreenPreview: isTouchPreviewVisible }"
      >
        <BRow class="g-0">
          <!-- The image is displayed on the left side for full-time experiences !-->
          <BCol :lg="isExperienceFT ? 6 : 12">
            <BCardImg
              :src="`/images/${currentExperienceDetails.coverImageName}`"
              :alt="currentExperienceDetails.title"
              class="rounded-0"
            />
          </BCol>
          <BCol :lg="isExperienceFT ? 6 : 12">
            <BCardBody class="centerCardContent">
              <!-- <BCardBody> -->
              <p class="cardTitle">
                {{ currentExperienceDetails.title }}
              </p>
              <p class="cardSubtitle">
                {{ currentExperienceDetails.subtitle }}
              </p>
              <p class="skillsList">
                <span
                  v-for="(skill, index) in currentExperienceDetails.skills"
                  :key="index"
                  class="highlightedPill cardParagraph"
                >
                  {{ skill }}
                </span>
              </p>
              <div v-if="isExperienceFT" class="ftPosition">
                <ul>
                  <li
                    v-for="(
                      contribution, project
                    ) in currentExperienceDetails.ftDescription"
                    :key="project"
                    class="cardParagraph"
                  >
                    <strong>{{ project }}</strong> {{ contribution }}
                  </li>
                </ul>
              </div>
            </BCardBody>
          </BCol>
        </BRow>
        <div
          class="cardOverlay"
          :class="{ touchScreenPreview: isTouchPreviewVisible }"
        >
          <p class="overlayText">
            {{ currentExperienceDetails.overlayTitle }}
          </p>
        </div>
      </BCard>
      <div v-else>
        <p>No experience details found.</p>
      </div>
    </div>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
// Type-only import for PropType
import type { PropType } from "vue";
// Import content for cards
import json from "@/assets/content.json";
import { visitLink } from "@/composables/sharedUtils";

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
    // Touch screen reactives
    const customCardRef = ref<HTMLElement | null>(null);
    const isTouchPreviewVisible = ref<boolean>(false);
    const doesDeviceSupportHover = window.matchMedia("(hover: hover)").matches;
    // Drag reactives
    let startX = 0;
    let startY = 0;
    const DRAG_THRESHOLD = 8; // px

    // Handle pointer events
    const onPointerDown = (e: PointerEvent) => {
      startX = e.clientX;
      startY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);

      if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
        //its a drag event
        return;
      }
    };

    const onPointerUp = () => {
      // no-op, click handler decides
    };

    const onClick = (e: PointerEvent) => {
      const dx = Math.abs(e.clientX - startX);
      const dy = Math.abs(e.clientY - startY);
      if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
        //was a drag, not a click
        isTouchPreviewVisible.value = false;
        return;
      }
      if (!doesDeviceSupportHover && !isTouchPreviewVisible.value) {
        isTouchPreviewVisible.value = true;
        return;
      }
      //legit click
      visitLink(currentExperienceDetails.value?.link || ``);
      //clean up the touchpreview if true
      isTouchPreviewVisible.value = false;
    };

    // Handle document pointer events
    const onDocumentPointerDown = (e: PointerEvent) => {
      if (!isTouchPreviewVisible.value) return;
      // check if touch was within the card
      const target = e.target as Node;

      if (customCardRef.value && !customCardRef.value.contains(target)) {
        isTouchPreviewVisible.value = false;
      }
    };

    // Computed
    // const computedImageSrc = computed(() => {
    //   return getDynamicImageUrl(
    //     currentExperienceDetails.value?.coverImageName || ``,
    //   );
    // });

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
      document.addEventListener("pointerdown", onDocumentPointerDown);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("pointerdown", onDocumentPointerDown);
    });

    return {
      // computedImageSrc,
      // highlightedText,
      isExperienceFT,
      currentExperienceDetails,
      visitLink,
      onClick,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      customCardRef,
      isTouchPreviewVisible,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.customCard {
  cursor: pointer;
  background-color: $offWhiteColor;
  border: none;
  transition: transform 300ms ease;

  @media (hover: hover) {
    &:hover {
      transform: scale(0.95);
      .cardOverlay {
        opacity: 1;
      }
    }
  }
}
.customCard.touchScreenPreview {
  transform: scale(0.95);
}
.centerCardContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.skillsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3em;
}
// :deep(highlighted) - if you want to pierce scope
.highlightedPill {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.6em;
  padding: 0.1em 0.5em;
  white-space: nowrap;
  //safety css
  overflow: hidden;
  text-overflow: ellipsis;
}
.ftPosition {
  ul {
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    list-style: disc;
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
  }
  .cardParagraph {
    text-align: left;
  }
  @media (max-width: $screen-md) {
    display: none;
  }
}
.cardOverlay {
  //sets top, right, bottom, left to 0
  inset: 0;
  position: absolute;
  display: flex;
  // center horizontally and vertically
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 300ms ease;
  // above the card but below menu/loader
  z-index: 10 !important;
  pointer-events: none;
}
.cardOverlay.touchScreenPreview {
  opacity: 1;
}
</style>
