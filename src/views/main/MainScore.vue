<template>
  <el-card class="mainScore">
    <div class="header" v-if="props.type === 'football'">
      Футбол, 10 июля 2022
    </div>
    <div class="header" v-else>
      Хоккей, 9 июля 2022
    </div>
    <div class="content">
      <div class="score left">
        <div class="number" v-if="props.type === 'football'">3</div>
        <div class="number" v-else>7</div>
        <div class="team" v-if="props.type === 'football'">Спартак</div>
        <div class="team" v-else>Ротор</div>
      </div>
      <div class="vs">vs</div>
      <div class="score right">
        <div class="number" v-if="props.type === 'football'">4</div>
        <div class="number" v-else>1</div>
        <div class="team" v-if="props.type === 'football'">ЦСКА</div>
        <div class="team" v-else>Камыш</div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps(['type'])

</script>

<style lang="scss" scoped>
.mainScore {
  padding: 15px !important;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: $color-text-weak;
    margin-bottom: 2px;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: start;

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      flex: 1;

      .number {
        color: black;
        font-size: 36px;
        font-weight: bold;
      }
    }

    .vs {
      color: $color-text-weak;
      padding-top: 20px;
    }
  }
}
</style>
