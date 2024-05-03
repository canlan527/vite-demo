<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus="" autocomplete="off" placeholder="What needs to be done?"
          v-model="newTodoItem" @keyup.enter="addTodoItem" />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allCompleted"
          @input="changeAllChecked($event.target.checked)" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" :class="{ completed: item.completed, editing: item === editItem }" v-for="item in list"
            :key="item.id">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label @dblclick="editTodoItem(item)">{{ item.title }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" v-model="item.title" @keyup.enter="doneEdit(item.title)"
              @blur="doneEdit(item.title)" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ activelist.length }}</strong>
          <span>item{{ activelist.length > 1 ? 's' : '' }} left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" :class="{ selected: status === 'all' }">All</a></li>
          <li><a href="#/active" :class="{ selected: status === 'active' }">Active</a></li>
          <li><a href="#/completed" :class="{ selected: status === 'completed' }">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show="completedlist.length > 0">
          Clear completed
        </button>
      </footer>
    </section>
  </div>

</template>
<script>
import useTodoList from './composition/useTodoList'
import useAddTodoItem from './composition/useAddTodoItem'
import useFilter from './composition/useFilter'
import useEditItem from './composition/useEditItem'

export default {
  name: 'App',
  setup() {
    const { todos } = useTodoList()


    return {
      ...useAddTodoItem(todos),// 展开该函数返回的每一项
      ...useFilter(todos),
      ...useEditItem(todos),
    }
  }
}
</script>
