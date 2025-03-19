<template>
  <div class="app-container">
    <!-- Header -->
    <header class="app-header">
      <div class="app-logo">
        <img class="logo-icon" src="@/assets/images/mobile/body/v5/top_icon.png" alt="icon">
        <h1>DefendPro 风险诊断</h1>
      </div>
      <div class="menu-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>

    <!-- Score Card -->
    <div class="score-card">
      <div class="score-container">
        <h1 class="score-value">{{ scorePercentage }}%</h1>
        <p class="score-label">系统安全评分</p>
        <div class="progress-bar" style="margin-top: 14px">
          <div class="progress" :style="{ width: scorePercentage + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Security Check Items -->
    <div class="security-items">
      <!-- Smart Anti-virus -->
      <div class="security-item">
        <img class="item-icon green-bg" src="@/assets/images/mobile/body/v5/task1.png" alt="icon">

        <div class="item-content">
          <div class="flex">
            <div class="item-title">智能杀毒引擎</div>
            <div class="item-status">{{ scanning ? '检测中' : '已完成' }}</div>
          </div>
          <div class="item-progress">
            <div class="progress-bar">
              <div class="progress" :class="{ 'progress-to-100': scanning }" style="--duration: 8s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- System Vulnerability Check -->
      <div class="security-item">
        <img class="item-icon green-bg" src="@/assets/images/mobile/body/v5/task2.png" alt="icon">

        <div class="item-content">
          <div class="flex">
            <div class="item-title">系统漏洞检测</div>
            <div class="item-status">{{ scanning ? '检测中' : '已完成' }}</div>
          </div>
          <div class="item-progress">
            <div class="progress-bar">
              <div class="progress" :class="{ 'progress-to-100': scanning }" style="--duration: 9.5s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Malware Scan -->
      <div class="security-item">
        <img class="item-icon green-bg" src="@/assets/images/mobile/body/v5/task3.png" alt="icon">

        <div class="item-content">
          <div class="flex">
            <div class="item-title">恶意软件扫描</div>
            <div class="item-status">{{ scanning ? '检测中' : '已完成' }}</div>
          </div>

          <div class="item-progress">
            <div class="progress-bar">
              <div class="progress" :class="{ 'progress-to-100': scanning }" style="--duration: 7.2s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Privacy Data Protection -->
      <div class="security-item">
        <img class="item-icon green-bg" src="@/assets/images/mobile/body/v5/task4.png" alt="icon">

        <div class="item-content">
          <div class="flex">
            <div class="item-title">隐私数据保护</div>
            <div class="item-status">{{ scanning ? '检测中' : '已完成' }}</div>
          </div>
          <div class="item-progress">
            <div class="progress-bar">
              <div class="progress bg-top" :class="{ 'progress-to-100': scanning }" style="--duration: 8.8s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Network Security Protection -->
      <div class="security-item">
        <img class="item-icon green-bg" src="@/assets/images/mobile/body/v5/task5.png" alt="icon">

        <div class="item-content">
          <div class="flex">
            <div class="item-title">网络安全防护</div>
            <div class="item-status">{{ scanning ? '检测中' : '已完成' }}</div>
          </div>
          <div class="item-progress">
            <div class="progress-bar">
              <div class="progress" :class="{ 'progress-to-100': scanning }" style="--duration: 10s"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Card -->
    <div class="status-card">
      <img class="item-icon" src="@/assets/images/mobile/body/v5/task6.png" alt="icon">

      <div class="status-content">
        <div class="status-title">{{ scanning ? '正在进行安全检测' : '安全检测完成' }}</div>
        <div class="status-subtitle" v-if="scanning">预计剩余时间: {{ remainingTime }} 秒</div>
        <div class="status-subtitle" v-else>您的设备安全评分为 {{ scorePercentage }}%</div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav">
      <div class="nav-item active">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M10,20v-6h4v6h5v-8h3L12,3L2,12h3v8H10z" fill="#00BFA5"/>
        </svg>
        <span>主页</span>
      </div>
      <div class="nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
              d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H7v-7h2V17z M13,17h-2V7h2V17 z M17,17h-2v-4h2V17z"
              fill="#9E9E9E"/>
        </svg>
        <span>报告</span>
      </div>
      <div class="nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
              d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M12,11h7c-0.53,4.12-3.28,7.79-7,8.94V11H5V6.3 l7-3.11v7.8z"
              fill="#9E9E9E"/>
        </svg>
        <span>防护</span>
      </div>
      <div class="nav-item">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
              d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v2h16v-2 C20,15.34,14.67,14,12,14z"
              fill="#9E9E9E"/>
        </svg>
        <span>我的</span>
      </div>
    </nav>
  </div>
</template>

<script>
import {ref, onMounted, onBeforeUnmount} from 'vue';

export default {
  name: 'DefendProApp',
  setup() {
    // 定义响应式数据
    const scorePercentage = ref(0); // 分数百分比
    const remainingTime = ref(10); // 剩余时间
    const scanning = ref(true); // 是否正在扫描
    let timerInterval = null; // 定时器

    // 组件挂载时启动定时器
    onMounted(() => {
      timerInterval = setInterval(() => {
        if (remainingTime.value > 0) {
          remainingTime.value--; // 剩余时间减 1
        } else {
          // 时间结束时，停止扫描并显示最终分数
          scanning.value = false;
          scorePercentage.value = 100;
          clearInterval(timerInterval); // 清除定时器
        }
      }, 1000);
    });

    // 组件卸载前清除定时器
    onBeforeUnmount(() => {
      clearInterval(timerInterval);
    });

    // 返回响应式数据，供模板使用
    return {
      scorePercentage,
      remainingTime,
      scanning,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bg-top {
  background: rgba(255, 255, 255, 0.2);
}

.app-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
}

/* Header Styles */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00BFA5;
  padding: 16px;
  color: white;
}

.app-logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.shield-icon {
  width: 24px;
  height: 24px;
  fill: #00BFA5;
}

.app-header h1 {
  font-size: 18px;
  font-weight: 500;
}

.menu-dots {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
}

.menu-dots span {
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  margin: 1px 0;
}

/* Score Card Styles */
.score-card {
  padding: 20px 16px;
  color: white;
  border-radius: 0 0 16px 16px;
  position: relative;
  z-index: 1;
}

.score-container {
  border-radius: 14px;
  padding: 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(135deg, #10B981 3%, #14B8A6 99%);
}

.score-value {
  font-size: 26.25px;
  font-weight: 500;
  margin-bottom: 8px;
}

.score-label {
  font-size: 16px;
  font-weight: 400;
}

.progress-bar {
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: white;
  border-radius: 3px;
  width: 0;
  transition: width 0.3s ease;
}

/* Security Items Styles */
.security-items {
  padding: 0 16px;
}

.security-item {
  background-color: white;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
}

.item-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.green-bg {
  background-color: rgba(0, 191, 165, 0.1);
}

.item-content {
  flex: 1;
}

.item-title {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
}

.item-content .progress-bar {
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
}

.item-content .progress {
  background-color: #00BFA5;
}

/* Non-repeating Progress Bar Animation */
.progress-to-100 {
  animation-name: progressTo100;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-duration: var(--duration);
  width: 0;
}

@keyframes progressTo100 {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.item-status {
  color: #9E9E9E;
  font-size: 14px;
  margin-bottom: 12px;
}

/* Status Card Styles */
.status-card {
  margin: 16px;
  padding: 16px;
  background-color: #ECFDF5;
  border-radius: 12px;
  display: flex;
  align-items: center;
}

.status-icon {
  margin-right: 16px;
}

/* Pulse animation for the status icon */
.pulse-animation {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.status-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
}

.status-subtitle {
  font-size: 14px;
  color: #757575;
}

/* Bottom Navigation Styles */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  width: 25%;
}

.nav-item span {
  font-size: 12px;
  margin-top: 4px;
  color: #9E9E9E;
}

.nav-item.active span {
  color: #00BFA5;
}

.nav-item svg {
  width: 24px;
  height: 24px;
}
</style>