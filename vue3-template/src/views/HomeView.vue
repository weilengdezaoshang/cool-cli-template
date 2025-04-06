<template>
  <div class="home">
    <h1>Cool UI Vue3 模板</h1>
    <p>欢迎使用 Cool UI Vue3 项目模板！</p>
    
    <div class="counter">
      <h2>Pinia 状态管理示例</h2>
      <p>当前计数: {{ counter.count }}</p>
      <p>双倍计数: {{ counter.doubleCount }}</p>
      <button @click="counter.increment()">增加</button>
      <button @click="counter.decrement()">减少</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store'

const counter = useCounterStore()
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