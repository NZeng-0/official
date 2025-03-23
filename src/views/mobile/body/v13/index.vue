<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="@/assets/images/mobile/body/v13/bg.png" alt="icon">
        <span class="logo-text">线路选择</span>
      </div>
    </div>

    <!-- Smart Connection Banner -->
    <div class="smart-banner">
      <div class="wifi-icon flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5669FF" stroke-width="2">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9z"/>
          <path d="M5 13l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          <path d="M9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0z"/>
        </svg>
      </div>
      <span class="smart-text">智能连接</span>
    </div>

    <!-- Main Title Section -->
    <div class="title-section">
      <h1 class="main-title">选择最优线路</h1>
      <p class="subtitle">为您精选最优访问路径</p>
    </div>

    <!-- Route Options -->
    <div class="routes-container">
      <div
          v-for="(route, index) in routes"
          :key="index"
          class="route-card"
          @click="selectRoute(index)"
      >
        <div class="route-icon-container" :class="route.iconClass">
          <component :is="route.icon" class="route-icon" />
        </div>

        <div class="route-info">
          <div class="route-name">{{ route.name }}</div>
          <div class="route-performance">
            <div class="signal-bars">
              <div class="signal-bar" v-for="i in 4" :key="i"></div>
            </div>
            <span class="performance-text">性能优化</span>
          </div>
        </div>

        <div class="route-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#CCCCCC" stroke-width="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <img class="info-icon" src="@/assets/images/mobile/body/v13/bottom.png" alt="icon">
      <span class="footer-text">智能筛选推荐最佳访问体验</span>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';

// SVG components for route icons
const LightningIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none',
  stroke: '#FF5757',
  'stroke-width': '2'
}, [
  h('path', {
    d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    fill: '#FF5757',
    stroke: 'none'
  })
]);

const ShieldIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none',
  stroke: '#4CAF50',
  'stroke-width': '2'
}, [
  h('path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    fill: '#4CAF50',
    stroke: 'none'
  })
]);

const ClockIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  fill: 'none',
  stroke: '#FFC107',
  'stroke-width': '2'
}, [
  h('circle', {
    cx: '12',
    cy: '12',
    r: '10',
    fill: '#FFC107',
    stroke: 'none'
  }),
  h('path', {
    d: 'M12 6v6l4 2',
    stroke: '#FFFFFF',
    fill: 'none'
  })
]);

// Route data
const routes = [
  {
    name: '快速线路',
    icon: LightningIcon,
    iconClass: 'icon-red'
  },
  {
    name: '稳定线路',
    icon: ShieldIcon,
    iconClass: 'icon-green'
  },
  {
    name: '备用线路',
    icon: ClockIcon,
    iconClass: 'icon-yellow'
  }
];

const selectRoute = (index) => {
  console.log(`Selected route: ${routes[index].name}`);
  // Add route selection logic here
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(135deg, #FFF1F2 -5%, #EEF2FF 100%);
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  color: #333;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Header */
.header {
  background: white;
  padding: 16px;
  display: flex;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 28px;
  height: 28px;
  border-radius: 10.5px;
  background-color: #5669FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.logo-text {
  font-size: 16px;
  font-weight: 500;
}

/* Smart Banner */
.smart-banner {
  background-color: #EEF2FF;
  border-radius: 20px;
  padding: 6px 12px;
  display: inline-flex;
  align-items: center;
  margin: 20px auto 0;
}

.wifi-icon {
  margin-right: 6px;
}

.smart-text {
  font-size: 14px;
  color: #5669FF;
  font-weight: 500;
}

/* Title Section */
.title-section {
  text-align: center;
  margin: 20px 0 40px;
}

.main-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Route Cards */
.routes-container {
  padding: 0 16px;
}

.route-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.route-icon-container {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.icon-red {
  background-color: #FFE6E6;
}

.icon-green {
  background-color: #E6F7E6;
}

.icon-yellow {
  background-color: #FFF8E6;
}

.route-info {
  flex: 1;
}

.route-name {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
}

.route-performance {
  display: flex;
  align-items: center;
}

.signal-bars {
  display: flex;
  align-items: flex-end;
  height: 12px;
  margin-right: 6px;
}

.signal-bar {
  width: 3px;
  height: 6px;
  background-color: #4CAF50;
  margin-right: 2px;
  border-radius: 1px;
}

.signal-bar:nth-child(2) {
  height: 8px;
}

.signal-bar:nth-child(3) {
  height: 10px;
}

.signal-bar:nth-child(4) {
  height: 12px;
}

.performance-text {
  font-size: 12px;
  color: #4CAF50;
}

.route-arrow {
  margin-left: 10px;
}

/* Footer */
.footer {
  margin-top: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.25px;
  height: 17.5px;
  background-color: #EEEEEE;
  border-radius: 50%;
}

.footer-text {
  font-size: 14px;
  color: #666;
}
</style>