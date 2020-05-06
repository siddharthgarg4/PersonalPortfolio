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
    <b-row>
        <b-col class="componentTitleContainer">
            <p class="componentTitle removeMargin">Personal Projects</p>
        </b-col>
    </b-row>
    <b-row>
        <b-col lg="4">
            <customCard projectName="grow"></customCard>
        </b-col>
        <b-col lg="4">
            <customCard projectName="healthline"></customCard>
        </b-col>
        <b-col lg="4">
            <customCard projectName="blindsight"></customCard>
        </b-col>
    </b-row>
    <b-row>
        <b-col lg="4">
            <customCard projectName="instameet"></customCard>
        </b-col>
        <b-col lg="4">
            <customCard projectName="paypool"></customCard>
        </b-col>
        <b-col lg="4">
            <customCard projectName="flysafe"></customCard>
        </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss">
@import "../styles/main.scss";
.card {
  margin-bottom: 35px;
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
