<template>
  <b-container class="experienceProjectContainer" fluid>
    <b-row>
      <b-col class="componentTitleContainer">
        <p class="componentTitle removeMargin">Work Experience</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <customCard projectName="tile"></customCard>
      </b-col>
      <b-col lg="6">
          <customCard projectName="td"></customCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
@import "../styles/main.scss";
.card {
  margin-bottom: 35px;
}
// .dummyClass:hover, .dummyClass:focus {
// box-shadow: 0 1vh 1vh -1vh darkgray;
// transform: translateY(-3vh);
// -webkit-transition: 300ms ease;
//   transition: 300ms ease;
// }

.row {
  margin-right: 0px;
  margin-left: 0px;
}
.experienceProjectContainer {
  background: $lightWhiteColor;
  padding: 5% 7.5% 5% 7.5%;
}
.componentTitleContainer {
  margin-top: 35px;
  margin-bottom: 35px;
}
.componentTitle {
  font-size: 2.5vw;
  font-weight: 600;
  text-align: start;
  line-height: 3.25vw;
  @media (max-width: $screen-md) {
    font-size: 5.58vw;
    line-height: 6.5vw;
    text-align: center;
  }
}
</style>
