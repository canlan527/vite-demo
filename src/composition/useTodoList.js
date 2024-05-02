import { ref, watchEffect } from 'vue'
import { fetch, save } from '../util/storage'

export default function useTodoList() {
  // 获取任务列表作为初始化值
  const todos = ref(fetch())
  // window.todos = todos.value
  // 监听todos变化，存储到本地
  watchEffect(() => {
    save(todos.value)
  })


  return {
    todos,
  }
}