<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="logo">
        <div class="signal-icon">
          <div class="signal-line"></div>
          <div class="signal-line"></div>
          <div class="signal-line"></div>
        </div>
        <span>线路选择</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content">
      <h1 class="main-title">智能线路</h1>
      <p class="subtitle">为您精选最优访问路径</p>

      <!-- Route Options -->
      <div class="routes">
        <div
            v-for="(route, index) in routes"
            :key="index"
            class="route-item"
            @click="selectRoute(index)"
        >
          <div class="route-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" stroke="none"/>
            </svg>
          </div>
          <div class="route-info">
            <div class="route-name">{{ route.name }}</div>
            <div class="route-performance">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#4CAF50" stroke-width="2">
                <path d="M3 12l4 4 8-8" />
              </svg>
              <span>性能优化</span>
            </div>
          </div>
          <div class="route-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#A0A0A0" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Network Visualization Background -->
    <div class="network-background">
      <div class="network-line main-line"></div>
      <div
          v-for="(node, index) in nodes"
          :key="'node-'+index"
          class="network-node"
          :style="{ left: node.x + '%', top: node.y + '%', width: node.size + 'px', height: node.size + 'px' }"
      ></div>
      <div
          v-for="(line, index) in lines"
          :key="'line-'+index"
          class="network-curve"
          :style="{
          left: line.startX + '%',
          top: line.startY + '%',
          width: line.width + '%',
          height: line.height + '%',
          transform: `rotate(${line.rotation}deg)`
        }"
      ></div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      <span>智能筛选推荐最佳访问体验</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const routes = ref([
  { name: '快速线路' },
  { name: '稳定线路' },
  { name: '备用线路' }
]);

const nodes = ref([
  { x: 68, y: 12, size: 4 },
  { x: 75, y: 22, size: 24 },
  { x: 48, y: 28, size: 5 },
  { x: 56, y: 42, size: 20 },
  { x: 25, y: 54, size: 5 },
  { x: 48, y: 70, size: 6 },
  { x: 70, y: 75, size: 5 },
  { x: 30, y: 88, size: 4 },
  { x: 60, y: 90, size: 8 },
  { x: 45, y: 95, size: 4 }
]);

const lines = ref([
  { startX: 10, startY: 10, width: 80, height: 80, rotation: 30 },
  { startX: 30, startY: 20, width: 60, height: 60, rotation: 45 },
  { startX: 20, startY: 50, width: 70, height: 70, rotation: 15 },
  { startX: 50, startY: 30, width: 50, height: 50, rotation: 60 }
]);

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
  color: #555;
  display: flex;
  flex-direction: column;
  background: url("@/assets/images/mobile/body/v12/bg.png") no-repeat center center;
  background-size: cover;
}

/* Header Styles */
.header {
  padding: 16px 20px;
  position: relative;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #6A5ACD;
}

.signal-icon {
  display: flex;
  align-items: flex-end;
  height: 18px;
  margin-right: 8px;
}

.signal-line {
  width: 3px;
  background-color: #6A5ACD;
  margin: 0 1px;
  border-radius: 1px;
}

.signal-line:nth-child(1) {
  height: 8px;
}

.signal-line:nth-child(2) {
  height: 12px;
}

.signal-line:nth-child(3) {
  height: 16px;
}

/* Content Styles */
.content {
  flex: 1;
  padding: 10px 20px;
  position: relative;
  z-index: 10;
}

.main-title {
  font-size: 28px;
  font-weight: 600;
  color: #5D4DB1;
  margin: 12px 0 8px 0;
}

.subtitle {
  font-size: 14px;
  color: #8A84C0;
  margin: 0 0 40px 0;
}

/* Route Items */
.routes {
  margin-top: 20px;
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
  position: relative;
}

.route-icon {
  width: 48px;
  height: 48px;
  background-color: #775CEB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  box-shadow: 0 4px 12px rgba(119, 92, 235, 0.3);
}

.route-info {
  flex: 1;
}

.route-name {
  font-size: 16px;
  font-weight: 500;
  color: #5D4DB1;
  margin-bottom: 4px;
}

.route-performance {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #4CAF50;
}

.route-performance svg {
  margin-right: 4px;
}

.route-arrow {
  margin-left: 16px;
  color: #BBB;
}

/* Network Background */
.network-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.network-node {
  position: absolute;
  background-color: rgba(119, 92, 235, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.network-curve {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform-origin: 0 0;
}

.main-line {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 1px;
  height: 80%;
  background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(119,92,235,0.3) 100%);
  transform: rotate(30deg);
}

/* Footer */
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  z-index: 10;
}

.info-icon {
  width: 24px;
  height: 24px;
  background-color: #775CEB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}

.footer span {
  color: #5D4DB1;
  font-size: 14px;
}
</style>