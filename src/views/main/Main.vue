<template>
  <div class="main">
    <div class="panels back">
      <div class="content">
        <h1 class="text">Самое главное</h1>
        <div class="text subtext">За последнюю неделю</div>
        <MainStories class="mainStories"/>
      </div>
    </div>

    <div class="panels top">
      <div class="content">
        <MainEvents />
        <MainEvents />
        <MainEvents />
      </div>
    </div>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import MainEvents from "@/views/main/MainEvents.vue";
import MainStories from "@/views/main/MainStories.vue";
</script>

<style lang="scss" scoped>
$backHeight: 240px;

.main {
  position:absolute;
  height:100%;
  width:100%;

  .panels {
    position:relative;
    width:100%;
    z-index:1000;
  }

  .back {
    background-color: $color-background;
    height: $backHeight;

    position: fixed;
    top: 0;
    left: 0;
    /* prevents your fixed panel from being on top of your subsequent panels */
    z-index: -99;

    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 100%;
      padding-left: 10px;
      padding-top: 20px;

      .text {
        padding-left: 10px;
        color: $color-text-light;
      }

      .subtext {
        color: $color-text-light-weak;
        margin-bottom: 5px;
      }

      .mainStories {
        padding-left: 10px;
      }
    }
  }

  .top {
    z-index: 10;
    margin-top: $backHeight;
    background-color: $color-background-light;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-bottom: calc($size-bottomMenu-height + 20px);
    min-height: calc(100vh - $backHeight);

    .content {
      padding: 15px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
}
</style>
