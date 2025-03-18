<script setup>
import {ref, onMounted} from "vue";
import icon1 from '@/assets/images/mobile/body/v3_task_icon1.png'
import icon2 from '@/assets/images/mobile/body/v3_task_icon2.png'
import icon3 from '@/assets/images/mobile/body/v3_task_icon3.png'
import icon4 from '@/assets/images/mobile/body/v3_task_icon4.png'

// 任务进度和倒计时
const timeLeft = ref(5);
const overallProgress = ref(0);
const taskProgress = ref([10, 5, 0, 0]); // 每个任务的初始进度
const list = [icon1, icon2, icon3, icon4]

onMounted(() => {
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      overallProgress.value += 20; // 总体进度增加
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
      <div class="flex" style="width:95%;">
        <div class="title">
          <img src="@/assets/images/mobile/body/v3_top_icon.png" alt="shield" class="icon"/>
          <span>安全扫描</span>
        </div>
        <button class="close-btn">✖</button>
      </div>
    </div>

    <img src="@/assets/images/mobile/body/v3_icon.png" alt="icon"
         style="width: 168px;height: 168px;margin-top:20px;margin-bottom: 20px"/>

    <!-- 任务列表 -->
    <div class="task-card" v-for="(task, index) in ['系统环境扫描', '网络连接检测', '恶意程序查杀', '安全策略配置']"
         :key="index">
      <img class="task-icon" :src="list[index]" alt="icon"/>
      <div class="task-content">
        <div class="flex">
          <p class="task-title">{{ task }}</p>
          <p class="task-status">进行中</p>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: `${taskProgress[index]}%` }"></div>
        </div>
      </div>
    </div>

    <!-- 总体进度 -->
    <div class="progress_box">
      <div class="flex">
        <p class="progress-text">
          <img src="@/assets/images/mobile/body/v3_icon5.png" alt="icon" style="width: 9.19px;height: 10.5px;"/>
          检测进度
        </p>
        <p class="progress-text">{{ overallProgress }}%</p>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${overallProgress}%` }"></div>
      </div>
    </div>

    <!-- 倒计时 -->
    <p class="waiting-text">正在进行全面安全检测...</p>
    <p class="countdown">预计剩余时间：{{ timeLeft }} 秒</p>

    <!-- 底部支持信息 -->
    <p class="footer">
      <img src="@/assets/images/mobile/body/v3_bottom_icon.png" alt="icon" style="width: 9.19px;height: 10.5px;"/>
      DefendPro 提供技术支持
    </p>
  </div>
</template>

<style scoped>
/* 全局布局 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: url("@/assets/images/mobile/body/v3_bg.png") no-repeat center center;
  background-size: cover;
  font-family: Arial, sans-serif;
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
  justify-content: center;
}

.title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 20px;
  height: 20px;
}

.close-btn {
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
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


.task-content {
  flex: 1;
}

.task-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.progress_box {
  width: 320px;
  padding: 14px 21px;
  gap: 0px 10px;
  flex-wrap: wrap;
  align-content: flex-start;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(239, 246, 255, 0.5);

  backdrop-filter: blur(4px);
}

.task-status {
  font-size: 14px;
  color: #3178f6;
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
}

/* 底部 */
.footer {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 20px;
}
</style>
