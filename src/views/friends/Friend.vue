<template>
  <div class="friend">
    <div class="left">
      <img :src="require('@/assets/ava2.jpg')" alt="" class="img" />
    </div>
    <div class="right">
      <div class="name">Ирина Олеговна</div>
      <div class="subtitle">Недавно принимала участие в турнире по волейболу</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.friend {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;

  .left {
    .img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 1000px;
    }
  }

  .right {
    flex: 1;

    .name {
      font-size: 18px;
    }

    .subtitle {
      font-size: 14px;
      color: #3f3f3f;
    }
  }
}
</style>
