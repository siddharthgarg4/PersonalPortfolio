<template>
  <BContainer class="contactContainer" fluid>
    <BRow>
      <BCol cols="12">
        <p class="coverTitle removeMargin">Like what you see? Let’s talk.</p>
      </BCol>
      <BCol cols="12">
        <p class="aboutMeDescription">
          <!-- eslint-disable-next-line -->
          <!-- I am currently seeking full-time opportunities starting Spring
          © 2025.<br /> -->
          Made with 🤍 in Toronto
        </p>
      </BCol>
    </BRow>
    <BRow class="contactIconContainer d-flex justify-content-center">
      <BCol class="text-center">
        <img
          src="/images/linkedinContact.png"
          class="img-fluid contactIcon cursorPointer"
          @click="handleContactLink('linkedin')"
          loading="lazy"
        />
        <img
          src="/images/emailContact.png"
          class="img-fluid contactIcon emailIcon cursorPointer"
          @click="handleContactLink('email')"
          loading="lazy"
        />
        <img
          src="/images/githubContact.png"
          class="img-fluid contactIcon cursorPointer"
          @click="handleContactLink('github')"
          loading="lazy"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { visitLink } from "@/composables/sharedUtils";
import json from "@/assets/content.json";

// Define the valid keys of currentPersonalDetails
type ContactType = "linkedin" | "email" | "github";

export default defineComponent({
  name: "ContactSection",
  setup() {
    // Reactives
    const currentPersonalDetails = ref<AboutMeType | null>(null);

    // Method to handle safe link visit
    const handleContactLink = (contactType: ContactType): void => {
      const link = currentPersonalDetails.value
        ? currentPersonalDetails.value[contactType]
        : "";
      if (link) {
        visitLink(link);
      } else {
        console.error(`No link found for ${contactType}`);
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
      handleContactLink,
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.contactContainer {
  background: $dolphinBlueColor;
  padding: 5% 7.5% 5% 7.5%;
  .coverTitle,
  .aboutMeDescription {
    color: $lightWhiteColor;
    text-align: center;
  }
  .coverTitle {
    font-weight: 500;
    line-height: 3.5vw;
    @media (max-width: $screen-md) {
      line-height: 7vw;
    }
  }
  .aboutMeDescription {
    margin: 15px 0 0 0;
    font-weight: 500;
  }
}
.contactIcon {
  height: auto;
  width: 3vw;
  margin: 30px 2.5vw 15px 2.5vw;
  @media (max-width: $screen-lg) and (min-width: $screen-sm) {
    width: 50px;
  }
  @media (max-width: $screen-sm) and (min-width: $screen-xs) {
    width: 40px;
  }
  @media (max-width: $screen-xs) {
    width: 30px;
  }
}
</style>
