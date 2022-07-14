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

.appRoot {

  .routerView {
    //margin-top: 50px;
    margin-bottom: $size-bottomMenu-height;
  }

}

</style>
