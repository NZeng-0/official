<template>
  <div class="title">选择网络线路</div>

  <div class="container">
    <!-- 标题 -->

    <!-- 网络状态卡片 -->
    <div class="network-status-card">
      <div class="network-info">
        <img class="network-icon" src="@/assets/images/mobile/body/v10/wifi.png" alt="icon">

        <span class="network-text">当前网络状态良好</span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: networkQuality + '%' }"></div>
      </div>
    </div>

    <!-- 线路列表 -->
    <div class="route-list">
      <div v-for="route in routes" :key="route.id" class="route-card">
        <div class="route-left">
          <img class="route-icon" src="@/assets/images/mobile/body/v10/task_icon.png" alt="icon">
          <div class="route-info">
            <span class="route-name">{{ route.name }}</span>
            <span class="route-latency">延迟: {{ route.latency }}ms</span>
          </div>
        </div>
        <img class="arrow" src="@/assets/images/mobile/body/v10/left.png" alt="icon">
      </div>
    </div>

    <!-- 底部提示 -->
    <p class="footer-text">
      <img src="@/assets/images/mobile/body/v10/bottom.png" alt="icon" style="margin-right: 3px;width: 12.25px;height: 12.25px;">
      连接体验由网络环境决定
    </p>
  </div>
</template>

<script setup>
import {ref} from "vue";

// 模拟网络状态
const networkQuality = ref(70); // 进度条 70%

// 线路数据
const routes = ref([
  {id: 1, name: "线路一", latency: 38},
  {id: 2, name: "线路二", latency: 126},
  {id: 3, name: "线路三", latency: 186},
]);
</script>

<style scoped>
/* 容器 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px 20px 20px;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  height: 100vh;
}

/* 标题 */
.title {
  font-weight: bold;
  color: #222;
  font-size: 15.75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 50px;
}

/* 网络状态卡片 */
.network-status-card {
  width: 90%;
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-top: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.network-text {
  font-size: 12.25px;
  color: #6B7280;
}

.network-info {
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 16px;
  color: #555;
}

.network-icon {
  width: 17.5px;
  height: 14px;
  font-size: 20px;
  margin-right: 8px;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 6px;
  background: #e0e3eb;
  border-radius: 3px;
  margin-top: 10px;
  position: relative;
}

.progress {
  height: 100%;
  background: #28a745;
  border-radius: 3px;
}

/* 线路列表 */
.route-list {
  width: 100%;
  margin-top: 20px;
}

/* 线路卡片 */
.route-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s;
}

.route-card:hover {
  background: #f0f4f8;
}

/* 左侧信息 */
.route-left {
  display: flex;
  align-items: center;
}

/* 线路图标 */
.route-icon {
  width: 40px;
  height: 40px;
  background: #e3ecff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 10px;
}

/* 线路信息 */
.route-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* 线路名称 */
.route-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

/* 延迟 */
.route-latency {
  font-size: 14px;
  color: #666;
  margin-top: 3px;
}

/* 箭头 */
.arrow {
  width: 8.75px;
  height: 14px;
  font-size: 18px;
  color: #999;
}

/* 底部提示 */
.footer-text {
  font-size: 12px;
  color: #aaa;
  margin-top: 30px;
  display: flex;
  align-items: center;
}
</style>
