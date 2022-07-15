<template>
  <div class="map">
    <img :src="require('@/assets/map.png')" alt="" class="img">
  </div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  padding-bottom: 0 !important;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
