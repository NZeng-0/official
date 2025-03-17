<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const countdown = ref(6);
const progress = ref(0);
const isRedirecting = ref(false);

let timer;

const startCountdown = () => {
  const totalTime = 6;
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
      // Update progress bar (from 0 to 100%)
      progress.value = ((totalTime - countdown.value) / totalTime) * 100;
    } else {
      clearInterval(timer);
      isRedirecting.value = true;
      // Redirect logic would go here
      // window.location.href = "https://example.com";
    }
  }, 1000);
};

const enterNow = () => {
  clearInterval(timer);
  isRedirecting.value = true;
  // Redirect logic would go here
  // window.location.href = "https://example.com";
};

onMounted(() => {
  startCountdown();
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="container">
    <!-- Background gradients -->
    <div class="background"></div>

    <!-- Logo container -->
    <div class="logo-container">
      <div class="logo">
        <img src="@/assets/images/mobile/countdown/v6_icon.png" alt="icon" style="width: 84px;height: 84px;"/>
      </div>
    </div>

    <!-- Countdown container -->
    <div class="countdown-container">
      <div class="countdown-value">
        <span class="number">{{ countdown }}</span>
      </div>
      <div class="countdown-text">秒后自动进入官网</div>

      <!-- Progress bar -->
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>

    <!-- Enter now button -->
    <button class="enter-button" @click="enterNow">
      立即进入
    </button>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Background styling */
.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: url("@/assets/images/mobile/countdown/v6.png") no-repeat center center;
  background-size: cover;
  z-index: -1;
}

/* Logo styling */
.logo-container {
  width: 112px;
  height: 112px;
  background-color: #f5f5f5;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 112px;
  height: 112px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Countdown container styling */
.countdown-container {
  width: 80%;
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  margin-bottom: 24px;
}

.countdown-value {
  margin-bottom: 8px;
}

.number {
  font-size: 48px;
  font-weight: 500;
  color: #3f51b5;
}

.countdown-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;
}

.progress-bar-container {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #3f51b5, #9c27b0);
  border-radius: 4px;
  transition: width 1s linear;
}

/* Button styling */
.enter-button {
  background: linear-gradient(to right, #3f51b5, #7e57c2);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(63, 81, 181, 0.3);
  transition: all 0.3s;
}

.enter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(63, 81, 181, 0.4);
}

.enter-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(63, 81, 181, 0.3);
}
</style>