<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const countdown = ref(6);
const progressWidth = ref(0);
const maxWidth = 160; // Width of the progress bar

let timer;

const startCountdown = () => {
  const initialTime = 6;
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
      // Calculate progress width based on remaining time
      progressWidth.value = ((initialTime - countdown.value) / initialTime) * maxWidth;
    } else {
      clearInterval(timer);
      // Redirect logic would go here
      // window.location.href = "https://example.com";
    }
  }, 1000);
};

const skipWait = () => {
  clearInterval(timer);
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
    <div class="background"></div>
    <div class="content">
      <!-- Logo container -->
      <div class="logo-container">
        <div class="logo-bg"></div>
        <div class="logo-box">
          <!-- Star logo -->
          <img src="@/assets/images/mobile/countdown/v5_icon.png" alt="icon" style="width: 98px;height: 98px;">
        </div>
      </div>

      <!-- Countdown section -->
      <div class="countdown-section">
        <div class="countdown-number">{{ countdown }}</div>
        <div class="countdown-text">即将进入精彩世界</div>

        <!-- Progress bar -->
        <div class="progress-container">
          <div class="progress-bar" :style="{ width: progressWidth + 'px' }"></div>
        </div>
      </div>

      <!-- Action button -->
      <button class="action-button" @click="skipWait">
        立即体验
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: url("@/assets/images/mobile/countdown/v5.png") no-repeat center center;
  background-size: cover;
  z-index: -1;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 1;
}

/* Logo styling */
.logo-container {
  position: relative;
  margin-bottom: 120px;
}

.logo-bg {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-box {
  position: relative;
  width: 140px;
  height: 140px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

/* Countdown section styling */
.countdown-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.countdown-number {
  font-size: 80px;
  font-weight: 300;
  color: white;
  margin-bottom: 8px;
}

.countdown-text {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
}

/* Progress bar styling */
.progress-container {
  width: 150px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #FFC107; /* Gold color */
  transition: width 1s linear;
}

/* Button styling */
.action-button {
  background-color: #FFC107;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 12px 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.action-button:hover {
  background-color: #FFD54F;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.action-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>