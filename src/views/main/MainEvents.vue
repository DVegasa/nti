<template>
  <div class="mainEvents">
    <h1>Ближайшие мероприятия</h1>

    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :pagination="{clickable: true}"
        :modules="modules"
        class="mySwiper"
    >

      <SwiperSlide v-for="slide in slides" :key="slide.title" class="slide">
        <el-card class="card">
          <img :src="require('@/assets/football.png')" alt="" class="img" />
          <div class="subtitle">Сегодня в 10:00</div>
          <h1 class="text">{{slide.title}}</h1>
          <div class="bottom">
            <div style="flex: 1"/>
            <el-button type="warning">Присоединиться</el-button>
          </div>
        </el-card>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const modules = [Pagination]

const slides = [
  {title: 'Футбол'},
  {title: 'Футбол2'},
  {title: 'Футбол3'},
  {title: 'Футбол4'},
  {title: 'Футбол5'},
  {title: 'Футбол6'},
]


</script>

<style lang="scss">
#app::v-deep(.el-card) {
  padding: 0 !important;
}

.mainEvents {
  .mySwiper {
    margin-top: 10px;

    .slide {
      border-radius: 20px;

      .card {
        border-radius: 30px;
        //height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: stretch;

        .img {
          height: 170px;
          width: 100%;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .subtitle {
          padding-left: 10px;
          color: $color-text-weak;
          font-size: 14px;
        }

        .text {
          flex: 1;
          padding-left: 10px;
        }

        .bottom {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-right: 10px;
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>
