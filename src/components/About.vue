<template>
  <div>
    <b-row
      class="about-section-container d-flex"
      align-v="center"
    >
      <b-col
        md="4"
        sm="12"
        class="container"
        :class="{ 'order-last': rightPicture }"
      >
        <img class="img-fluid fullSize" :src="projectImage" />
      </b-col>

      <b-col md="8" sm="12" class="text-container remove-all-margin">
        <b-row>
          <b-col>
            <p
              class="about-section-title"
              :style="{ color: json[aboutSection].titleColour }"
            >
              {{ json[aboutSection].title }}
            </p>
          </b-col>
        </b-row>

        <b-row align-h="center">
          <b-col cols="8">
            <p class="about-section-description">
              {{ json[aboutSection].description }}
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
var json = require("@/static/content.json");
export default {
  name: "about",
  mounted() {
    this.json = json;
  },
  data() {
    return {
      json: {}
    };
  },
  props: {
    rightPicture: {
      type: Boolean,
      required: false,
      default: false
    },
    backgroundColour: {
      type: String,
      required: false,
      default: "#000000"
    },
    aboutSection: {
      type: String,
      required: false,
      default: "myself"
    },
    backgroundImage: {
      type: String,
      required: false
    }
  },
  computed: {
    projectImage() {
      return require("../assets/" + this.aboutSection + ".png");
    }
  },
  methods: {
    getImgUrl(pic) {
    return require('../assets/'+pic)
    }
  }
};
</script>

<style lang="scss">
@import "../styles/main.scss";
@import "../styles/variable.scss";
.container {
  margin-top: 5vh;
  margin-bottom: 5vh;
  height: 250px;
  width: 250px;
}
.text-container {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
.remove-all-margin {
  margin: 0px;
}
.fullSize {
  height: 100%;
  width: auto;
}
.fullWidth {
  width: 100vw;
}
.about-section-title {
  font-family: "Coves-Light", sans-serif;
  font-size: 35px;
}
.about-section-description {
  color: white;
  font-family: "Coves-Light", sans-serif;
  font-size: 22px;
}
.about-section-container {
  min-height: 45vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
