<template>
    <b-container fluid class="removePadding">
        <b-card
          :img-src="require('../static/assets/'+json[projectName].coverImageName)"
          img-alt="Tile"
          img-top
          class="customCard"
          @click="goToLink(json[projectName].link)"
        >
          <p class="cardTitle removeMargin">{{ json[projectName].title }}</p>
          <p class="cardSubtitle">{{ json[projectName].subtitle }}</p>
          <p class="cardParagraph">{{ json[projectName].description }}</p>
        </b-card>
        <div class="viewProjectOverlay">
          <p class="overlayText removeMargin">{{ json[projectName].overlayTitle }}</p>
        </div>
    </b-container>
</template>

<script>
var json = require("@/static/content.json");
export default {
    created() {
        this.json = json;
    },
    props: {
        projectName: {
            type: String,
            required: true
        }
    },
    methods: {
        goToLink(givenLink) {
            window.open(givenLink, "_blank");
        }
    }
}
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
.customCard:hover + .viewProjectOverlay {
  opacity: 1;
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  -webkit-transition: 300ms ease;
  transition: 300ms ease;
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
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 35px;
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
.liftAnimation:hover, .liftAnimation:focus {
box-shadow: 0 1vh 1vh -1vh darkgray;
transform: translateY(-3vh);
-webkit-transition: 300ms ease;
  transition: 300ms ease;
}
</style>
