<template>
  <div class="teamCreate">
    <el-card class="card">
      <h1 class="h">Создание команды</h1>
      <div class="form">
        <el-input placeholder="Название" v-model="title" />
      </div>

      <h2 style="margin-top: 20px">Пригласить друга</h2>
      <div class="users">
        <div class="user">
          <img :src="require('@/assets/ava1.jpg')" class="avatar" />
          <div class="name" style="flex: 1">Никита Никитович</div>
          <el-button v-if="b1==='no'" @click="b1='yes'" type="warning" size="small" class="invite">Пригласить</el-button>
          <el-button v-else disabled type="default" size="small" class="invite default">Приглашён</el-button>
        </div>
        <div class="user">
          <img :src="require('@/assets/ava2.jpg')" class="avatar" />
          <div class="name" style="flex: 1">Влад Владович</div>
          <el-button v-if="b2==='no'" @click="b2='yes'" type="warning" size="small" class="invite">Пригласить</el-button>
          <el-button v-else disabled type="default" size="small" class="invite default">Приглашён</el-button>
        </div>
        <div class="user">
          <img :src="require('@/assets/ava3.jpg')" class="avatar" />
          <div class="name" style="flex: 1">Саша Сашовиченко</div>
          <el-button v-if="b3==='no'" @click="b3='yes'" type="warning" size="small" class="invite">Пригласить</el-button>
          <el-button v-else disabled type="default" size="small" class="invite default">Приглашён</el-button>
        </div>
      </div>

      <h2 class="h2" style="margin-top: 20px">Поиск по имени</h2>
      <div class="form">
        <el-input placeholder="Имя или ID" v-model="name" />
      </div>

      <div class="buttons">
        <div style="flex: 1;" />
        <el-button type="warning" @click="create">Продолжить</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {ref} from "vue"
const title = ref('')
const name = ref('')
const b1 = ref('no')
const b2 = ref('no')
const b3 = ref('no')

const create = () => {
  console.log(title.value)
}

</script>

<style lang="scss">
.teamCreate {
  padding: 15px;

  .card {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: 15px !important;

    .h, .h2 {
      margin-bottom: 5px;
    }

    .users {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-top: 5px;
      font-size: 16px;

      .user {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        .avatar {
          height: 28px;
          width: 28px;
          border-radius: 500px;
          object-fit: cover;
        }
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 40px;
    }
  }
}
</style>
