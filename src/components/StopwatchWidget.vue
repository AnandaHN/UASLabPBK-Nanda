//stopwatch
<template>
  <div class="stopwatch-container">
    <div class="buttons">
      <button class="start-button" @click="startStopwatch" :disabled="isRunning">
        <span v-if="!isRunning">Start</span>
        <span v-else>Resume</span>
      </button>
      <button class="stop-button" @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button class="reset-button" @click="resetStopwatch">Reset</button>
    </div>
    <div class="stopwatch">
      <h1>Stopwatch</h1>
      <div class="time" :class="{ 'countdown': isRunning && elapsedTime > 0 }">
        {{ formatTime(elapsedTime) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stopwatch',
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
      timerInterval: null,
    };
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      this.startTime = null;
      this.elapsedTime = 0;
      clearInterval(this.timerInterval);
    },
    formatTime(milliseconds) {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const centiseconds = Math.floor((milliseconds % 1000) / 10);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds
        .toString()
        .padStart(2, '0')}`;
    },
  },
};
</script>

<style>
.stopwatch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

}

.buttons {
  margin-top: 150px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;
}

.start-button {
  background-color: rgb(244, 80, 80);
  color: #fff;
}

.start-button:disabled {
  background-color: rgb(243, 125, 125);
  cursor: not-allowed;
}

.start-button:hover:not(:disabled) {
  background-color: rgb(244, 80, 80);
}

.stop-button {
  background-color: rgb(49, 161, 24);
  color: #fff;
}

.stop-button:disabled {
  background-color: rgb(136, 219, 118);
  cursor: not-allowed;
}

.stop-button:hover:not(:disabled) {
  background-color: rgb(42, 206, 5);
}

.reset-button {
  background-color: rgb(233, 154, 16);
  color: #fff;
}

.reset-button:hover {
  background-color: rgb(222, 179, 104);
}

.stopwatch {
  border: 2px solid black;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin-top: 10px;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.time {
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}

.countdown {
  animation: countdownAnimation 1s infinite alternate;
  color: #ef0018;
}

@keyframes countdownAnimation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>