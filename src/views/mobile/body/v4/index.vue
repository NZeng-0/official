<script setup>
import {ref, onMounted} from "vue";
import icon1 from '@/assets/images/mobile/body/v4_task_icon1.png'
import icon2 from '@/assets/images/mobile/body/v4_task_icon2.png'
import icon3 from '@/assets/images/mobile/body/v4_task_icon3.png'
import icon4 from '@/assets/images/mobile/body/v4_task_icon4.png'
import icon5 from '@/assets/images/mobile/body/v4_task_icon5.png'

// 倒计时 & 进度
const timeLeft = ref(10);
const overallProgress = ref(0);
const taskProgress = ref([10, 0, 0, 0, 0]); // 每个任务的初始进度
const list = [icon1, icon2, icon3, icon4, icon5]

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      overallProgress.value = overallProgress.value + 20 >= 100
          ? 100 : overallProgress.value + 20;
      taskProgress.value = taskProgress.value.map((val) =>
          val + 20 > 100 ? 100 : val + 20
      );
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
</script>

<template>
  <div class="container">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="title">
        <img src="@/assets/images/mobile/body/v4_top_icon.png" alt="shield" class="icon"/>
        <span>系统防护</span>
      </div>
      <button class="close-btn">✖</button>
    </div>

    <!-- 扫描动画 -->
    <div class="scan-animation"></div>

    <!-- 任务列表 -->
    <div class="task-card"
         v-for="(task, index) in ['操作系统检测', '网络防火墙', '恶意软件查杀', '系统漏洞修复', '隐私数据保护']"
         :key="index">
      <div class="task-icon">
        <img :src="list[index]" alt="icon"/>
      </div>
      <div class="task-content">
        <div class="flex">
          <p class="task-title">{{ task }}</p>
          <p class="task-status">扫描中</p>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: `${taskProgress[index]}%` }"></div>
        </div>
      </div>
    </div>

    <!-- 总体进度 -->
    <div class="overall-progress">
      <div class="progress-header">
        <p class="progress-text flex">
          <img src="@/assets/images/mobile/body/v4_bottom_icon.png" alt="progress" class="progress-icon"/>
          总体进度
        </p>
        <p class="progress-text">{{ overallProgress }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${overallProgress}%` }"></div>
      </div>
    </div>

    <!-- 倒计时 -->
    <p class="status-text">正在进行全面系统检测...</p>
    <p class="countdown">预计剩余时间：{{ timeLeft }} 秒</p>

    <!-- 底部支持信息 -->
    <p class="footer">
      <img src="@/assets/images/mobile/body/v4_icon.png" alt="icon" style="width: 17.5px;height: 17.5px;"/>
      DefendPro 安全防护
    </p>
  </div>
</template>

<style scoped>
/* 全局布局 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #eef2f6, #dce7f3);
  font-family: Arial, sans-serif;
  height: 100vh;
  padding: 0 14px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 顶部标题 */
.header {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 24px;
  height: 24px;
}

.close-btn {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

/* 扫描动画 */
.scan-animation {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6d5dfc);
  margin: 20px 0;
}

/* 任务卡片 */
.task-card {
  display: flex;
  align-items: center;
  background: white;
  width: 90%;
  max-width: 400px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
}

.task-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.task-icon img {
  width: 42px;
  height: 42px;
}

.task-content {
  flex: 1;
}

.task-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.task-status {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  text-align: right;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #3178f6;
  transition: width 1s ease-in-out;
}

/* 总体进度 */
.overall-progress {
  width: 90%;
  max-width: 400px;
  background: linear-gradient(135deg, #3B82F6 0%, #4F46E5 99%);
  box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin-top: 15px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-text {
  font-size: 14px;
  margin: 0;
}

.progress-icon {
  width: 20px;
  height: 20px;
}

/* 状态 & 倒计时 */
.status-text {
  font-size: 14px;
  margin-top: 8px;
  color: #555;
}

.countdown {
  font-size: 14px;
  color: #666;
}

/* 底部 */
.footer {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 20px;
}
</style>
