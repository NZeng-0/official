<template>
  <div class="box">

    <div class="header">
      <img src="@/assets/images/mobile/body/v6/top_icon.png" alt="Lightning Icon" class="icon"/>
      <h2>线路选择</h2>
    </div>
    <div class="route-selection">
      <div class="recommended-routes">
        <div class="recommend">推荐线路</div>
        <div v-for="route in routes" :key="route.id" class="route-card">
          <div class="route-info">
            <img src="@/assets/images/mobile/body/v6/task_icon.png" alt="Lightning Icon" class="icon"/>
            <div>
              <p class="route-name">{{ route.name }}</p>
              <p class="latency">延迟: {{ route.latency }}ms</p>
            </div>
          </div>
          <button class="select-btn">选择</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";

const routes = ref([
  {id: 1, name: "线路一", latency: 38},
  {id: 2, name: "线路二", latency: 45},
  {id: 3, name: "线路三", latency: 52},
]);
</script>

<style scoped>
.box{
  background: #F9FAFB;
  height: 100vh;
}
.route-selection {
  padding: 0 20px 0 20px;
}

.header {
  display: flex;
  align-items: center;
  background: white;
  margin: 0;
  padding-left: 14px;
  padding-right: 14px;
}

h2 {
  font-size: 18px;
}

.recommend {
  font-size: 14px;
  margin-top: 21px;
  margin-bottom: 14px;
}

.route-card {
  display: flex;
  height: 66.5px;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  padding: 5px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.route-info {
  display: flex;
  align-items: center;
}

.icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}

.route-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0;
}

.latency {
  margin-top: 5px;
  font-size: 14px;
  color: rgb(128, 128, 128);
}

.select-btn {
  background-color: #0066ff;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.select-btn:hover {
  background-color: #0052cc;
}
</style>
