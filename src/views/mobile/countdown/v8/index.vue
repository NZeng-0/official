<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const countdown = ref(6);
const isRedirecting = ref(false);

// Circle progress animation
const circumference = 2 * Math.PI * 50; // 50 is the radius of the circle
const dashOffset = ref(0);

let timer;

const startCountdown = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
      // Update the circle progress
      dashOffset.value = (1 - countdown.value / 6) * circumference;
    } else {
      clearInterval(timer);
      isRedirecting.value = true;
      // Redirect logic would go here
      // window.location.href = "https://example.com";
    }
  }, 1000);
};

const skipWait = () => {
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
    <div class="countdown-container">
      <svg class="countdown-circle" width="120" height="120" viewBox="0 0 120 120">
        <!-- Base circle -->
        <circle
            cx="60"
            cy="60"
            r="50"
            fill="white"
            stroke="#e0e0e0"
            stroke-width="2"
        />

        <!-- Progress circle -->
        <circle
            cx="60"
            cy="60"
            r="50"
            fill="transparent"
            stroke="url(#gradientStroke)"
            stroke-width="8"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
            transform="rotate(-90 60 60)"
        />

        <!-- Gradient definition -->
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#73BEDF" />
            <stop offset="100%" stop-color="#FCDCE9" />
          </linearGradient>
        </defs>
      </svg>

      <div class="countdown-number">
        <span class="number">{{ countdown }}</span>
        <span class="unit">秒</span>
      </div>
    </div>

    <div class="redirect-text">
      即将为您跳转至官方网站
    </div>

    <button class="redirect-button" @click="skipWait">
      <span class="arrow-icon">➔</span>
      立即进入
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.countdown-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
}

.countdown-circle {
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
}

.countdown-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.number {
  font-size: 40px;
  font-weight: 500;
  color: #3182f6;
}

.unit {
  font-size: 24px;
  color: #3182f6;
}

.redirect-text {
  font-size: 18px;
  color: #333;
  margin-bottom: 24px;
}

.redirect-button {
  background-color: #3182f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 40px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
}

.redirect-button:hover {
  background-color: #2970d9;
}

.arrow-icon {
  font-size: 18px;
}
</style>