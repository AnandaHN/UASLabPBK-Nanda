<template>
  <div class="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/widget">Widgets</router-link>
      <router-link to="/kegiatan">To Do List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #eee;
}

nav a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}
</style>