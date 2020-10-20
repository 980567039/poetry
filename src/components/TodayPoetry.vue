<template>
  <div class="container">
    <div class="head"><img src="../assets/logo.png" alt=""></div>
    <div class="poetry-content">
      <p v-if="todayPoetry">{{ todayPoetry.paragraphs }}</p>
      <div @click="change" class="change">换一下</div>
    </div>

    <div class="footer">
      <p class="lead text">每次返回一句诗词<br>根据时间、地点、天气、事件智能推荐</p>
    </div>
  </div>
</template>

<script>
import { getTodayPoetry } from '@/api'
export default {
  name:'',
  data(){
   return {
    todayPoetry: null
   }
  },
  created() {
    this.getTodayPoetry()
  },
  methods: {
    change() {
      this.getTodayPoetry()
    },
    getTodayPoetry() {
      getTodayPoetry().then(res => {
        this.todayPoetry = res
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.container{
  padding: 20px;
  .head{

  }
  .poetry-content{
    p{
      font-size: 20px;
      padding-top: 100px;
      line-height: 30px;
    }
    .change{
      width: 95px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      display: inline-block;
      border-radius: 16px;
      color: #1aaf5d;
      border: 2px solid #1aaf5d;
      margin-top: 20px;
    }
  }
  .footer{
    padding-top: 35px;
    p{
      line-height: 25px;
    }
  }
}
</style>
