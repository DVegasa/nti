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
      <div class="item" v-for="item of items" :key="item.id" @click="onClick(item)">
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
import {useRouter} from "vue-router";

const sideMenu = useSideMenu()
const router = useRouter()

const items = [
  {disabled: true, id:"myTeam", icon: "bx:dumbbell", name: 'Моя сборная'},
  {disabled: true, id:"grants", icon: "bx:money", name: 'Гранты'},
  {disabled: true, id:"streams", icon: "bx:video-recording", name: 'Прямые трансляции'},
  {disabled: true, id:"live", icon: "bx:news", name: 'LIVE табло'},
  {disabled: true, id:"calendar", icon: "bx:calendar", name: 'Календарь'},
  {disabled: true, id:"news", icon: "bx:news", name: 'Новости'},
  {disabled: false, id:"chatAdmin", icon: "bx:message-rounded-edit", name: 'Задать вопрос', special: true},
]

const onClick = (item) => {
  if (!item?.disabled) {
    sideMenu.hide()
    router.push('/' + item.id)
  }
}

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
