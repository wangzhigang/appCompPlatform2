<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <layoutvue :nav="manage"></layoutvue>
    <!-- <headervue></headervue> -->
  </div>
</template>

<script>
import layoutvue from './components/layoutvue.vue'
export default {
  name: 'App',
  data: function () {
    return {
      manage: 'manage'
    }
  },
  components: {
    layoutvue
  },
  computed: {

  },
  mounted () {
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.title {
  text-align: left;
  color: #eee;
  h1 {
    display: inline;
  }
  .userbox {
    text-align: right;
    font-size: 16px;
    .headPhoto {
      width: 50px;
      height: 50px;
      border-radius: 26px;
      margin: 5px;
      vertical-align: middle;
    }
    .user {
      vertical-align: middle;
    }
  }
}
</style>
