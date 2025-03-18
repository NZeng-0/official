<script setup>
import {ref, onMounted} from "vue";

const timeLeft = ref(5);

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
</script>

<template>
  <div class="container">
    <!-- 顶部盾牌图标 -->
    <img class="shield-icon" src="@/assets/images/mobile/body/v1_icon.png" alt="Shield"/>

    <!-- 中心卡片 -->
    <div class="card">
        <img class="lock-icon" src="@/assets/images/mobile/body/v1_icon_2.png" alt="Lock"/>
      <h2 class="title">安全检测中</h2>
      <p class="subtitle">正在为您进行安全环境检测</p>

      <!-- 进度条 -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${(5 - timeLeft) * 20}%` }"></div>
      </div>
      <p class="time-left">预计剩余时间：{{ timeLeft }} 秒</p>
    </div>

    <!-- 底部提示 -->
    <p class="footer-text">检测完成后将自动进入官网</p>
    <p class="footer-text" style="margin-top: 0">请稍后</p>
  </div>
</template>

<style scoped>
/* 全屏容器 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("@/assets/images/mobile/body/v1_bg.png") no-repeat center center;
  background-size: cover;
}

/* 顶部盾牌图标 */
.shield-icon {
  width: 150px;
  height: 150px;
}

/* 中心卡片 */
.card {
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  border-radius: 20px;
  text-align: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* 锁图标 */
.lock-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 10px;
}

/* 标题 */
.title {
  font-size: 18px;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 5px;
}

/* 副标题 */
.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #2563eb;
  transition: width 1s ease-in-out;
}

/* 倒计时 */
.time-left {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

/* 底部文字 */
.footer-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
}
</style>
