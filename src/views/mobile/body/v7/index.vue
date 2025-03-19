<template>
  <div class="container">
    <div class="title">请选择访问线路</div>
    <div class="route-list">
      <button v-for="route in routes" :key="route.id" class="route-button">
        <img src="@/assets/images/mobile/body/v7/route_icon.png" alt="Route Icon" class="icon" />
        {{ route.name }}
      </button>
    </div>
    <p class="footer-text">选择合适的线路以获得最佳访问体验</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const routes = ref([
  { id: 1, name: "线路一" },
  { id: 2, name: "线路二" },
  { id: 3, name: "线路三" },
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
}

.title {
  font-size: 21px;
  color: #1e293b;
  margin-bottom: 42px;
}

.route-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
}

.route-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1e63ea;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

.route-button:hover {
  background-color: #1555c0;
}

.icon {
  width: 15.75px;
  height: 15.75px;
  margin-right: 10px;
}

.footer-text {
  font-size: 14px;
  color: #64748b;
  margin-top: 20px;
}
</style>
