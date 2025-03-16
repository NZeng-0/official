<script setup>
import { ref, onMounted } from 'vue';

const countdown = ref(6);
const router = {
  push: (path) => console.log('Navigate to:', path)
};

const startCountdown = () => {
  const timer = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(timer);
      enterSite();
    }
  }, 1000);
};

const enterSite = () => {
  // router.push('/');

};

onMounted(() => {
  startCountdown();
});
</script>

<template>
  <div class="splash-container">
    <div class="splash-card">
      <div class="logo">
        <img src="@/assets/images/mobile/countdown/v9.png" style="width: 112px;height: 112px;" alt="Logo" />
      </div>
    </div>

    <div class="countdown">{{ countdown }}</div>

    <div class="auto-text">秒后自动进入官网</div>

    <button class="enter-button" @click="enterSite">
      立即进入 <span class="arrow">→</span>
    </button>

    <div class="slogan">开启智慧生活，连接美好未来</div>

    <div class="copyright">© 2024 智慧生活. 版权所有</div>
  </div>
</template>

<style scoped>
.splash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(180deg, #EBF5FF 0%, #FFFFFF 100%);
  padding: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.countdown {
  font-size: 60px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.auto-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 32px;
}

.enter-button {
  background-color: #2878ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 40px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  transition: background-color 0.3s;
}

.enter-button:hover {
  background-color: #1e68e6;
}

.arrow {
  margin-left: 8px;
}

.slogan {
  font-size: 16px;
  color: #666;
  margin-bottom: 60px;
}

.copyright {
  font-size: 12px;
  color: #999;
  position: absolute;
  bottom: 20px;
}
</style>