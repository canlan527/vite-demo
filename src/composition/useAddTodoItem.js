import { ref,  } from "vue";

export default function useAddTodoItem(todos) {
  const newTodoItem = ref("");

  // 新增一项方法
  const addTodoItem = () => {
    // 判断输入框是否为空
    if(!newTodoItem.value.trim()) {
      return;
    }
    // 构造新增项对象
    const newTodo = {
      id: Date.now() + Math.random().toString(16).slice(2, 6),
      title: newTodoItem.value,
      completed: false,
    }
    // 放到任务列表里
    console.log(todos.value)
    todos.value.push(newTodo);
    
    // 清空输入框
    newTodoItem.value = "";
  }
 

  return {
    newTodoItem,
    addTodoItem,
  }
}