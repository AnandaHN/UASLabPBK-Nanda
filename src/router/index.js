import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Kegiatan from '../components/Kegiatan.vue';
import Widget from '../components/Widget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import GameWidget from '../components/GameWidget.vue';
import Jam from '../components/JamWidget.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kegiatan',
    name: 'Kegiatan',
    component: Kegiatan
  },
  {
    path: '/location',
    name: 'Location',
    component: LocationWidget
  },
  {
    path: '/widget',
    name: 'Widget',
    component: Widget
  },
  {
    path: '/stopwatch',
    component: StopwatchWidget
  },
  {
    path: '/weather',
    component: WeatherWidget
  },
  {
    path: '/game',
    component: GameWidget
  },
  {
    path: '/jam',
    component: Jam
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
