<template>
  <div class="home">
    <h1>Cool UI Vue2 模板</h1>
    <p>欢迎使用 Cool UI Vue2 项目模板！</p>
    
    <div class="counter">
      <h2>Vuex 状态管理示例</h2>
      <p>当前计数: {{ count }}</p>
      <p>双倍计数: {{ doubleCount }}</p>
      <button @click="increment">增加</button>
      <button @click="decrement">减少</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'doubleCount'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #42b983;
  margin-bottom: 20px;
}

.counter {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

button {
  padding: 8px 16px;
  margin: 10px 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa776;
}
</style> 