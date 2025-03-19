<template>
  <div class="container">
    <!-- 标题 -->
    <div class="title">线路选择</div>

    <!-- 顶部图片 -->
    <img src="@/assets/images/mobile/body/v8/top.png" alt="Network" class="banner" />

    <!-- 说明文字 -->
    <p class="description">
      为了给您提供更好的访问体验，请选择最适合您的访问线路
    </p>

    <!-- 线路列表 -->
    <div class="route-list">
      <div v-for="route in routes" :key="route.id" class="route-card">
        <div class="route-info">
          <img src="@/assets/images/mobile/body/v8/route.png" alt="Route Icon" class="route-icon" />
          <div>
            <p class="route-name">{{ route.name }}</p>
            <p class="route-latency">延迟: {{ route.latency }}ms</p>
          </div>
        </div>
        <div class="route-status">
          <span class="status-text">{{ route.status }}</span>
          <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 进入官网按钮 -->
    <button class="enter-btn">进入官网</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const routes = ref([
  { id: 1, name: "线路一", latency: 20, status: "推荐" },
  { id: 2, name: "线路二", latency: 35, status: "良好" },
  { id: 3, name: "线路三", latency: 50, status: "一般" },
]);
</script>

<style scoped>
/* 页面布局 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #F9FAFB;
}

/* 标题 */
.title {
  font-size: 15.75px;
  color: #333;
  height: 49px;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 顶部图片 */
.banner {
  width: 90%;
  border-radius: 10px;
  margin-top: 15px;
}

/* 说明文字 */
.description {
  color: #666;
  font-size: 12.25px;
  text-align: center;
  margin: 15px 20px;
}

/* 线路列表 */
.route-list {
  width: 90%;
  margin-top: 10px;
}

/* 单个线路卡片 */
.route-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #4a90e2;
  border-radius: 10px;
  padding: 0 12px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.route-card:hover {
  background: rgba(74, 144, 226, 0.1);
}

/* 线路信息 */
.route-info {
  display: flex;
  align-items: center;
}

.route-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.route-name {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-bottom: 0;
}

.route-latency {
  font-size: 12px;
  color: #666;
}

/* 线路状态 */
.route-status {
  display: flex;
  align-items: center;
}

.status-text {
  font-size: 14px;
  color: #4a90e2;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  color: #4a90e2;
  margin-left: 5px;
}

/* 进入官网按钮 */
.enter-btn {
  width: 90%;
  background: #4a90e2;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.enter-btn:hover {
  background: #357ab7;
}
</style>
