<template>
  <div id="app">
    <div id="nav">
      <img src="@/assets/icons/Logo.png" alt="" class="icon">
      <div class="btns">
        <div class="btn" v-for="item in navItems" :key="item.target" @click="navClick(item.target)">
          <img :src="require(`@/assets/icons/${item.icon}.png`)" alt="" class="icon">
          <div class="text" :hidden="curTarget !== item.target">{{item.name}}</div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      navItems: [
        {
          name: 'JavaScript',
          icon: 'JS',
          target: 'js'
        },
        {
          name: 'Vue',
          icon: 'vue',
          target: 'vue'
        },
        {
          name: 'iOS',
          icon: 'ios',
          target: 'ios'
        },
        {
          name: '小程序',
          icon: 'mp',
          target: 'mp'
        }],
      curTarget:''
    }
  },
  methods:{
    navClick(target){
      this.curTarget = target
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/color.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  height: 1rem;
  background-color: $BASE_BLUE;
  display: flex;
  flex-direction: row;
  align-items: center;
  .icon{
    margin: 0 .3rem 0 0.4rem ;
    height: .6rem;
    width: .6rem;
  }
  .btns{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    .btn{
      height: 100%;
      padding: 0 .34rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon{
        margin: 0;
        height: .4rem;
        width: .4rem;
        margin-bottom: .1rem;
      }
      .text{
        text-align: center;
        font-size: .15rem;
        line-height: .2rem;
        color: white;
      }
    }
  }
}

</style>
