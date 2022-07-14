<template>
  <div class="friends">
    <div class="panels back">
      <div class="content">
        <h1 class="h1">Друзья</h1>
        <div class="form">
          <el-input v-model="search" placeholder="Найти новых знакомых"/>
          <el-button type="warning">Поиск</el-button>
        </div>
      </div>
    </div>

    <div class="panels top">
      <div class="content">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const search = ref('')
</script>

<style lang="scss" scoped>
$backHeight: 110px;
.friends {
  position:absolute;
  height:100%;
  width:100%;

  .panels {
    position:relative;
    width:100%;
    z-index:1000;
  }

  .back {
    background-color: $color-background;
    height: $backHeight;

    position: fixed;
    top: 0;
    left: 0;
    /* prevents your fixed panel from being on top of your subsequent panels */
    z-index: -99;

    .content {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;

      .h1 {
        color: $color-text-light;
      }

      .form {
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }
  }

  .top {
    z-index: 10;
    margin-top: $backHeight;
    background-color: $color-background-light;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-bottom: calc($size-bottomMenu-height + 20px);
    min-height: calc(100vh - $backHeight);

    .content {
      padding: 15px;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>

<script>
import Friend from "@/views/friends/Friend.vue";
export default {
  components: {Friend}
}
</script>
