<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
import "./css/reset.css"
import "./css/main.css"
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'PingFang-SC-Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
