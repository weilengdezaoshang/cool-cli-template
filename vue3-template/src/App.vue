<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Cool UI Vue3 模板 © {{ new Date().getFullYear() }}</p>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main {
  margin: 20px;
  min-height: calc(100vh - 200px);
}

footer {
  padding: 20px;
  font-size: 14px;
  color: #666;
}
</style>
