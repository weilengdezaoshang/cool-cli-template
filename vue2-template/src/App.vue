<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
    <footer>
      <p>Cool UI Vue2 模板 © {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  padding: 20px;
  font-size: 14px;
  color: #666;
  margin-top: 40px;
}
</style>
