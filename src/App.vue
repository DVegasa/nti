<template>
  <div class="appRoot">
<!--    <AppHeader />-->
    <SideMenu />
    <router-view class="routerView"/>
    <BottomMenu />
  </div>
</template>

<script>
import AppHeader from "@/views/AppHeader.vue";
import BottomMenu from "@/views/BottomMenu.vue";
import SideMenu from "@/views/SideMenu.vue";
export default {
  components: {SideMenu, BottomMenu, AppHeader}
}
</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

html,
body {
  background-color: $color-background;
}

.el-drawer {
  background-color: $color-background !important;
  color: $color-text-light !important;
  padding: 0 !important;
}

.el-drawer__body {
  padding: 2px !important;
}

.el-button--warning {
  background-color: $color-primary !important;
}

.swiper-pagination-bullet-active {
  background-color: $color-primary !important;
}

.el-card {
  padding: 0 !important;

  .el-card__body {
    padding: 0 !important;
  }
}

.appRoot {

  .routerView {
    //margin-top: 50px;
    margin-bottom: $size-bottomMenu-height;
  }

}

</style>
