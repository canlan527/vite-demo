export default function useRemove(todos) {
  // 删除当前item项
  const removeTodoItem = (item) => {
    todos.value.splice(todos.value.indexOf(item), 1)
  }

  // 清空所有completed项
  const clearCompleted = () => {
    todos.value = todos.value.filter(item => !item.completed)
  }

  return {
    removeTodoItem,
    clearCompleted
  }
}