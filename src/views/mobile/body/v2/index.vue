<script setup>
import {ref, onMounted} from "vue";
import icon1 from '@/assets/images/mobile/body/v2_task_icon1.png'
import icon2 from '@/assets/images/mobile/body/v2_task_icon2.png'
import icon3 from '@/assets/images/mobile/body/v2_task_icon3.png'
import icon4 from '@/assets/images/mobile/body/v2_task_icon4.png'

// 倒计时和进度
const timeLeft = ref(5);
const progress = ref(0);
const taskProgress = ref([10, 5, 0, 0]); // 每个检测项的进度
const list = [icon1, icon2, icon3, icon4]

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      progress.value += 20; // 总体进度增加
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
    <h2 class="title">智能安全检测系统</h2>
    <p class="subtitle">为您的访问保驾护航</p>

    <div class="card" v-for="(task, index) in ['网络环境检测', '设备安全检测', '访问权限验证', '安全策略配置']"
         :key="index">
      <img class="icon" :src="list[index]" alt="icon"/>
      <div class="content">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <p class="task-title">{{ task }}</p>
          <p class="task-status">检测中</p>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: `${taskProgress[index]}%` }"></div>
        </div>
      </div>
    </div>

    <div class="progress_box">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <p class="progress-text">总体进度</p>
        <p class="progress-text">{{ progress }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>

    <p class="waiting-text">正在进行安全检测，请稍候...</p>
    <p class="countdown">预计剩余时间：{{ timeLeft }} 秒</p>

    <p class="footer">
      <img src="@/assets/images/mobile/body/v2_bottom_icon.png" alt="icon" style="width: 9.19px;height: 10.5px;"/>
      安全防护由 Shield+ 提供技术支持
    </p>
  </div>
</template>

<style scoped>
/* 背景样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("@/assets/images/mobile/body/v2_bg.png") no-repeat center center;
  background-size: cover;
  color: #333;
  font-family: Arial, sans-serif;
}

/* 标题 */
.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

/* 检测项卡片 */
.card {
  display: flex;
  align-items: center;
  background: white;
  width: 320px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.progress_box {
  width: 320px;
  padding-left: 12px;
  padding-right: 12px;
}

.content {
  flex: 1;
}

.task-title {
  font-size: 12.25px;
  font-weight: bold;
  margin: 0;
}

.task-status {
  margin: 0;
  font-size: 10.5px;
  color: #a855f7;
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
  background: #a855f7;
  transition: width 1s ease-in-out;
}

/* 总体进度 */
.progress-text {
  font-size: 14px;
  margin: 0;
}

.waiting-text {
  font-size: 14px;
  margin-top: 8px;
  color: #555;
}

.countdown {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* 底部文本 */
.footer {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
}
</style>
