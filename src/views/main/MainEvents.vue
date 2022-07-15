<template>
  <div class="mainEvents">
    <h1>{{props?.title ?? 'Ближайшие мероприятия'}}</h1>

    <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :pagination="{clickable: true}"
        :modules="modules"
        class="mySwiper"
    >

      <SwiperSlide v-for="slide in slides()" :key="slide.title" class="slide">
        <el-card class="card">
          <img :src="require('@/assets/hockey.jpg')" alt="" class="img" v-if="props?.type==='hockey'" />
          <img :src="require('@/assets/football.png')" alt="" class="img" v-else />
          <div class="subtitle">
            <div class="left" v-if="props?.type==='hockey'" >Завтра в 19:30</div>
            <div class="left" v-else>Сегодня в 10:00</div>

            <div class="right" v-if="props?.type==='hockey'" ></div>
            <div class="right" v-else>Осталось три места!</div>
          </div>
          <h1 class="text">{{slide.title}}</h1>
          <div class="bottom">
<!--            <div class="avatars">-->
<!--              <img :src="require('@/assets/ed.jpg')" class="avatar" style="right: -32px">-->
<!--              <img :src="require('@/assets/ed.jpg')" class="avatar" style="right: -21px">-->
<!--              <img :src="require('@/assets/ed.jpg')" class="avatar" style="right: -10px">-->
<!--              <img :src="require('@/assets/ed.jpg')" class="avatar">-->
<!--            </div>-->
            <div style="flex: 1" class="description">
              <img :src="require('@/assets/ed.jpg')" class="avatar" v-if="props?.type!=='hockey'">
              <div class="text" v-if="props?.type!=='hockey'">Эдуард будет играть!</div>
            </div>
            <el-button type="warning" @click="$emit('join')">Присоединиться</el-button>
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

const props = defineProps(['title', 'type'])

const slides = () => {
  if (props?.type === 'hockey') return [
    {title: 'Хоккей'},
    {title: 'Хоккей2'},
    {title: 'Хоккей3'},
  ]

  return [
    {title: 'Футбол'},
    {title: 'Футбол2'},
    {title: 'Футбол3'},
    {title: 'Футбол4'},
    {title: 'Футбол5'},
    {title: 'Футбол6'},
  ]
}


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
      padding-bottom: 40px;

      .card {
        border-radius: 30px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
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

          display: flex;
          flex-direction: row;
          align-items: center;
          padding-right: 10px;

          .left {
            flex: 1;
          }

          .right {
            color: $color-primary;
            font-weight: bold;
          }
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
          padding-left: 6px;
          padding-top: 12px;
          padding-bottom: 10px;

          .description {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;

            .text {
              font-size: 14px;
              color: $color-text-weak;
              padding: 0;
              margin-top: 2px;
            }
          }

          .avatars {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .avatar {
            position: relative;
            height: 24px;
            width: 24px;
            border-radius: 1000px;
            border: 4px solid $color-background-light;
          }
        }
      }
    }
  }
}
</style>
