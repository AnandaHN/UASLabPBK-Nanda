<template>
    <div class="widget">
      <h2 class="widget-title">Silahkan Pilih Widget yang kamu inginkan!</h2>
      <div class="button-container">
        <button @click="showLocation">Location</button>
        <button @click="showStopwatch">Stopwatch</button>
        <button @click="showWeather">Weather</button>
        <button @click="showGame">Tic Tac Toe</button>
        <button @click="showJam">Jam</button>
      </div>
      <div class="widget-container">
        <LocationWidget v-if="isLocationVisible" />
        <StopwatchWidget v-if="isStopwatchVisible" />
        <WeatherWidget v-if="isWeatherVisible" />
        <GameWidget v-if="isGameVisible" />
        <JamWidget v-if="isJamVisible" />
      </div>
    </div>
  </template>
  
  <script>
  import LocationWidget from '../components/LocationWidget.vue';
  import StopwatchWidget from '../components/StopwatchWidget.vue';
  import WeatherWidget from '../components/WeatherWidget.vue';
  import GameWidget from '../components/GameWidget.vue';
  import JamWidget from '../components/JamWidget.vue';
  
  export default {
    data() {
      return {
        isLocationVisible: false,
        isStopwatchVisible: false,
        isWeatherVisible: false,
        isGameVisible: false,
        isJamVisible: false,
      };
    },
    methods: {
      showLocation() {
        this.isLocationVisible = true;
        this.isStopwatchVisible = false;
        this.isWeatherVisible = false;
        this.isGameVisible = false;
        this.isJamVisible = false;
      },
      showStopwatch() {
        this.isLocationVisible = false;
        this.isStopwatchVisible = true;
        this.isWeatherVisible = false;
        this.isGameVisible = false;
        this.isJamVisible = false;
      },
      showWeather() {
        this.isLocationVisible = false;
        this.isStopwatchVisible = false;
        this.isWeatherVisible = true;
        this.isGameVisible = false;
        this.isJamVisible = false;
      },
      showGame() {
        this.isLocationVisible = false;
        this.isStopwatchVisible = false;
        this.isWeatherVisible = false;
        this.isGameVisible = true;
        this.isJamVisible = false;
      },
      showJam() {
        this.isLocationVisible = false;
        this.isStopwatchVisible = false;
        this.isWeatherVisible = false;
        this.isGameVisible = false;
        this.isJamVisible = true;
      },
    },
    components: {
      LocationWidget,
      StopwatchWidget,
      WeatherWidget,
      GameWidget,
      JamWidget,
    },
  };
  </script>
  
  <style scoped>
  .widget {
    margin-top: 20px;
    text-align: center;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .button-container button {
    margin: 0 5px;
  }
  
  .widget-title {
    font-family: "Helvetica", Arial, sans-serif;
    font-size: 20px;
  }
  
  .widget-description {
    font-family: "Helvetica", Arial, sans-serif;
    font-size: 10px;
  }
  
  .widget-container {
    margin-top: 10px;
  }
  </style>
  