import { computed, onMounted, onUnmounted, ref } from 'vue'
import { filterlist } from '../util/helper'

const statusList = ['all', 'active', 'completed']
export default function useFilter(todos) {
  const status = ref('all')
  // 操作hash
  // 监听地址栏hash变化
  const hashChange = () => {
    // 截取有效hash值
    const hash = window.location.hash.replace(/#\/?/, '')
    if(statusList.includes(hash)) {
      status.value = hash
      // 更新地址栏hash
      window.location.hash = hash
    } else {
      // 无效的hash值
      window.location.hash = ''
      status.value = 'all'
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', hashChange)
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', hashChange)
  })

  // 将筛选的列表变成响应式的数据，使用computed
  // filterlist(todos.value, status.value)
  const list = computed(() => {
    return filterlist(todos.value, status.value)
  })
  // 获取未完成的todo
  const activelist = computed(() => {
    return filterlist(todos.value, statusList[1]);
  })
  // 获取已完成的todo
  const completedlist = computed(() => {
    return filterlist(todos.value, statusList[2]);
  })


 
  return {
    status,
    list,
    activelist,
    completedlist
  }
}