<template>
  <div class="appRoot">
    <AppHeader />
    <router-view class="routerView"/>
    <BottomMenu />
  </div>
</template>

<script>
import AppHeader from "@/views/AppHeader.vue";
import BottomMenu from "@/views/BottomMenu.vue";
export default {
  components: {BottomMenu, AppHeader}
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
  //height: 100%;
}

.appRoot {
  //height: 100vh;
  //display: flex;
  //flex-direction: column;


  .routerView {
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: blue;
  }

}


</style>
