<template>
  <div class="main">
    <div class="panels back">
      meow
    </div>

    <div class="panels top">
      <div class="content">
        <h1>Награды</h1>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
$backHeight: 220px;

.panels {
  position:relative;
  width:100%;
  z-index:1000;
}

.back {
  background-color: $color-background;
  height: $backHeight;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;

  position:fixed;
  top:0;
  left:0;
  /* prevents your fixed panel from being on top of your subsequent panels */
  z-index: -99;
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
  }
}
</style>
