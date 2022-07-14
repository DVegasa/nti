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
  font-size: 30px;
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
    background-color: red;
    height: 210px;

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
    margin-top: 200px;
    background-color: yellow;
    border-radius: 25px;
    padding-bottom: 50px;
  }
}
</style>
