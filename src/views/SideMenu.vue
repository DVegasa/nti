<template>
  <el-drawer
    v-model="sideMenu.visible.value"
    :with-header="false"
    direction="rtl"
    size="85%"
    class="sideMenu"
  >
    <div class="content">
      <div class="saratov">
        <img :src="require('@/assets/saratov.png')" alt="" class="img" />
        <div class="text">
          Умный город
        </div>
        <div class="text">
          Живи спортом
        </div>
      </div>
      <div style="flex: 1" />
      <div class="item" v-for="item of items">
        <Icon :icon="item.icon" :class="{icon: true, special: item?.special ?? false}" />
        <div :class="{title: true, special: item?.special ?? false}">{{item.name}}</div>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import {useSideMenu} from "@/use/useSideMenu.js";
import {watch} from "vue";

const sideMenu = useSideMenu()

const items = [
  {icon: "bx:dumbbell", name: 'Моя сборная'},
  {icon: "bx:money", name: 'Гранты'},
  {icon: "bx:video-recording", name: 'Прямые трансляции'},
  {icon: "bx:news", name: 'LIVE табло'},
  {icon: "bx:calendar", name: 'Календарь'},
  {icon: "bx:news", name: 'Новости'},
  {icon: "bx:message-rounded-edit", name: 'Задать вопрос', special: true},
]

</script>

<style lang="scss" scoped>
.sideMenu {
}

.content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  padding-bottom: 40px;
  gap: 8px;
  padding-left: 5px;
  padding-right: 5px;

  .saratov {
    padding-top: 30px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;

    .img {
      width: 50px;
      padding-bottom: 4px;
    }

    .text {
      line-height: 1em;
      font-size: 14px;
      color: $color-primary;
    }
  }

  .item {
    width: 90%;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 6px;
    padding-bottom: 6px;
    color: $color-text-light;
    gap: 10px;
    padding-left: 5px;
    padding-right: 5px;

    .icon {
      margin-bottom: 2px;
      font-size: 24px;
    }

    .special {
      color: $color-primary;
    }
  }
}
</style>
