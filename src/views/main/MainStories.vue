<template>
  <swiper
      :slidesPerView="'auto'"
      :spaceBetween="15"
      :pagination="{clickable: true}"
      :modules="modules"
      class="mySwiper"
  >

    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories1.jpg')" alt="" class="img" />
      </el-card>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories2.jpg')" alt="" class="img" />
      </el-card>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories3.jpg')" alt="" class="img" />
      </el-card>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories4.jpg')" alt="" class="img" />
      </el-card>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories4.jpg')" alt="" class="img" />
      </el-card>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <el-card class="card">
        <img :src="require('@/assets/stories4.jpg')" alt="" class="img" />
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

</script>

<style lang="scss" scoped>
.mySwiper {
  margin-top: 10px;
  width: 100%;

  .slide {
    border-radius: 5px;
    width: 23vw;
    padding-bottom: 40px;

    .card {
      height: 110px;
    }
  }
}

.img {
  height: 110px;
  width: 100%;
  object-fit: cover;
}
</style>
