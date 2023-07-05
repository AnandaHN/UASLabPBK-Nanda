<template>
    <main class="app">
      <section class="greeting">
        <hr>
        <hr>
      </section>
      <section class="create-todo">
        <h3><b>Tambahkan kegiatan yang akan dilakukan!</b></h3>
        <form id="new-todo-form" @submit.prevent="addTodo">
          <input type="text" name="content" id="content" placeholder="Cth : Main" v-model="newTodo">
          <button class="tugas">Tambahkan Kegiatan</button>
        </form>
      </section>
      <section class="todo-list">
        <h3><b>LIST KEGIATAN:</b></h3>
        <div v-for="todo in filteredTodos" :key="todo.id" :class="`todo-item ${todo.done ? 'done' : ''}`">
          <label>
            <ul>
              <li>
                <input type="checkbox" class="styled-checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
              </li>
            </ul>
          </label>
          <div class="todo-content">
            <input type="text" v-model="todo.text" />
          </div>
          <div class="actions">
            <button class="delete" @click="removeTodo(todo)">Hapus</button>
          </div>
        </div>
        <div>
          <button class="hide" @click="hideCompleted = !hideCompleted">
            {{ hideCompleted ? 'Tampilkan Semua' : 'Sembunyikan yang Selesai' }}
          </button>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import { useKegiatanStore } from '../kegiatanstore.js';
  
  export default {
    name: 'TodoList',
    setup() {
      let id = 0
  
      const newTodo = ref('')
      const hideCompleted = ref(false)
      const kegiatanStore = useKegiatanStore()
  
      const filteredTodos = computed(() => {
        return hideCompleted.value
          ? kegiatanStore.kegiatan.filter((todo) => !todo.done)
          : kegiatanStore.kegiatan
      })
  
      function addTodo() {
        kegiatanStore.addKegiatan({ id: id++, text: newTodo.value, done: false })
        newTodo.value = ''
      }
  
      function removeTodo(todo) {
        kegiatanStore.removeKegiatan(todo)
      }
  
      return {
        newTodo,
        hideCompleted,
        filteredTodos,
        addTodo,
        removeTodo
      }
    }
  }
  </script>
  
  <style>
  .done {
    text-decoration: line-through;
  }
  </style>
  