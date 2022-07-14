<template>
  <div class="main">
    <div class="panels back">
      Meow
    </div>

    <div class="panels top">
      <div class="content">
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        meow <br>
        XXXXXXXXX <br>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main {
  position:absolute;
  height:100%;
  width:100%;

  .panels {
    position:relative;
    //height:100%;
    //min-height:100%;
    width:100%;
    z-index:1000;
  }

  .back {
    background-color: $color-background;
    height: 320px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position:fixed;
    top:0;
    left:0;
    /* prevents your fixed panel from being on top of your subsequent panels */
    z-index: -99;
  }

  .top {
    z-index: 10;
    margin-top: 300px;
    background-color: $color-background-light;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-bottom: calc($size-bottomMenu-height + 20px);

    .content {
      padding: 15px;
    }
  }
}
</style>
