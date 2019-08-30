<template>
	<b-container fluid class="quick-menu" ref="quick-menu" id="quick-menu">
        <div class="menu fixed-top" :style="menuStyle">
            <div class='core-menu' @click="toggleMenu">
                <div class='bar'></div>
            </div>
        </div>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "custom-menu",
    props: {
        backgroundColor:{
            type:String,
            default:'#20babb'
        },
        color: {
            type:String,
            default:'#fff'
        }
    },
    computed: {
        data(){
            return{
            menuSize:40
            }
        }
    },
    methods: {
        getSubMenu(n: any){
            let menuPosition = [["0","-160"],["80", "-138.6"],["138.6","-80"],["160","0"]]
            return {top:menuPosition[n][0]+'px',left:menuPosition[n][1]+'px'}
        },
        menuStyle(){
            return {
                backgroundColor: this.backgroundColor,
                color: this.color
            }
        },
        toggleMenu(e: any){
            // let menuEl = this.$refs.quickMenu
            // let menuIconEl = this.$refs.icon
            // if(!~menuEl.className.indexOf(' active')){
            //     menuEl.className += ' active';
            //     menuIconEl.forEach( function(element, index) {
            //     element.className += ' menu-animate';
            //     });
            // } else {
            //     menuEl.className = menuEl.className.replace(' active','')
            //     menuIconEl.forEach( function(element, index) {
            //     element.className = element.className.replace(' menu-animate','')
            //     });
            // }
        },
        processCallback(key: any){
            this.$emit('process',key)
        }
    }
})
</script>


<style lang="scss">
@import "../style/main.scss";
@import "../style/variable.scss";
.menu-animate {
  -webkit-animation: bounce 1s linear 1s;
  -moz-animation: bounce 1s linear 1s;
  animation: bounce 1s linear 1s;
}

.quick-menu {
  color: #fff;
  position: fixed;
  width: 50px;
  height: 50px;
  z-index: 4000 !important ;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
  @media (max-width: $screen-sm) {
      height: 40px !important;
      width: 40px !important;
    }
  > .menu {
    display: block;
    position: absolute;
    border-radius: 50% !important;
    width: 50px;
    height: 50px;
    background-color: #050F19;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
    color: #fff;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    transition: all 1s ease;
    margin-left: 8px;
    @media (max-width: $screen-sm) {
      height: 40px !important;
      width: 40px !important;
      margin-left: 15px;
    }
    .core-menu {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      transition: all 1s ease;
      margin-left: 6px;
      @media (max-width: $screen-sm) {
          margin-top: 2px;
          margin-left: 10px;
        }
      .bar {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        transition: all 1s ease;
        width: 28px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: 35%;
        margin-top: -1.5px;
        left: 16px;
        -webkit-transform-origin: 0% 50%;
        -moz-transform-origin: 0% 50%;
        -ms-transform-origin: 0% 50%;
        -o-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        &:before ,&:after{
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          transition: all 1s ease;
          content: '';
          width: 28px;
          height: 3px;
          background: #fff;
          position: absolute;
          left: 0px;
          -webkit-transform-origin: 0% 50%;
          -moz-transform-origin: 0% 50%;
          -ms-transform-origin: 0% 50%;
          -o-transform-origin: 0% 50%;
          transform-origin: 0% 50%;
        }
      }
    }
  }
}
.fullSize {
    height: 100%;
    width: 100%;
}
</style>