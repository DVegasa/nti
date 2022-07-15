<template>
  <div class="events">
    <div class="panels back">
      <div class="content">
        <h1 class="text">События</h1>
        <div class="text subtext">В городе Саратов</div>
      </div>
    </div>

    <div class="panels top">
      <div class="content">
        <div class="calendar">
          <h1>Календарь событий</h1>
          <div class="columns">

            <div class="col">
              <div class="week">ПТ</div>
              <img :src="require('@/assets/icrun.png')" class="img" />
            </div>

            <div class="col">
              <div class="week">СБ</div>
              <img :src="require('@/assets/icfootball.png')" class="img" />
              <img :src="require('@/assets/icfootball.png')" class="img" />
            </div>

            <div class="col">
              <div class="week">ВС</div>
              <img :src="require('@/assets/icbasketball.png')" class="img" />
              <img :src="require('@/assets/icfootball.png')" class="img" />
            </div>

            <div class="col">
              <div class="week">ПН</div>
            </div>

            <div class="col">
              <div class="week">ВТ</div>
            </div>

            <div class="col">
              <div class="week">СР</div>
              <img :src="require('@/assets/icfootball.png')" class="img" />
            </div>

            <div class="col">
              <div class="week">ЧТ</div>
            </div>
          </div>
        </div>
        <MainEvents />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainEvents from "@/views/main/MainEvents.vue";
</script>

<style lang="scss" scoped>
$backHeight: 85px;

.events {
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
    background-size: cover;
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

      .columns {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-around;

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;

          .week {
            font-weight: bold;
          }

          .img {
            margin-top: 4px;
            height: 20px;
            width: 20px;
            object-fit: contain;
            margin-bottom: 3px;
          }
        }
      }
    }
  }
}
</style>
