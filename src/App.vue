<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/Header.vue";
// import Nav from "./components/Nav.vue";
import Main from "./components/Main.vue";
import { loadTheme } from "./app";
import { loadCards } from "./cards";

// At the start of the app
// 1) Get the theme of the app
loadTheme();
// 2) Get all the cards
loadCards();

</script>

<template>
  <div class="container">
    <div class="top">
      <Header />
    </div>
    <div class="bottom">
      <!-- <div class="left">
        <Nav />
      </div> -->
      <div class="right">
        <Main />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$header-height: 50px;
$nav-width: 0px;

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
    background-color: #fff;

  .top {
    width: 100%;
    height: $header-height;
    // background-color: #fff;
  }

  .bottom {
    display: flex;
    width: 100%;
    height: calc(100% - $header-height);

    .left {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: $nav-width;
      // background-color: #ddd;
    }

    .right {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: calc(100% - $nav-width);
      // background-color: #aaa;
    }
  }
}
</style>
