import { computed, ref } from "vue";

export default function useEditItem(todos) {
  const editItem = ref(null)
  
  // 获得要编辑的item
  const editTodoItem = (item) => {
    editItem.value = item
  }

  // 完成编辑
  const doneEdit = (title) => {
    // 判断 title 是否是空值
    if (title.trim() === '') { // 如果是空值删除当前项
      todos.value.splice(todos.value.indexOf(editItem.value), 1)
    } else {
      editItem.value = title.trim()
    }
    editItem.value = null
  }

  // 处理全选
  const allCompleted = computed(() => {
    return todos.value.filter(item => !item.completed).length === 0
  })

  const changeAllChecked = (checked) => {
    todos.value.forEach(item => {
      item.completed = checked
    })
  }


  return {
    editItem,
    editTodoItem,
    doneEdit,
    allCompleted,
    changeAllChecked,
  }
}