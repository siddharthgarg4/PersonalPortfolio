<template>
  <BContainer class="contactContainer" fluid>
    <BRow>
      <BCol cols="12">
        <p class="coverTitle">Like what you see? Let’s talk.</p>
      </BCol>
      <BCol cols="12">
        <p class="coverResume">
          <!-- eslint-disable-next-line -->
          <!-- I am currently seeking full-time opportunities starting Spring
          © 2025.<br /> -->
          Made with 🤍 in Toronto
        </p>
      </BCol>
      <BCol cols="12" class="d-flex justify-content-center iconRow">
        <img
          src="/images/linkedinContact.png"
          class="img-fluid contactIcon cursorPointer"
          @click="handleContactLink('linkedin')"
          loading="lazy"
        />
        <img
          src="/images/emailContact.png"
          class="img-fluid contactIcon cursorPointer"
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
  .coverResume {
    color: $lightWhiteColor;
    text-align: center;
  }
  // .coverTitle {
  //   font-weight: 500;
  // }
  // .coverResume {
  //   font-weight: 500;
  // }
}
// .contactIconContainer {
//   justify-content: space-around;
//   flex-direction: row !important;
// }
.iconRow {
  gap: 3.25%;
  @media (orientation: portrait) {
    gap: 6.5%;
  }
}
.contactIcon {
  min-width: 35px;
  width: 3.25%;
  object-fit: contain;
  @media (orientation: portrait) {
    width: 6.5% !important;
  }
  // margin: 30px 2.5vw 15px 2.5vw;
}
</style>
