<template>
  <div class="appHeader">
    <div class="openMenu" @click="openSideMenu">X</div>
  </div>
</template>

<script setup>
import {useSideMenu} from "@/use/useSideMenu.js";

const sideMenu = useSideMenu()

const openSideMenu = () => {
  sideMenu.show()
}

</script>

<style lang="scss" scoped>
.appHeader {
  background-color: yellow;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  .openMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: red;
    width: 50px
  }
}
</style>
