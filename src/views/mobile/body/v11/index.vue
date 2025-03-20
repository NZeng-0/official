<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1E88E5" stroke-width="2">
          <path d="M12 12L8 8M12 12L16 8M12 12L8 16M12 12L16 16" />
          <circle cx="12" cy="12" r="8" />
        </svg>
        <span>线路选择</span>
      </div>
    </div>

    <div class="content">
      <div class="title-section">
        <h1>选择访问线路</h1>
        <p>请选择一条最适合您的访问线路</p>
      </div>

      <div class="routes">
        <div
            v-for="(route, index) in routes"
            :key="index"
            class="route-item"
            @click="selectRoute(index)"
        >
          <img class="route-icon" src="@/assets/images/mobile/body/v10/task_icon.png" alt="icon">
          <div class="route-info">
            <div class="route-name">{{ route.name }}</div>
            <div class="route-signal">
              <div class="signal-bars">
                <div class="bar" v-for="i in 3" :key="i" :class="{ active: i <= route.signalStrength }"></div>
              </div>
              <span>信号稳定</span>
            </div>
          </div>
          <div class="route-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#A0A0A0" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div class="footer-text">
        <p>选择合适的线路以获得最佳访问体验</p>
      </div>
    </div>

    <!-- Network visualization overlay -->
    <div class="network-visualization">
      <div class="node" v-for="(node, index) in nodes" :key="index" :style="{ left: node.x + '%', top: node.y + '%' }"></div>
      <div class="connection" v-for="(conn, index) in connections" :key="index"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
  { name: '线路一', signalStrength: 3 },
  { name: '线路二', signalStrength: 3 },
  { name: '线路三', signalStrength: 3 }
]);

const nodes = ref([
  { x: 58, y: 25 },
  { x: 32, y: 35 },
  { x: 67, y: 42 },
  { x: 58, y: 70 },
  { x: 22, y: 80 }
]);

const connections = ref([]);

const selectRoute = (index) => {
  console.log(`Selected route: ${routes.value[index].name}`);
  // Add your route selection logic here
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  overflow: hidden;
  background: url("@/assets/images/mobile/body/v11/bg.png") no-repeat center center;
  background-size: cover;
}

.header {
  position: relative;
  padding: 16px;
  z-index: 2;
}

.logo {
  display: flex;
  align-items: center;
  color: #1E88E5;
  font-size: 18px;
  font-weight: 500;
}

.logo svg {
  margin-right: 8px;
}

.content {
  position: relative;
  padding: 0 20px;
  z-index: 2;
}

.title-section {
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
}

.title-section h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 500;
}

.title-section p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.routes {
  margin-top: 32px;
}

.route-item {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.route-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.route-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.route-info {
  flex: 1;
}

.route-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
}

.route-signal {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #52c41a;
}

.signal-bars {
  display: flex;
  margin-right: 6px;
}

.bar {
  width: 3px;
  height: 8px;
  margin-right: 2px;
  background-color: #e0e0e0;
  border-radius: 1px;
}

.bar.active {
  background-color: #52c41a;
}

.route-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-text {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

.network-visualization {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.node {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}

.connection {
  position: absolute;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
  height: 1px;
  transform-origin: 0 0;
}

@media screen and (max-width: 375px) {
  .title-section {
    margin-top: 40px;
    margin-bottom: 30px;
  }

  .route-item {
    padding: 16px;
  }

  .route-icon {
    width: 36px;
    height: 36px;
  }
}
</style>