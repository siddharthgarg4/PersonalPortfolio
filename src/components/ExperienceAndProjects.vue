<template>
  <b-container class="experienceProjectContainer" fluid>
      <b-row>
          <b-col cols="12" class="spacer"></b-col>
          <b-col>
              <p class="subtitle removeMargin">Work Experience</p>
          </b-col>
          <b-col cols="12" class="spacer"></b-col>
      </b-row>
      <b-row>
          <b-col lg="6">
              <b-card 
              title="Card Title" 
              img-src="https://picsum.photos/600/300/?image=25" 
              img-alt="Image"
              img-top
              >
              </b-card>
          </b-col>
            
          <b-col lg="6">
              <b-card 
              title="Card Title" 
              img-src="https://picsum.photos/600/300/?image=25" 
              img-alt="Image"
              img-top
              >
              </b-card>
          </b-col>
      </b-row>
  </b-container>
</template>

<style lang="scss">
@import "../styles/main.scss";
.row {
  margin-right: 0px;
  margin-left: 0px;
}
.experienceProjectContainer {
    background: $lightWhiteColor;
    padding: 5%;
}
.subtitle {
font-size: 2.5vw;
font-weight: 600;
text-align: start;
line-height: 3.25vw;
  @media (max-width: $screen-xs) {
    font-size: 5.58vw;
    line-height: 6.5vw;
    text-align: center;
  }
}
.spacer {
    height: 35px;
}
</style>