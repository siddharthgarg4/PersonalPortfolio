<template>
  <div class="hello">
    <p class="loadingFont">HEY THIS IS ME AGAIN</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/main.scss";
@import "../styles/variable.scss";
.loadingFont {
  font-family: "OhNow", sans-serif;
}
</style>
