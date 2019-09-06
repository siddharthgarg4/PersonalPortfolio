<template>
  <div>
    <b-row>
      <b-col>
        <p class="contact-subtitle">I am currently seeking opportunities for Winter 2020.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="contact-subtitle">made with</p>
        <p class="heart">♡</p>
        <p class="contact-subtitle">in waterloo</p>
      </b-col>
    </b-row>
    <b-row class="contact-icons" align-h="center">
      <b-col class="col-auto contact-icons-container">
        <a href="mailto:s38garg@edu.uwaterloo.ca" class="cursor-pointer">
          <img
          class="img-fluid contact-email-image"
          src="../assets/email-icon.png"
          />
        </a>
      </b-col>
      <b-col class="col-auto contact-icons-container">
        <a href="tel:+1-226-899-3621" class="cursor-pointer">
          <img
          class="img-fluid contact-phone-image"
          src="../assets/phone-icon.png"
          />
        </a>
      </b-col>
      <b-col class="col-auto contact-icons-container">
        <a href="https://goo.gl/maps/DjrfywMkykwwLbzx8" class="cursor-pointer">
          <img
          class="img-fluid contact-location-image"
          src="../assets/location-icon.png"
          />
        </a>
      </b-col>
    </b-row>
    <b-row class="copyright-container">
      <b-col>
        <p class="copyright">© Siddharth Garg &lt; 2019 &gt;</p>
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
  }
};
</script>

<style>
.contact-subtitle {
  font-family: "coves", "Oh Now!";
  font-size: 25px;
  display: inline;
}
.heart {
  font-family: "coves", "Oh Now!";
  font-size: 18px;
  display: inline;
  padding-right: 7px;
  padding-left: 7px;
}
.contact-icons {
  margin-top: 35px;
}
.contact-email-image {
  height: auto;
  width: 40.5px;
}
.contact-phone-image {
  height: auto;
  width: 49.5px;
}
.contact-location-image {
  height: auto;
  width: 54px;
}
.contact-icons-container {
  padding-right: 20px;
  padding-left: 20px;
}
.copyright {
  font-family: "coves", "Oh Now!";
  font-size: 18px;
}
.copyright-container {
  margin-top: 90px;
  margin-bottom: 40px;
}
.cursor-pointer{
  cursor: pointer;
}
</style>
