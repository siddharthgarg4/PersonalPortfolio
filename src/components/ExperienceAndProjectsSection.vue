<template>
  <BContainer class="experienceProjectContainer" fluid>
    <BRow>
      <BCol class="componentTitleContainer">
        <p class="componentTitle removeMargin">Work Experience</p>
      </BCol>
    </BRow>
    <BRow>
      <BRow>
        <BCol class="componentSubtitleContainer">
          <p class="componentTitle removeMargin">Full-time</p>
        </BCol>
      </BRow>
      <BRow>
        <BCol lg="12" class="cardContainer">
          <customCard experienceName="ffaiFT"></customCard>
        </BCol>
      </BRow>
    </BRow>
    <BRow>
      <BRow>
        <BCol lg="12" class="cardContainer">
          <customCard experienceName="upliftFT"></customCard>
        </BCol>
      </BRow>
    </BRow>
    <BRow>
      <BRow>
        <BCol class="componentSubtitleContainer">
          <p class="componentTitle removeMargin">Internship</p>
        </BCol>
      </BRow>
      <BRow>
        <BCol lg="6" class="cardContainer">
          <customCard experienceName="uplift"></customCard>
        </BCol>
        <BCol lg="6" class="cardContainer">
          <customCard experienceName="shopify"></customCard>
        </BCol>
        <BCol lg="6" class="cardContainer">
          <customCard experienceName="tile"></customCard>
        </BCol>
        <BCol lg="6" class="cardContainer">
          <customCard experienceName="td"></customCard>
        </BCol>
      </BRow>
    </BRow>
    <BRow>
      <BRow>
        <BCol class="componentTitleContainer">
          <p class="componentTitle removeMargin">Personal Projects</p>
        </BCol>
      </BRow>
      <BRow>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="endgame"></customCard>
        </BCol>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="grow"></customCard>
        </BCol>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="healthline"></customCard>
        </BCol>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="blindsight"></customCard>
        </BCol>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="instameet"></customCard>
        </BCol>
        <BCol lg="4" class="cardContainer">
          <customCard experienceName="paypool"></customCard>
        </BCol>
      </BRow>
    </BRow>
  </BContainer>
</template>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
.cardContainer {
  margin-bottom: 35px;
}
.experienceProjectContainer {
  background-color: $lightWhiteColor;
  background-image: url("/images/dotBackground-2.png"),
    url("/images/dotBackground-2-flipped.png"),
    url("/images/dotBackground-2.png"),
    url("/images/dotBackground-2-flipped.png");
  background-position:
    top 6.125% left,
    top 26.5% right,
    top 54.5% left,
    top 99% right;
  padding: 5% 7.5% 5% 7.5%;
  background-repeat: no-repeat;
  background-size: 30%;
  @media (max-width: $screen-md) {
    background-size: 70%;
    background-position:
      top 2.65% left,
      top 28.75% right,
      top 62% left,
      top 99.5% right;
  }
}
.componentTitleContainer {
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
