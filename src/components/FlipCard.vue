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
          <b-col
            class="fullSize"
            :style="{ 'background-color': cardColour }"
          >
            <b-row class="d-flex fullSize remove-all-margin" align-v="center">
              <b-col>
                <b-row>
                  <b-col
                    cols="12"
                    class="align-self-end"
                  >
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
                  <b-col
                    cols="12"
                  >
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
          <b-col class="fullSize" :style="{ 'background-color': cardColour }">
            <b-row class="fullSize remove-all-margin">

              <b-col sm="12" md="4" class="remove-all-padding d-flex align-items-center justify-content-center">
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  class="size"
                  controls
                  indicators
                  :background="cardColour"
                  img-width="1000"
                  img-height="2000"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="../assets/grow1.png" class="size"></b-carousel-slide>
                  <b-carousel-slide img-src="../assets/grow1.png"></b-carousel-slide>
                </b-carousel>
              </b-col>
              <b-col sm="12" md="8">

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
    projectName: {
      type: String,
      required: false
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
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
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
@import "../style/main.scss";
@import "../style/variable.scss";
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
  font-family: "coves", "Oh Now!";
  margin: 0;
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
  font-family: "coves", "Oh Now!";
  padding-top: 8pt;
}
.remove-all-margin {
  margin: 0px;
}
.full-height {
  height: 100%;
}
.size {
  height: 30vh;
  width: 15vh;
  min-height: 200px;
  min-width: 100px;
}
</style>
