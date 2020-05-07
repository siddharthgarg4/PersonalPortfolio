<template>
    <b-container fluid class="removePadding">
        <b-card
          :img-src="require('../static/assets/'+json[recommendation].recommenderImage)"
          :img-alt="json[recommendation].recommenderName"
          class="recommendationCard"
          :img-left="shouldRotateCard"
        >
          <p class="cardTitle removeMargin">{{ json[recommendation].recommenderName }}</p>
          <p class="cardSubtitle">{{ json[recommendation].recommenderPosition }}</p>
          <p class="cardParagraph">{{ json[recommendation].recommendationDescription }}</p>
        </b-card>
    </b-container>
</template>

<script>
var json = require("@/static/content.json");
export default {
    created() {
        this.json = json;
    },
    mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      })
    },
    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
    methods: {
        onResize(event) {
            if (document.documentElement.clientWidth < 992) {
                this.shouldRotateCard = true
            } else {
                this.shouldRotateCard = false
            }
        }
    },
    data() {
        return {
            shouldRotateCard: false
        }
    },
    props: {
        recommendation: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
@import "../styles/main.scss";
.recommendationCard {
  background-color: $lightWhiteColor;
  border: none;
  align-items: center;
  .card-img {
    height: 7.5vw;
    width: auto;
    margin-top: 1.25rem;
  }
  .card-img-left {
    height: 15vw;
    width: auto;
    margin-left: 1.25rem;;
  }
}
</style>