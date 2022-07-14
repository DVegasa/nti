<template>
  <swiper
      :slidesPerView="'auto'"
      :spaceBetween="15"
      :pagination="{clickable: true}"
      :modules="modules"
      class="mySwiper"
  >

    <SwiperSlide v-for="slide in slides" :key="slide.title" class="slide">
      <el-card class="card">
        {{slide.title}}
      </el-card>
    </SwiperSlide>
  </Swiper>
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

<style lang="scss" scoped>
.mySwiper {
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 100%;

  .slide {
    border-radius: 5px;
    width: 23vw;
    padding-bottom: 40px;

    .card {
      height: 110px;
    }
  }
}
</style>
