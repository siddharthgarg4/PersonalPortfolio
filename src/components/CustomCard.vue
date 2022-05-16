<template>
  <b-container fluid class="removePadding h-100">
    <b-card
      :img-src="require('../static/assets/' + json[projectName].coverImageName)"
      :img-alt="json[projectName].title"
      class="customCard cursorPointer h-100"
      @click="goToLink(json[projectName].link)"
    >
      <p class="cardTitle removeMargin">{{ json[projectName].title }}</p>
      <p class="cardSubtitle">{{ json[projectName].subtitle }}</p>
      <p class="cardParagraph">{{ json[projectName].description }}</p>
      <div class="viewProjectOverlay">
        <p class="overlayText removeMargin">
          {{ json[projectName].overlayTitle }}
        </p>
      </div>
    </b-card>
  </b-container>
</template>

<script>
var json = require("@/static/content.json");
import Vue from "vue";
export default Vue.extend({
  created() {
    this.json = json;
  },
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToLink(givenLink) {
      window.open(givenLink, "_blank");
    },
  },
});
</script>

<style lang="scss">
@import "../styles/main.scss";
.customCard {
  background-color: $offWhiteColor;
  border: none;
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
.cardTitle {
  font-weight: 600;
  font-size: 1.9vw;
  text-align: center;
  @media (max-width: $screen-md) {
    font-size: 3.8vw;
  }
}
.cardSubtitle {
  font-size: 1.5vw;
  font-weight: 500;
  text-align: center;
  @media (max-width: $screen-md) {
    font-size: 3vw;
  }
}
.cardParagraph {
  font-size: 1.5vw;
  font-weight: 400;
  text-align: center;
  @media (max-width: $screen-md) {
    font-size: 3vw;
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
</style>
