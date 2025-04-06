import { defineStore } from 'pinia'

// 定义和导出计数器存储
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'Cool UI Counter'
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}) 