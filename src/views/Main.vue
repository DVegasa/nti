<template>
  <div class="main">
    <div v-for="i in 42" :key="i">
      Element #{{i}}
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
  background-color: #8ff1ab;
  font-size: 30px;
}
</style>
