import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './main.css';
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);


app.use(router).use(pinia).mount('#app');