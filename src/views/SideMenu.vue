<template>
  <el-drawer
    v-model="sideMenu.visible.value"
    :with-header="false"
    direction="ltr"
    size="85%"
  >
    Hello, world!
  </el-drawer>
</template>

<script setup>
import {useSideMenu} from "@/use/useSideMenu.js";
import {watch} from "vue";

const sideMenu = useSideMenu()

</script>

<style lang="scss" scoped>
</style>
