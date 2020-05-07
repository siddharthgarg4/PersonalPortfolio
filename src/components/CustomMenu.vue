<template>
    <b-container fluid class="removePadding">
        <b-row class="customMenuContainer"></b-row>
        <b-row>
            <b-col cols="12" class="removePadding justify-content-center d-flex">
                <div class="menuLine left"></div>
            </b-col>
            <b-col cols="12" class="menuLineAddMargin removePadding justify-content-center d-flex">
                <div class="menuLine"></div>
            </b-col>
            <b-col cols="12" class="menuLineAddMargin removePadding justify-content-center d-flex">
                <div class="menuLine right"></div>
            </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss">
@import "../styles/main.scss";
.customMenuContainer {
    height: 3.5vw;
    width: 3.5vw;
    margin: 15px 0 0 0;
    min-height: 30px;
    min-width: 30px;
    background: $lightWhiteColor;
    border-radius: 50%;
    position: fixed;
    z-index: 2;
    border: 1px solid $darkBlackColor;
    @media (max-width: $screen-md) and (min-width: $screen-xs) {
        height: 5.5vw;
        width: 5.5vw;
    }
    @media (max-width: $screen-xs) {
        height: 7vw;
        width: 7vw;
    }
}
.menuLineAddMargin{
    margin-top: 15%;
}
.menuLine {
    width: 65%;
    height: 1px;
    background-color: $darkBlackColor;
}
</style>