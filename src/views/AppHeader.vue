<template>
  <div class="appHeader">
    <div class="openMenu" @click="openSideMenu">
      <Icon icon="bx:menu" style="font-size: 32px" />
    </div>

    <div class="center">
      саратов
    </div>

    <div class="rightButton"></div>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import {useSideMenu} from "@/use/useSideMenu.js";

const sideMenu = useSideMenu()

const openSideMenu = () => {
  sideMenu.show()
}

</script>

<style lang="scss" scoped>
.appHeader {
  background-color: white;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  .openMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50px
  }

  .center {
    @extend .noSelect;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .rightButton {
    width: 50px
  }
}
</style>
