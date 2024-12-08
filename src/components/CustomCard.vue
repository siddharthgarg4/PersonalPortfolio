<template>
  <b-container fluid class="removePadding h-100">
    <b-card
      :img-src="require('../static/assets/' + json[projectName].coverImageName)"
      :img-alt="json[projectName].title"
      class="customCard cursorPointer h-100"
      @click="goToLink(json[projectName].link)"
      :img-left="isPositionFT() && !isScreenMedorSmaller"
    >
      <p class="cardTitle removeMargin">{{ json[projectName].title }}</p>
      <p class="cardSubtitle">{{ json[projectName].subtitle }}</p>
      <div class="ftPosition" v-if="isPositionFT()">
        <ul>
          <li
            v-for="(ftDescriptionItem, index) in parsedFTDescription().slice()"
            :key="index"
          >
            <p
              class="cardParagraph"
              v-html="highlightedText(ftDescriptionItem)"
            ></p>
          </li>
        </ul>
      </div>
      <div class="internPosition" v-else>
        <p class="cardParagraph">{{ json[projectName].description }}</p>
      </div>
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
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (document.documentElement.clientWidth < 992) {
        this.isScreenMedorSmaller = true;
      } else {
        this.isScreenMedorSmaller = false;
      }
    },
    isPositionFT() {
      return json[this.projectName].positionType == "full-time";
    },
    parsedFTDescription() {
      return json[this.projectName].description.split(";");
    },
    goToLink(givenLink) {
      window.open(givenLink, "_blank");
    },
    highlightedText(text) {
      let highlightedText = text;

      console.log("text:", text);
      var highlightedWords = json[this.projectName].highlightedWords;

      // Loop through each word to highlight
      highlightedWords.forEach((word) => {
        const regex = new RegExp(`(${word})`, "gi"); // Case-insensitive match
        highlightedText = highlightedText.replace(
          regex,
          '<span class="highlighted">$1</span>'
        );
      });

      console.log(highlightedText);

      return highlightedText;
    },
  },
  data() {
    return {
      isScreenMedorSmaller: false,
    };
  },
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import "../styles/main.scss";
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
