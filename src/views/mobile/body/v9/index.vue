<template>
  <div class="container">
    <!-- 标题 -->
    <div class="title">选择访问线路</div>

    <!-- 描述文字 -->
    <p class="subtitle">根据您的网络环境选择最优线路</p>

    <!-- 线路列表 -->
    <div class="route-list">
      <div v-for="route in routes" :key="route.id" class="route-card">
        <div class="route-info">
          <img class="icon" src="@/assets/images/mobile/body/v9/icon.png" alt="icon"/>
          <span class="route-name">{{ route.name }}</span>
          <img class="arrow" src="@/assets/images/mobile/body/v9/left.png" alt="icon"/>
        </div>
      </div>
    </div>

    <!-- 底部提示 -->
    <p class="footer-text">连接体验由网络环境决定</p>
  </div>
</template>

<script setup>
import {ref} from "vue";

const routes = ref([
  {id: 1, name: "线路一"},
  {id: 2, name: "线路二"},
  {id: 3, name: "线路三"},
]);
</script>

<style scoped>
/* 布局样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* 标题 */
.title {
  font-size: 21px;
  color: #222;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 10px;
}

/* 副标题 */
.subtitle {
  font-size: 12.25px;
  color: #666;
  margin-top: 8px;
}

/* 线路列表 */
.route-list {
  width: 90%;
  margin-top: 20px;
}

/* 单个线路卡片 */
.route-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fc;
  border: 1px solid #e0e3eb;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.route-card:hover {
  background: #eef2f8;
}

/* 线路信息 */
.route-info {
  display: flex;
  align-items: center;
}

/* 线路图标 */
.icon {
  width: 14px;
  height: 14px;
}

/* 线路名称 */
.route-name {
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-left: 10px;
}

/* 箭头 */
.arrow {
  width: 8.75px;
  height: 14px;
  color: #999;
  margin-left: 10px;
}

/* 底部文字 */
.footer-text {
  font-size: 12px;
  color: #aaa;
  margin-top: 40px;
}
</style>
