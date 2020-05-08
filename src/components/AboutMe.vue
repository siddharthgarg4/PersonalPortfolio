<template>
    <b-container class="aboutMeContainer" fluid>
        <b-row class="aboutMeDescriptionContainer" v-scrollAnimation>
            <b-col lg="6">
                <p class="componentTitle">This is Me</p>
                <p class="aboutMeDescription removeMargin">{{ json["me"].description }}</p>
            </b-col>
            <b-col lg="6" class="align-items-end">
                <img
                class="img-fluid"
                src="../static/assets/me.png"
                />
            </b-col>
        </b-row>
        <b-row v-scrollAnimation>
            <b-col lg="4">
                <recommendationCard recommendation="dummyRecommendation"></recommendationCard>
            </b-col>
            <b-col lg="4">
                <recommendationCard recommendation="dummyRecommendation"></recommendationCard>
            </b-col>
            <b-col lg="4">
                <recommendationCard recommendation="dummyRecommendation"></recommendationCard>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
var json = require("@/static/content.json");
export default {
    created() {
        this.json = json;
    }
}
</script>

<style lang="scss">
@import "../styles/main.scss";
.aboutMeContainer {
    background: $offWhiteColor;
    padding: 5% 7.5% 5% 7.5%;
}
.aboutMeDescription {
  font-weight: 400;
  font-size: 1.5vw;
  text-align: start;
  white-space: pre-line;
  @media (max-width: $screen-md) {
    font-size: 3vw;
    margin: 1rem;
    text-align: center;
  }
}
.aboutMeDescriptionContainer {
    margin-bottom: 35px;
}
.aboutMeImageContainer {
    justify-content: flex-end;
}
</style>