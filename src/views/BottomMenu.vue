<template>
  <div class="bottomMenu">

    <router-link to="/events" :class="{item: true, selected: isSelected('/a')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">События</div>
    </router-link>

    <router-link to="/" :class="{item: true, selected: isSelected('/b')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">Домашняяяя</div>
    </router-link>

    <router-link to="/" :class="{item: true, selected: isSelected('/c')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">x</div>
    </router-link>

    <router-link to="/" :class="{item: true, selected: isSelected('/d')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">Домашняя</div>
    </router-link>

    <router-link to="/" :class="{item: true, selected: isSelected('/e')}">
      <Icon icon="bx:home" class="icon" />
      <div class="label">x</div>
    </router-link>

  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
import {useRoute} from "vue-router"
import {computed} from "vue"

const route = useRoute()

const isSelected = (r) => route.path === r
</script>

<style lang="scss" scoped>

.bottomMenu {
  background-color: white;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  -webkit-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding-left: 25px;
  padding-right: 25px;

  .item {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    color: red !important;

    .icon {
      font-size: 24px;
    }

    .label {
      font-size: 13px;
    }
  }
}
</style>
