<template>
  <div class="bottomMenu">

    <router-link to="/" :class="{item: true, selected: isSelected('/')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">Главная</div>
    </router-link>

    <router-link to="/events" :class="{item: true, selected: isSelected('/events')}">
      <Icon icon="bx:calendar-event" class="icon" />
      <div class="label">События</div>
    </router-link>

    <router-link to="/profile" :class="{item: true, selected: isSelected('/profile')}">
      <Icon icon="bx:user-circle" class="icon" />
      <div class="label">Я</div>
    </router-link>

    <router-link to="/map" :class="{item: true, selected: isSelected('/map')}">
      <Icon icon="bx:map-alt" class="icon" />
      <div class="label">Карта</div>
    </router-link>

    <router-link @click="openMenu" to="#" :class="{item: true, selected: isSelected('-')}">
      <Icon icon="bx:menu" class="icon" />
      <div class="label">Меню</div>
    </router-link>

  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import {useRoute} from "vue-router"
import {computed} from "vue"
import {useSideMenu} from "@/use/useSideMenu.js";

const route = useRoute()
const sideMenu = useSideMenu()

const isSelected = (r) => route.path === r

const openMenu = () => {
  sideMenu.show()
}
</script>

<style lang="scss" scoped>

.bottomMenu {
  background-color: $color-background;
  height: $size-bottomMenu-height;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  -webkit-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);

  margin: 10px;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding-left: 15px;
  padding-right: 15px;

  .item {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    opacity: 0.7;
    color: $color-background-light;

    .icon {
      font-size: 24px;
    }

    .label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    &.selected {
      opacity: 1.0;
      color: $color-accent !important;
    }
  }
}
</style>
