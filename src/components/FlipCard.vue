<template>
  <div
    class="flip-container"
    :class="{ 'active-hover': activeHover, hover: hover }"
    :style="{ width: width, height: height }"
    @click="handlerHover"
  >
    <div class="flipper" :style="cardStyle">
      <div class="front" :style="cardStyle">
        <b-row class="fullSize d-flex align-items-center">
          <b-col
            class="fullSize align-items-center"
            :style="{ 'background-color': cardColour }"
          >
            <b-row class="fullSize">
              <b-col>
                <p class="project-title">{{ json[projectName].name }}</p>
              </b-col>
              <b-col>
                <img class="img-fluid project-logo" :src="projectImage" />    
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="back" :style="cardStyle">
        <b-row class="fullSize">
          <b-col class="fullSize" :style="{ 'background-color': cardColour }">
            <slot name="back"></slot>
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
      json: {}
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

<style>
.remove-all-padding {
  padding: 0 !important;
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  perspective: 1000;
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
.project-logo {
  height: 25%;
  max-height: 150px;
  width: auto;
}
.project-title {
  font-size: 75px;
  font-family: "Oh Now!", sans-serif;
  padding-top: 8pt;
}
</style>
