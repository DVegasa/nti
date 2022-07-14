<template>
  <div class="main">
    <div class="panels back">
      <router-link to="#" class="side left">
        <Icon icon="bx:cog" class="icon"/>
      </router-link>

      <div class="center">
        <div class="avaArea">
          <img :src="require('@/assets/ed.jpg')" class="ava" />
          <div class="level">3 уровень</div>
        </div>

        <div class="texts">
          <div class="greeting">Добрый вечер, Эдуард</div>
          <div class="team">« Реактивные псы »</div>
        </div>

      </div>

      <router-link to="#" class="side right">
        <Icon icon="bx:bell" class="icon"/>
      </router-link>
    </div>

    <div class="panels top">
      <div class="content">
        <MainEvents />
      </div>
    </div>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import MainEvents from "@/views/main/MainEvents.vue";
</script>

<style lang="scss" scoped>
$backHeight: 230px;

.main {
  position:absolute;
  height:100%;
  width:100%;

  .panels {
    position:relative;
    //height:100%;
    //min-height:100%;
    width:100%;
    z-index:1000;
  }

  .back {
    background-color: $color-background;
    height: $backHeight;

    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;

    position:fixed;
    top:0;
    left:0;
    /* prevents your fixed panel from being on top of your subsequent panels */
    z-index: -99;

    .side {
      padding: 25px;

      .icon {
        color: $color-background-light;
        opacity: 0.9;
        font-size: 24px;
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding-top: 30px;

      .avaArea {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: 130px;
        width: 100px;

        .ava {
          height: 100px;
          width: 100%;
          border-radius: 100%;
          object-fit: cover;
        }

        .level {
          position: absolute;
          bottom: 20px;
          border-radius: 1000px;
          background-color: $color-accent;
          font-weight: bold;
          font-size: 12px;
          padding: 3px 15px 2px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content:center;
        }
      }

      .texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 18px;

        .greeting {
          font-weight: bold;
          color: white;
        }

        .team {
          font-size: 16px;
          color: $color-text-light-weak;
        }
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
    }
  }
}
</style>
