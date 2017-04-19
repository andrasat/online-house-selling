<template>
  <div id="app">
    <nav class="nav top-nav">
      <div class="nav-left">
        <router-link to="/" class="title is-3 nav-item">Online House Retail</router-link>
      </div>
    </nav>
    <div class="main-container columns">
      <div class="column is-10">
        <router-view></router-view>
      </div>
      <div class="column is-2">
        <router-link to="/add" class="button is-primary is-large">Sell Now !</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

$greenie : rgba(0,178,105,0.7);
$light-greenie : rgba(85,255,185,0.9);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-container {
  margin: 2em;
}
.top-nav {
  background-color: $light-greenie;
  padding: 1em;
}
.map-container {
  width: 100%;
  height: 400px;
}
</style>
