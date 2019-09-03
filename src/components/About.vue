<template>
    <div>
        <b-row class="about-section-container d-flex" :style="{ 'background-color': backgroundColour }" align-v="center">  
            <b-col md="5" sm="12" class="container" :class="{ 'order-last': rightPicture}">
                <img class="img-fluid fullSize" :src="projectImage"/>
            </b-col>

            <b-col md="7" sm="12" class="container">

                <b-row>
                    <b-col>
                        <p class="about-section-title" :style="{ 'color': json[aboutSection].titleColour }">
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
          default: '#000000'
      },
      aboutSection: {
          type: String,
          required: false,
          default: 'myself'
      }
  },
  computed: {
    projectImage() {
        console.log("../assets/" + this.aboutSection + ".png");
        return require("../assets/" + this.aboutSection + ".png");
    }
  }
}
</script>

<style>
.container {
    margin-top: 7.25vh;
    margin-bottom: 7.25vh;
    height: 30vh;
    min-height: 200px;
}
.fullSize {
    height: 100%;
    width: auto;
}
.fullWidth {
    width: 100vw;
}
.about-section-title {
    font-family: "Oh Now!", sans-serif;
    font-size: 35px;
}
.about-section-description {
    color: white;
    font-family: "Oh Now!", sans-serif;
    font-size: 20px;
}

</style>