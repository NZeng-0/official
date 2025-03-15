<script setup>
import {ref, onMounted} from "vue";
import * as echarts from "echarts";

const refreshing = ref(false);
const handleRefresh = () => {
  refreshing.value = true;
  setTimeout(() => {
    refreshing.value = false;
  }, 1000);
};

const routes = ref([
  {id: "一", latency: "32ms", loss: "0.2%", status: "正常", statusClass: "normal"},
  {id: "二", latency: "45ms", loss: "0.5%", status: "正常", statusClass: "normal"},
  {id: "三", latency: "150ms", loss: "2.5%", status: "异常", statusClass: "error"},
  {id: "四", latency: "68ms", loss: "0.8%", status: "正常", statusClass: "normal"},
  {id: "五", latency: "55ms", loss: "0.3%", status: "正常", statusClass: "normal"},
  {id: "六", latency: "180ms", loss: "3%", status: "异常", statusClass: "error"},
]);

const chartRef = ref(null);
let chart = null;

onMounted(() => {
  if (chartRef.value) {
    chart = echarts.init(chartRef.value);
    const option = {
      tooltip: {
        trigger: "axis",
        formatter: "{b}<br/>{a0}: {c0} Mbps<br/>{a1}: {c1} Mbps<br/>{a2}: {c2} Mbps"
      },
      legend: {
        data: ["线路一", "线路二", "线路三"],
        top: 5,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 12
        }
      },
      grid: {
        left: 40,
        right: 20,
        top: 40,
        bottom: 20
      },
      xAxis: {
        type: "category",
        data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "23:59"],
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#E0E0E0"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          fontSize: 10
        }
      },
      yAxis: {
        type: "value",
        name: "速度 (Mbps)",
        min: 0,
        max: 500,
        nameTextStyle: {
          fontSize: 10,
          padding: [0, 0, 0, 20]
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: "#F0F0F0"
          }
        },
        axisLabel: {
          fontSize: 10
        }
      },
      series: [
        {
          name: "线路一",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          lineStyle: {
            width: 2,
            color: "#7367F0"
          },
          itemStyle: {
            color: "#7367F0"
          }
        },
        {
          name: "线路二",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          lineStyle: {
            width: 2,
            color: "#28C76F"
          },
          itemStyle: {
            color: "#28C76F"
          }
        },
        {
          name: "线路三",
          type: "line",
          data: [150, 232, 201, 154, 190, 330, 410],
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          lineStyle: {
            width: 2,
            color: "#FF9F43"
          },
          itemStyle: {
            color: "#FF9F43"
          }
        }
      ]
    };

    chart.setOption(option);
    window.addEventListener("resize", () => {
      chart && chart.resize();
    });
  }
});
</script>

<template>
  <div class="dashboard">
    <!-- Header -->
    <div class="header">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
             width="20" height="20" viewBox="0 0 20 20">
          <defs>
            <clipPath id="master_svg0_229_768">
              <rect x="0" y="0" width="20" height="20" rx="0"/>
            </clipPath>
          </defs>
          <g clip-path="url(#master_svg0_229_768)">
            <g transform="matrix(1,0,0,-1,0,40.859375)">
              <g>
                <path
                    d="M20,36.6796875Q19.9609,35.6640875,19.375,34.4921875Q18.75,33.3202875,18.0078,32.2655875Q17.2266,31.2499875,16.6797,30.6249875Q16.4453,30.3515675,16.1328,30.4296875L12.5,30.4296875Q11.9531,30.4296875,11.6016,30.0781275Q11.25,29.7265675,11.25,29.1796875Q11.25,28.6328075,11.6016,28.2812475Q11.9531,27.9296875,12.5,27.9296875L16.25,27.9296875Q17.8516,27.8906275,18.9062,26.8359375Q19.9609,25.7812475,20,24.1796875Q19.9609,22.5781275,18.9062,21.5234375Q17.8516,20.46875,16.25,20.4296875L5.46875,20.4296875Q5.97656,21.0156255,6.64062,21.8749975Q6.99219,22.3437475,7.38281,22.9296875L16.25,22.9296875Q16.7969,22.9296875,17.1484,23.2812475Q17.5,23.6328075,17.5,24.1796875Q17.5,24.7265675,17.1484,25.0781275Q16.7969,25.4296875,16.25,25.4296875L12.5,25.4296875Q10.8984,25.4687475,9.84375,26.5234375Q8.78906,27.5781275,8.75,29.1796875Q8.78906,30.781287499999998,9.84375,31.8358875Q10.8984,32.8905875,12.5,32.9296875L14.0625,32.9296875Q13.4375,33.8671875,12.9688,34.8437875Q12.5391,35.8202875,12.5,36.6796875Q12.5391,38.281287500000005,13.5938,39.3358875Q14.6484,40.390587499999995,16.25,40.4296875Q17.8516,40.390587499999995,18.9062,39.3358875Q19.9609,38.281287500000005,20,36.6796875ZM4.57031,21.3281255Q4.33594,21.0546875,4.17969,20.8984375L4.10156,20.8203125Q3.71094,20.5468755,3.32031,20.8984375Q2.8125,21.4453075,2.03125,22.4218775Q1.25,23.3984375,0.625,24.5312475Q0.0390625,25.6640675,0,26.6796875Q0.0390625,28.2812475,1.09375,29.3359375Q2.14844,30.3906275,3.75,30.4296875Q5.35156,30.3906275,6.40625,29.3359375Q7.46094,28.2812475,7.5,26.6796875Q7.46094,25.7812475,6.99219,24.7656275Q6.48438,23.7890675,5.82031,22.8515675Q5.15625,21.9921875,4.60938,21.3671875L4.57031,21.3281255ZM5,26.6796875Q5,27.2265675,4.64844,27.5781275Q4.29688,27.9296875,3.75,27.9296875Q3.20312,27.9296875,2.85156,27.5781275Q2.5,27.2265675,2.5,26.6796875Q2.5,26.1328075,2.85156,25.7812475Q3.20312,25.4296875,3.75,25.4296875Q4.29688,25.4296875,4.64844,25.7812475Q5,26.1328075,5,26.6796875ZM16.25,35.4296875Q16.7969,35.4296875,17.1484,35.7812875Q17.5,36.1327875,17.5,36.6796875Q17.5,37.2265875,17.1484,37.578087499999995Q16.7969,37.9296875,16.25,37.9296875Q15.7031,37.9296875,15.3516,37.578087499999995Q15,37.2265875,15,36.6796875Q15,36.1327875,15.3516,35.7812875Q15.7031,35.4296875,16.25,35.4296875Z"
                    fill="#FFFFFF" fill-opacity="1"/>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="title">智能线路导航</div>
    </div>

    <!-- Main Content -->
    <div class="content">
      <!-- Network Status Section -->
      <div class="section">
        <div class="section-header">
          <h3>线路状态</h3>
          <div class="refresh-btn" @click="handleRefresh">
            <svg :class="{ 'refreshing': refreshing }" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                    stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51" stroke="#888"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>自动刷新</span>
          </div>
        </div>

        <!-- Route Status Cards -->
        <div class="route-grid">
          <div class="route-card" v-for="route in routes" :key="route.id">
            <div class="route-header">
              <div class="route-name">线路{{ route.id }}</div>
              <div class="route-status" :class="route.statusClass">{{ route.status }}</div>
            </div>
            <div class="route-detail">
              <div class="detail-item">
                <div class="label">延迟</div>
                <div class="value">{{ route.latency }}</div>
              </div>
              <div class="detail-item">
                <div class="label">丢包率</div>
                <div class="value">{{ route.loss }}</div>
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress" :style="{
                width: route.loss.replace('%', '') + '%',
                backgroundColor: route.statusClass === 'normal' ? '#28C76F' : '#EA5455',
                maxWidth: '100%'
              }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Speed Monitoring Chart -->
      <div class="section">
        <div class="section-header">
          <h3>实时速度监控</h3>
        </div>
        <div class="chart-container">
          <div ref="chartRef" class="chart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: linear-gradient(90deg, #4F46E5 0%, #7367F0 100%);
  color: white;
  padding: 0.12rem 0.16rem;
  display: flex;
  align-items: center;
  gap: 0.1rem;
}

.title {
  font-size: 0.16rem;
  font-weight: 500;
}

.content {
  padding: 0.16rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
}

.section {
  background-color: white;
  border-radius: 0.08rem;
  box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.05);
  padding: 0.16rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.16rem;
}

.section-header h3 {
  font-size: 0.16rem;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 0.05rem;
  color: #888;
  font-size: 0.12rem;
  cursor: pointer;
}

.refreshing {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.route-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.16rem;
}

.route-card {
  border: 0.01rem solid #eee;
  border-radius: 0.06rem;
  padding: 0.12rem;
  display: flex;
  flex-direction: column;
  gap: 0.08rem;
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.route-name {
  font-size: 0.14rem;
  font-weight: 500;
  color: #333;
}

.route-status {
  font-size: 0.12rem;
  padding: 0.02rem 0.08rem;
  border-radius: 0.04rem;
}

.route-status.normal {
  background-color: rgba(40, 199, 111, 0.1);
  color: #28C76F;
}

.route-status.error {
  background-color: rgba(234, 84, 85, 0.1);
  color: #EA5455;
}

.route-detail {
  display: flex;
  flex-direction: column;
  gap: 0.04rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
}

.label {
  color: #888;
}

.value {
  color: #333;
  font-weight: 500;
}

.progress-bar {
  height: 0.04rem;
  background-color: #f0f0f0;
  border-radius: 0.02rem;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 0.02rem;
  transition: width 0.3s ease;
  min-width: 0.1rem;
}

.chart-container {
  width: 100%;
  margin-top: 0.08rem;
}

.chart {
  width: 100%;
  height: 3rem;
}
</style>