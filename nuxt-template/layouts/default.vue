<template>
  <div>
    <header class="header">
      <nav>
        <nuxt-link to="/">首页</nuxt-link>
      </nav>
    </header>
    <main class="main">
      <nuxt />
    </main>
    <footer class="footer">
      <p>Cool UI Nuxt 模板 &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  padding: 1rem;
  background-color: #f5f5f5;
  text-align: center;
}

.main {
  min-height: calc(100vh - 120px);
  padding: 2rem;
}

.footer {
  height: 60px;
  padding: 1rem;
  background-color: #f5f5f5;
  text-align: center;
}
</style>
