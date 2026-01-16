<template>
  <BContainer class="contactContainer componentContainerPadding" fluid>
    <BRow>
      <BCol cols="12">
        <p class="coverTitle">Like what you see? Let’s talk.</p>
        <p class="coverPara">
          <!-- eslint-disable-next-line -->
          I'm currently seeking full-time opportunities starting winter 2026.<br />
        </p>
        <p class="coverResume">
          <!-- © copyright icon -->
          Toronto, ON © 2026
        </p>
      </BCol>
      <BCol cols="12" class="iconRow">
        <img
          src="/images/linkedinContact.png"
          class="img-fluid contactIcon"
          @click="handleContactLink('linkedin')"
          loading="lazy"
        />
        <img
          src="/images/emailContact.png"
          class="img-fluid contactIcon"
          @click="handleContactLink('email')"
          loading="lazy"
        />
        <img
          src="/images/githubContact.png"
          class="img-fluid contactIcon"
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

export default defineComponent({
  name: "ContactSection",
  setup() {
    // Reactives
    const currentPersonalDetails = ref<AboutMeType | null>(null);

    // Method to handle safe link visit
    const handleContactLink = (contactType: AboutMeLinkType): void => {
      const link = currentPersonalDetails.value?.[contactType];
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
  .coverTitle {
    margin-bottom: 0.25rem;
  }
  // .coverPara {
  //   margin-bottom: 1rem;
  // }
  .coverResume {
    margin-bottom: 1.75rem;
  }

  .coverTitle,
  .coverResume,
  .coverPara {
    color: $lightWhiteColor;
    text-align: center;
  }
}
.iconRow {
  display: flex;
  justify-content: center;
  gap: 3.25rem;
  // margin-bottom: 1rem;
}
.contactIcon {
  cursor: pointer;
  object-fit: contain;
  width: 2.75rem;
}
</style>
