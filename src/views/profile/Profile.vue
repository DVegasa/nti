<template>
  <div class="main">
    <div class="panels back">
      <div class="row">
        <router-link to="#" class="side left">
          <Icon icon="bx:cog" class="icon"/>
        </router-link>

        <div class="center">
          <div class="avaArea">
            <img :src="require('@/assets/ed.jpg')" class="ava" />
            <div class="level">3 уровень</div>
          </div>

          <div class="texts">
            <div class="greeting">Добрый вечер, Эдуард</div>
            <div class="team">« Реактивные псы »</div>
          </div>
        </div>

        <router-link to="#" class="side right">
          <Icon icon="bx:bell" class="icon"/>
        </router-link>
      </div>

      <div class="row awards">
        <div class="award">
          <div class="emoji">🏆</div>
          <div class="label">1</div>
        </div>
        <div class="award">
          <div class="emoji">🥇</div>
          <div class="label">2</div>
        </div>
        <div class="award">
          <div class="emoji">🏅</div>
          <div class="label">6</div>
        </div>
        <div class="award">
          <div class="emoji">😊</div>
          <div class="label">11</div>
        </div>
      </div>

    </div>

    <div class="panels top">
      <div class="content">
        <h1>Лента активности</h1>

        <el-timeline class="timeline">
          <el-timeline-item timestamp="Вчера" placement="top">
            <div class="card">
              <h3 class="title">Занял 2 место в забеге на 200м</h3>
              <p>Серия городских забегов "Жить со вкусом!"</p>
            </div>
          </el-timeline-item>

          <el-timeline-item timestamp="Позавчера" placement="top">
            <div class="card">
              <h3 class="title">Благодарность от Антона И.</h3>
              <i>"За активное участие в спортивной жизни города"</i>
            </div>
          </el-timeline-item>

          <el-timeline-item timestamp="10 июля" placement="top">
            <div class="card">
              <h3 class="title">Участие в игре в дартс</h3>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2 июля" placement="top">
            <div class="card">
              <h3 class="title">Участие в игре в футбол</h3>
              <p>Команда "Драконы"</p>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="23 июня" placement="top">
            <div class="card">
              <h3 class="title">Участие в игре в футбол</h3>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="14 июня" placement="top">
            <div class="card">
              <h3 class="title">Участие в игре в дартс</h3>
            </div>
          </el-timeline-item>

        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue"
</script>

<style lang="scss" scoped>
$backHeight: 300px;


.panels {
  position:relative;
  width:100%;
  z-index:1000;
}

.back {
  background-color: $color-background;
  height: $backHeight;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  position:fixed;
  top:0;
  left:0;
  /* prevents your fixed panel from being on top of your subsequent panels */
  z-index: -99;

  .row {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-evenly;

    &.awards {
      gap: 5px;
      align-items: center;
      padding-left: 70px;
      padding-right: 70px;
      margin-top: 20px;

      .award {
        display: flex;
        flex-direction: column;
        align-items: center;

        .emoji {
          font-size: 32px;
        }

        .label {
          font-size: 14px;
          color: $color-text-light-weak;
        }
      }
    }
  }

  .side {
    padding: 25px;

    .icon {
      color: $color-background-light;
      opacity: 0.9;
      font-size: 24px;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-top: 30px;

    .avaArea {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      height: 120px;
      width: 100px;

      .ava {
        height: 100px;
        width: 100%;
        border-radius: 100%;
        object-fit: cover;
      }

      .level {
        position: absolute;
        bottom: 15px;
        border-radius: 1000px;
        background-color: $color-accent;
        font-weight: bold;
        font-size: 12px;
        padding: 3px 15px 2px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
      }
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 18px;

      .greeting {
        font-weight: bold;
        color: white;
      }

      .team {
        font-size: 16px;
        color: $color-text-light-weak;
      }
    }
  }
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

    .timeline {
      margin-top: 10px;

      .card {
        //padding: 10px !important;

        &.win {
          border: 2px solid $color-primary !important;
        }
      }
    }
  }
}
</style>
