<script setup>
import {ref} from 'vue'

const selectedRoute = ref('1')

const list = ref([
  {title: "线路一", desc: "节点稳定，速度快", sped: "20", latency: "50ms"},
  {title: "线路二", desc: "网络通畅，响应快", sped: "15", latency: "80ms"},
  {title: "线路三", desc: "全球加速，覆盖广", sped: "10", latency: "150ms"}
])

function confirmSelection() {
  console.log(`Selected route: ${selectedRoute.value}`);
}

</script>

<template>
  <div class="route-container">
    <div class="header">
      <p class="title">线路选择</p>
    </div>

    <div class="content">
      <h2 class="subtitle">请选择访问线路</h2>
      <p class="description">选择合适的线路可以帮助您获得更好的访问体验，建议根据所在地区选择最优线路</p>

      <div class="routes-list">
        <!-- 线路一 -->
        <div class="route-item" v-for="(e,index) in list">
          <div class="route-info">
            <div class="flex">
              <img src="@/assets/images/mobile/nav/icon.png" alt="icon" class="route-icon">
              <div class="route-details">
                <h3 class="route-name">{{ e.title }}</h3>
                <p class="route-description">{{ e.desc }}</p>
              </div>
            </div>
            <div class="route-metrics">
              <div class="speed">
                <img class="signal-icon" src="@/assets/images/mobile/nav/wifi.png" alt="icon"/>
                <span class="speed-value">{{ e.sped }} Mbps</span>
              </div>
              <div class="latency">
                <img class="clock-icon" src="@/assets/images/mobile/nav/times.png" alt="icon"/>
                <span class="latency-value">{{ e.latency }}</span>
              </div>
            </div>
          </div>
          <div class="route-selector">
            <input type="radio" :id="'route' + index" name="route" :value="index" v-model="selectedRoute">
            <label :for="'route' + index" class="radio-custom"></label>
          </div>
        </div>
      </div>

      <div class="tip-container">
        <img src="@/assets/images/mobile/nav/bottom.png" alt="icon" class="tip-icon">
        <p class="tip-text">
          建议您选择延迟最低的线路，可以获得最佳的访问体验。如遇访问异常，可以尝试切换其他线路。我们会定期优化线路质量，为您提供更好的服务。
        </p>
      </div>

      <button class="confirm-button" @click="confirmSelection">确认选择</button>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.flex{
  display: flex;
  justify-content: center;
  align-content: center;
}

.route-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.header {
  height: 49px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 15.75px;
  color: #1F2937;
  font-weight: 500;
}

.content {
  padding: 20px;
}

.subtitle {
  font-size: 17.5px;
  color: #1F2937;
  margin-bottom: 8px;
  font-weight: 500;
}

.description {
  font-size: 12.25px;
  color: #6B7280;
  margin-bottom: 30px;
  line-height: 1.5;
}

.routes-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.route-item {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.route-info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.route-icon {
  width: 42px;
  height: 42px;
}

.route-details {
  flex: 1;
  margin-left: 10px;
}

.route-name {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.route-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.route-metrics {
  display: flex;
  gap: 15px;
}

.speed, .latency {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #f0f8f1;
  padding: 5px 10px;
  border-radius: 20px;
}

.signal-icon, .clock-icon {
  width: 10.5px;
  height: 14px;
  display: inline-block;
}

.signal-icon:before {
  content: "";
  display: inline-block;
  width: 2px;
  height: 5px;
  background-color: #16A34A;
  margin-right: 2px;
  border-radius: 1px;
}

.signal-icon:after {
  content: "";
  display: inline-block;
  width: 2px;
  height: 8px;
  background-color: #4caf50;
  margin-right: 2px;
  border-radius: 1px;
}

.clock-icon:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid #666;
  border-radius: 50%;
}

.speed-value, .latency-value {
  font-size: 14px;
  color: #333;
}

.speed-value {
  color: #4caf50;
}

.route-selector {
  position: relative;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.radio-custom {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ddd;
  position: relative;
  cursor: pointer;
}

input[type="radio"]:checked + .radio-custom:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4285f4;
}

.tip-container {
  background-color: #fff9e6;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
}

.tip-icon {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.tip-text {
  font-size: 12.25px;
  color: #4B5563;
  line-height: 1.5;
}

.confirm-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(90deg, #3B82F6 0%, #2563EB 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.confirm-button:hover {
  background-color: #3367d6;
}
</style>