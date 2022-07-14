<template>
  <div class="event">
    <el-card class="card">
      <img :src="require('@/assets/football.png')" alt="" class="img" />
      <div class="subtitle">
        <div class="left">Сегодня в 10:00</div>
        <div class="right">Осталось три места!</div>
      </div>
      <h1 class="text">Футбол</h1>
    </el-card>

    <el-button type="warning">Присоединиться к команде</el-button>
    <el-button type="warning">Создать новую команду</el-button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.event {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .card {
    border-radius: 30px;
    //height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding-bottom: 20px;

    .img {
      height: 170px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .subtitle {
      padding-left: 10px;
      color: $color-text-weak;
      font-size: 14px;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding-right: 10px;

      .left {
        flex: 1;
      }

      .right {
        color: $color-primary;
        font-weight: bold;
      }
    }

    .text {
      flex: 1;
      padding-left: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
