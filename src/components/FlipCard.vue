<template>
  <div
    class="flip-container"
    :class="{ 'active-hover': activeHover, hover: hover }"
    :style="{ width: width, height: height }"
    @click="handlerHover"
  >
    <div class="flipper" :style="cardStyle">
      <div class="front" :style="cardStyle">
        <b-row class="fullSize d-flex remove-all-margin" align-v="center">
          <b-col class="fullSize backgroundImage" :style="{ 'background-image': 'url(' + getImgUrl(cardBackgroundImage)  + ')' }">
            <b-row class="d-flex fullSize remove-all-margin" align-v="center">
              <b-col>
                <b-row>
                  <b-col cols="12" class="align-self-end">
                    <p
                      class="project-title"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      {{ json[projectName].title }}
                    </p>
                  </b-col>
                  <b-col cols="12" class="project-logo-container">
                    <img class="img-fluid project-logo" :src="projectImage" />
                  </b-col>
                  <b-col cols="12">
                    <p
                      class="project-short-description"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      {{ json[projectName].description }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="back" :style="cardStyle">
        <b-row class="fullSize remove-all-margin">
          <b-col class="fullSize backgroundImage" :style="{ 'background-image': 'url(' + getImgUrl(cardBackgroundImage) + ')' }">
            <b-row class="fullSize remove-all-margin">
              <b-col
                sm="12"
                md="4"
                class="remove-all-padding d-flex align-items-center justify-content-center"
              >
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  v-bind:class="{
                    'right-project-carousel': rightProject,
                    'left-project-carousel': leftProject
                  }"
                  controls
                  indicators
                  img-width="1000"
                  img-height="2000"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    :img-src="findImageLocation(image)"
                    v-bind:class="{
                      'right-project-carousel': rightProject,
                      'left-project-carousel': leftProject
                    }"
                    v-for="image in json[projectName].images"
                    :key="image"
                  ></b-carousel-slide>
                </b-carousel>
              </b-col>
              <b-col
                sm="12"
                md="8"
                class="d-flex align-items-center justify-content-center"
              >
                <b-row>
                  <b-col>
                    <p
                      class="title-back"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      {{ json[projectName].title }}
                    </p>
                    <p
                      class="information-back"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      {{ json[projectName].extraInfo }}
                    </p>
                    <p
                      class="information-back"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      {{ json[projectName].information }}
                    </p>
                    <p
                      class="explore-project-back cursor-pointer"
                      @click="goToLink(json[projectName].github)"
                      :style="{ color: json[projectName].titleColour }"
                    >
                      Explore Project {{ json[projectName].title }} >>>
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
var json = require("@/static/content.json");
export default {
  name: "flip",
  mounted() {
    this.json = json;
  },
  props: {
    activeClick: {
      type: Boolean,
      required: false,
      default: false
    },
    activeHover: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: String,
      required: true
    },
    height: String,
    transition: {
      type: String,
      required: false,
      default: "0.5s"
    },
    bindWithMe: {
      type: Boolean,
      required: false
    },
    cardColour: {
      type: String,
      required: false
    },
    cardBackgroundImage: {
      type: String,
      required: false
    },
    projectName: {
      type: String,
      required: false
    },
    leftProject: {
      type: Boolean,
      required: false,
      default: false
    },
    rightProject: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      hover: false,
      json: {},
      slide: 0,
      sliding: null
    };
  },
  computed: {
    cardStyle() {
      let result = {};

      if (this.height) {
        result.height = this.height.includes("%") ? "100%" : this.height;
      }

      if (this.width) {
        result.width = this.width.includes("%") ? "100%" : this.width;
      }

      if (this.transition) {
        result.transition = this.transition;
      }

      return result;
    },
    projectImage() {
      return require("../assets/" +
        this.json[this.projectName].name +
        "Logo.png");
    }
  },
  methods: {
    handlerHover() {
      if (this.activeClick) {
        this.hover = !this.hover;
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    findImageLocation(imageName) {
      return require("../static/assets/" + imageName + ".png");
    },
    goToLink(givenLink) {
      window.open(givenLink, "_blank");
    },
    getImgUrl(pic) {
    return require('../assets/'+pic)
    }
  },
  watch: {
    bindWithMe: {
      immediate: true,
      handler(val) {
        if (val != undefined && (val === true || val === false)) {
          this.hover = val;
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "../styles/main.scss";
@import "../styles/variable.scss";
.remove-all-padding {
  padding: 0 !important;
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  perspective: 1000;
  z-index: 1000 !important;
  pointer-events: all;
}

.flip-container.active-hover:hover .flipper,
.flip-container.hover .flipper {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flipper {
  -webkit-transition: 0.6s;
  -moz-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  -webkit-transform: rotateY(0);
  -moz-transform: rotateY(0);
  transform: rotateY(0);
}

.back {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.fullSize {
  height: 100%;
  width: 100%;
}
.project-logo-container {
  max-height: 100px;
  width: auto;
  margin: 0;
}
.project-title {
  font-size: 60px;
  font-family: "Coves-Light", sans-serif;
  margin: 0;
  @media (max-width: $screen-xs) {
    font-size: 45px;
  }
}
.project-logo {
  width: auto;
  height: 100%;
}
.project-screenshot {
  height: auto;
  width: 100%;
}
.project-short-description {
  font-size: 30px;
  font-family: "Coves-Light", sans-serif;
  padding-top: 8pt;
}
.remove-all-margin {
  margin: 0px;
}
.full-height {
  height: 100%;
}
.right-project-carousel {
  height: 30vh;
  width: 15vh;
  min-height: 200px;
  min-width: 100px;
}
.left-project-carousel {
  height: 30vh;
  width: 15vh;
  min-height: 300px;
  min-width: 150px;
}
.title-back {
  font-size: 50px;
  font-family: "Coves-Light", sans-serif;
  @media (max-width: $screen-xs) {
    font-size: 30px;
  }
}
.information-back {
  font-size: 20px;
  font-family: "Coves-Light", sans-serif;
}
.explore-project-back {
  font-size: 30px;
  font-family: "Coves-Light", sans-serif;
  @media (max-width: $screen-xs) {
    font-size: 25px;
  }
}
.cursor-pointer {
  cursor: pointer;
}
.backgroundImage {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
