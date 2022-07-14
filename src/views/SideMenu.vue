<template>
  <el-drawer
    v-model="sideMenu.visible.value"
    :with-header="false"
    direction="rtl"
    size="85%"
    class="sideMenu"
  >
    <div class="item" v-for="item of items">
      Item
    </div>
  </el-drawer>
</template>

<script setup>
import {useSideMenu} from "@/use/useSideMenu.js";
import {watch} from "vue";

const sideMenu = useSideMenu()

const items = [
  {name: 'Главная', }
]

</script>

<style lang="scss" scoped>

</style>
