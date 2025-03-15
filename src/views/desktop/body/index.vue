<script setup>
import {ref} from 'vue';

const searchQuery = ref('');
const filteredRoutes = ref([]);

const routes = ref([
  {
    id: '一',
    name: '线路一',
    status: '正常',
    latency: '32ms',
    packetLoss: '0.2%',
    health: '95%',
    icon: 'route'
  },
  {
    id: '二',
    name: '线路二',
    status: '正常',
    latency: '45ms',
    packetLoss: '0.5%',
    health: '88%',
    icon: 'route'
  },
  {
    id: '三',
    name: '线路三',
    status: '正常',
    latency: '88ms',
    packetLoss: '0.8%',
    health: '85%',
    icon: 'route'
  },
  {
    id: '四',
    name: '线路四',
    status: '正常',
    latency: '68ms',
    packetLoss: '0.8%',
    health: '82%',
    icon: 'route'
  },
  {
    id: '',
    name: '韩国首尔线路',
    status: '正常',
    latency: '55ms',
    packetLoss: '0.3%',
    health: '90%',
    icon: 'route'
  },
  {
    id: '',
    name: '德国法兰克福线路',
    status: '正常',
    latency: '92ms',
    packetLoss: '1%',
    health: '78%',
    icon: 'route'
  }
]);

const features = ref([
  {
    title: '高速稳定',
    description: '采用先进的网络优化技术，确保您的连接始终保持高速稳定',
    icon: 'speed'
  },
  {
    title: '安全可靠',
    description: '多重安全防护机制，保障您的网络访问安全',
    icon: 'shield'
  },
  {
    title: '智能优化',
    description: '自动选择最优线路，无需手动调整',
    icon: 'optimize'
  }
]);

const selectRoute = (route) => {
  console.log(`Selected route: ${route.name}`);
  // Implementation for route selection
};

</script>

<template>
  <div class="smart-route-container">
    <!-- Header -->
    <header class="header">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
             width="24" height="24" viewBox="0 0 24 24">
          <g transform="matrix(1,0,0,-1,0,48)">
            <g>
              <path
                  d="M24,43.5Q23.9531,42.2812,23.25,40.875Q22.5,39.4688,21.6094,38.2031Q20.6719,36.9844,20.0156,36.2344Q19.7344,35.9062,19.3594,36L15,36Q14.3438,36,13.9219,35.5781Q13.5,35.1562,13.5,34.5Q13.5,33.84375,13.9219,33.42188Q14.3438,33,15,33L19.5,33Q21.4219,32.95312,22.6875,31.6875Q23.9531,30.42188,24,28.5Q23.9531,26.57812,22.6875,25.3125Q21.4219,24.046875,19.5,24L6.5625,24Q7.17188,24.703125,7.96875,25.73438Q8.39062,26.29688,8.85938,27L19.5,27Q20.1562,27,20.5781,27.42188Q21,27.84375,21,28.5Q21,29.15625,20.5781,29.57812Q20.1562,30,19.5,30L15,30Q13.0781,30.04688,11.8125,31.3125Q10.5469,32.57812,10.5,34.5Q10.5469,36.4219,11.8125,37.6875Q13.0781,38.9531,15,39L16.875,39Q16.125,40.125,15.5625,41.2969Q15.0469,42.4688,15,43.5Q15.0469,45.4219,16.3125,46.6875Q17.5781,47.9531,19.5,48Q21.4219,47.9531,22.6875,46.6875Q23.9531,45.4219,24,43.5ZM5.48438,25.07812Q5.20312,24.75,5.01562,24.5625L4.92188,24.46875Q4.45312,24.140625,3.98438,24.5625Q3.375,25.21875,2.4375,26.39062Q1.5,27.5625,0.75,28.92188Q0.046875,30.28125,0,31.5Q0.046875,33.42188,1.3125,34.6875Q2.57812,35.9531,4.5,36Q6.42188,35.9531,7.6875,34.6875Q8.95312,33.42188,9,31.5Q8.95312,30.42188,8.39062,29.20312Q7.78125,28.03125,6.98438,26.90625Q6.1875,25.875,5.53125,25.125L5.48438,25.07812ZM6,31.5Q6,32.15625,5.57812,32.57812Q5.15625,33,4.5,33Q3.84375,33,3.42188,32.57812Q3,32.15625,3,31.5Q3,30.84375,3.42188,30.42188Q3.84375,30,4.5,30Q5.15625,30,5.57812,30.42188Q6,30.84375,6,31.5ZM19.5,42Q20.1562,42,20.5781,42.4219Q21,42.8438,21,43.5Q21,44.1562,20.5781,44.5781Q20.1562,45,19.5,45Q18.8438,45,18.4219,44.5781Q18,44.1562,18,43.5Q18,42.8438,18.4219,42.4219Q18.8438,42,19.5,42Z"
                  fill="#4F46E5" fill-opacity="1"/>
            </g>
          </g>
        </svg>
        <span>智能线路选择</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div>智能线路选择，为您提供最佳网络体验</div>
        <p>通过先进的智能算法，自动为您选择最优质的网络线路，确保稳定、高速的连接体验。</p>
      </div>
      <div class="hero-image">
        <img src="../../../assets/images/desktop/bg.png" alt="网络连接图"/>
      </div>
    </section>

    <!-- Available Routes Section -->
    <section class="routes-section">
      <div class="section-header">
        <div class="left">
          <h2>可用线路</h2>
          <p class="subtitle">选择最适合您的网络线路</p>
        </div>

        <div class="search-filter">
          <div class="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" v-model="searchQuery" class="query" placeholder="搜索线路"/>
          </div>
          <div class="filter-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span>筛选</span>
          </div>
        </div>
      </div>

      <div class="routes-grid">
        <div class="route-card" v-for="route in routes" :key="route.name">
          <div class="route-header">
            <div class="route-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                   version="1.1" width="64" height="64" viewBox="0 0 64 64">
                <defs>
                  <clipPath id="master_svg0_229_11491">
                    <rect x="20" y="20" width="24" height="24" rx="0"/>
                  </clipPath>
                </defs>
                <g>
                  <rect x="0" y="0" width="64" height="64" rx="12" fill="#E0E7FF" fill-opacity="1"/>
                  <g>
                    <rect x="20" y="16" width="24" height="32" rx="0" fill="#000000" fill-opacity="0"/>
                    <g clip-path="url(#master_svg0_229_11491)">
                      <g transform="matrix(1,0,0,-1,0,89.03125)">
                        <g>
                          <path
                              d="M44,64.015625Q43.9531,62.796825,43.25,61.390625Q42.5,59.984425,41.6094,58.718725Q40.6719,57.500025,40.0156,56.750025Q39.7344,56.421825,39.3594,56.515625L35,56.515625Q34.3438,56.515625,33.9219,56.093725Q33.5,55.671825,33.5,55.015625Q33.5,54.359375,33.9219,53.937505Q34.3438,53.515625,35,53.515625L39.5,53.515625Q41.4219,53.468745,42.6875,52.203125Q43.9531,50.937505,44,49.015625Q43.9531,47.093745,42.6875,45.828125Q41.4219,44.5625,39.5,44.515625L26.5625,44.515625Q27.17188,45.21875,27.96875,46.250005Q28.39062,46.812505,28.85938,47.515625L39.5,47.515625Q40.1562,47.515625,40.5781,47.937505Q41,48.359375,41,49.015625Q41,49.671875,40.5781,50.093745Q40.1562,50.515625,39.5,50.515625L35,50.515625Q33.0781,50.562505,31.8125,51.828125Q30.5469,53.093745,30.5,55.015625Q30.5469,56.937525,31.8125,58.203125Q33.0781,59.468725,35,59.515625L36.875,59.515625Q36.125,60.640625,35.5625,61.812525Q35.0469,62.984425,35,64.015625Q35.0469,65.937525,36.3125,67.203125Q37.5781,68.468725,39.5,68.515625Q41.4219,68.468725,42.6875,67.203125Q43.9531,65.937525,44,64.015625ZM25.48438,45.593745Q25.20312,45.265625,25.01562,45.078125L24.92188,44.984375Q24.45312,44.65625,23.98438,45.078125Q23.375,45.734375,22.4375,46.906245Q21.5,48.078125,20.75,49.437505Q20.046875,50.796875,20,52.015625Q20.046875,53.937505,21.3125,55.203125Q22.57812,56.468725,24.5,56.515625Q26.42188,56.468725,27.6875,55.203125Q28.95312,53.937505,29,52.015625Q28.95312,50.937505,28.39062,49.718745Q27.78125,48.546875,26.98438,47.421875Q26.1875,46.390625,25.53125,45.640625L25.48438,45.593745ZM26,52.015625Q26,52.671875,25.57812,53.093745Q25.15625,53.515625,24.5,53.515625Q23.84375,53.515625,23.42188,53.093745Q23,52.671875,23,52.015625Q23,51.359375,23.42188,50.937505Q23.84375,50.515625,24.5,50.515625Q25.15625,50.515625,25.57812,50.937505Q26,51.359375,26,52.015625ZM39.5,62.515625Q40.1562,62.515625,40.5781,62.937525Q41,63.359425,41,64.015625Q41,64.671825,40.5781,65.093725Q40.1562,65.515625,39.5,65.515625Q38.8438,65.515625,38.4219,65.093725Q38,64.671825,38,64.015625Q38,63.359425,38.4219,62.937525Q38.8438,62.515625,39.5,62.515625Z"
                              fill="#4F46E5" fill-opacity="1"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div style="width:100%;display: flex;justify-content: space-between;">
              <div>
                <div class="route-name">{{ route.name }}</div>
                <div class="route-status" :class="route.status === '正常' ? 'status-normal' : 'status-error'">
                  {{ route.status }}
                </div>
              </div>
              <div>
                <button class="select-btn" @click="selectRoute(route)">选择线路</button>
              </div>
            </div>
          </div>

          <div class="route-metrics">
            <div class="metric">
              <div class="metric-label">延迟</div>
              <div class="metric-value">{{ route.latency }}</div>
            </div>
            <div class="metric">
              <div class="metric-label">丢包率</div>
              <div class="metric-value">{{ route.packetLoss }}</div>
            </div>
            <div class="metric">
              <div class="metric-label">健康度</div>
              <div class="metric-value">{{ route.health }}</div>
            </div>
          </div>

          <div class="progress-bar">
            <div class="progress"
                 :style="{ width: route.health, backgroundColor: route.name === '德国法兰克福线路' ? '#FFA500' : '#4CAF50' }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-section">
      <h2 class="section-title">为什么选择我们的智能线路</h2>
      <p class="section-subtitle">提供业界领先的网络优化解决方案</p>

      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon" :class="`icon-${feature.icon}`">
            <template v-if="feature.icon === 'speed'">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                   version="1.1" width="48" height="48" viewBox="0 0 48 48">
                <defs>
                  <clipPath id="master_svg0_229_08437">
                    <rect x="14" y="14" width="20" height="20" rx="0"/>
                  </clipPath>
                </defs>
                <g>
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#E0E7FF" fill-opacity="1"
                  />
                  <g>
                    <rect x="14" y="10" width="20" height="28" rx="0" fill="#000000" fill-opacity="0"
                    />
                    <g clip-path="url(#master_svg0_229_08437)">
                      <g transform="matrix(1,0,0,-1,0,68.859375)">
                        <g>
                          <path
                              d="M14,44.4296875Q14.0390625,47.1640875,15.32812,49.4296875Q16.65625,51.6952875,19,53.1015875Q21.38281,54.4296875,24,54.4296875Q26.6172,54.4296875,29,53.1015875Q31.3438,51.6952875,32.6719,49.4296875Q33.960899999999995,47.1640875,34,44.4296875Q33.960899999999995,41.6953075,32.6719,39.4296875Q31.3438,37.1640675,29,35.7578075Q26.6172,34.4296875,24,34.4296875Q21.38281,34.4296875,19,35.7578075Q16.65625,37.1640675,15.32812,39.4296875Q14.0390625,41.6953075,14,44.4296875ZM25.25,50.6796875Q25.25,51.2265875,24.898400000000002,51.578087499999995Q24.5469,51.9296875,24,51.9296875Q23.45312,51.9296875,23.10156,51.578087499999995Q22.75,51.2265875,22.75,50.6796875Q22.75,50.1327875,23.10156,49.7812875Q23.45312,49.4296875,24,49.4296875Q24.5469,49.4296875,24.898400000000002,49.7812875Q25.25,50.1327875,25.25,50.6796875ZM24,38.1796875Q25.0547,38.2187475,25.7578,38.9218775Q26.460900000000002,39.6249975,26.5,40.6796875Q26.460900000000002,41.7343775,25.7969,42.4374975L28.2969,48.1015875Q28.5703,48.9218875,27.8281,49.3515875Q27.0078,49.6249875,26.5781,48.8827875L24.0781,43.1796875Q24.039099999999998,43.1796875,24.039099999999998,43.1796875Q24,43.1796875,24,43.1796875Q22.94531,43.1406275,22.24219,42.4374975Q21.53906,41.7343775,21.5,40.6796875Q21.53906,39.6249975,22.24219,38.9218775Q22.94531,38.2187475,24,38.1796875ZM20.875,48.8046875Q20.875,49.3515875,20.52344,49.7030875Q20.17188,50.0546875,19.625,50.0546875Q19.07812,50.0546875,18.72656,49.7030875Q18.375,49.3515875,18.375,48.8046875Q18.375,48.2577875,18.72656,47.9062875Q19.07812,47.5546875,19.625,47.5546875Q20.17188,47.5546875,20.52344,47.9062875Q20.875,48.2577875,20.875,48.8046875ZM17.75,43.1796875Q18.29688,43.1796875,18.64844,43.5312475Q19,43.8828075,19,44.4296875Q19,44.9765875,18.64844,45.3280875Q18.29688,45.6796875,17.75,45.6796875Q17.20312,45.6796875,16.85156,45.3280875Q16.5,44.9765875,16.5,44.4296875Q16.5,43.8828075,16.85156,43.5312475Q17.20312,43.1796875,17.75,43.1796875ZM31.5,44.4296875Q31.5,44.9765875,31.1484,45.3280875Q30.7969,45.6796875,30.25,45.6796875Q29.7031,45.6796875,29.351599999999998,45.3280875Q29,44.9765875,29,44.4296875Q29,43.8828075,29.351599999999998,43.5312475Q29.7031,43.1796875,30.25,43.1796875Q30.7969,43.1796875,31.1484,43.5312475Q31.5,43.8828075,31.5,44.4296875Z"
                              fill="#4F46E5" fill-opacity="1"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else-if="feature.icon === 'shield'">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                   version="1.1" width="48" height="48" viewBox="0 0 48 48">
                <defs>
                  <clipPath id="master_svg0_229_08442">
                    <rect x="14" y="14" width="18.828125" height="20" rx="0"/>
                  </clipPath>
                </defs>
                <g>
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#E0E7FF" fill-opacity="1"/>
                  <g>
                    <rect x="14" y="10" width="20" height="28" rx="0" fill="#000000" fill-opacity="0"/>
                    <g clip-path="url(#master_svg0_229_08442)">
                      <g transform="matrix(1,0,0,-1,0,68.625)">
                        <g>
                          <path
                              d="M22.82812887817383,54.1953Q23.101558878173826,54.1953,23.335938878173828,54.0781L30.71876887817383,50.9531Q31.382768878173827,50.6797,31.773468878173826,50.0937Q32.20316887817383,49.5078,32.20316887817383,48.7266Q32.24216887817383,46.7344,31.53906887817383,44.03906Q30.835968878173826,41.34375,28.999968878173828,38.80469Q27.203168878173827,36.22656,23.843768878173826,34.546875Q22.82812887817383,34.078125,21.812498878173827,34.546875Q18.45312887817383,36.22656,16.656248878173827,38.80469Q14.820308878173828,41.34375,14.117186878173829,44.03906Q13.414062278173828,46.7344,13.453124788173827,48.7266Q13.453124788173827,49.5078,13.882811878173829,50.0937Q14.273436878173829,50.6797,14.937498878173828,50.9531L22.320308878173826,54.0781Q22.554688878173828,54.1953,22.82812887817383,54.1953ZM22.82812887817383,51.5781L22.82812887817383,36.8125L22.82812887817383,51.5781L22.82812887817383,36.8125Q25.48436887817383,38.17969,27.007768878173827,40.28906Q28.49216887817383,42.39844,29.11716887817383,44.625Q29.703168878173827,46.8906,29.703168878173827,48.6875L22.82812887817383,51.5781Z"
                              fill="#4F46E5" fill-opacity="1"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
                   version="1.1" width="48" height="48" viewBox="0 0 48 48">
                <defs>
                  <clipPath id="master_svg0_229_08447">
                    <rect x="14" y="14" width="20" height="20" rx="0"/>
                  </clipPath>
                </defs>
                <g>
                  <rect x="0" y="0" width="48" height="48" rx="8" fill="#E0E7FF" fill-opacity="1"/>
                  <g>
                    <rect x="14" y="10" width="20" height="28" rx="0" fill="#000000" fill-opacity="0"/>
                    <g clip-path="url(#master_svg0_229_08447)">
                      <g transform="matrix(1,0,0,-1,0,68.859375)">
                        <g>
                          <path
                              d="M14.546875,36.3437475Q14,36.8906275,14,37.6718775Q14,38.4140675,14.546875,38.9999975L29.4297,53.8827875Q30.0156,54.4296875,30.7578,54.4296875Q31.5,54.4296875,32.085899999999995,53.8827875L33.4531,52.515587499999995Q34,51.968787500000005,34,51.1874875Q34,50.4452875,33.4531,49.8593875L18.57031,34.9765625Q17.98438,34.4296875,17.24219,34.4296875Q16.46094,34.4296875,15.91406,34.9765625L14.546875,36.3437475ZM27.5938,47.0858875L31.6953,51.1874875L27.5938,47.0858875L31.6953,51.1874875L30.7578,52.1249875L26.6562,48.0234875L27.5938,47.0858875Z"
                              fill="#4F46E5" fill-opacity="1"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base Styles */
.smart-route-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #f8f9fa;
  margin: 0 auto;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  padding: 0.16rem 0.24rem;
  border-bottom: 0.01rem solid #eaeaea;
  background-color: #fff;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.08rem;
  color: #5856d6;
  font-weight: 600;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  border-radius: 0.08rem;
  margin: 0 0.2rem;
}

.hero-content {
  flex: 1;
}

.hero-content div {
  font-size: 0.27rem;
  color: #111827;
  margin-bottom: 0.16rem;
  line-height: 1.3;
}

.hero-content p {
  font-size: 0.16rem;
  color: #4B5563;
  line-height: 1.5;
}

.hero-image {
  flex: 1;
  border-radius: 0.08rem;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.08rem;
}

/* Routes Section */
.routes-section {
  padding: 0 0.24rem 0.32rem 0.24rem;
  border-radius: 0.12rem;
  opacity: 1;
  margin: 0 0.24rem 0.4rem;
  /* 自动布局 */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF;
  box-shadow: 0rem 0.01rem 0.02rem 0rem rgba(0, 0, 0, 0.05);
}

.section-header {
  margin-bottom: 0.24rem;
  display: flex;
  justify-content: space-between;
}

.section-header h2 {
  font-size: 0.2rem;
  font-weight: 600;
  margin-bottom: 0.04rem;
}

.subtitle {
  font-size: 0.14rem;
  color: #666;
}

.search-filter {
  display: flex;
  gap: 0.12rem;
  align-items: end;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 0.01rem solid #E5E7EB;
  border-radius: 0.04rem;
  padding: 0.08rem 0.12rem;
  flex: 1;
  height: 0.2rem;
}

.search-box svg {
  color: #999;
  margin-right: 0.08rem;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.14rem;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.08rem;
  background-color: #f0f0ff;
  color: #5856d6;
  border: 0.01rem solid #e6e6ff;
  border-radius: 0.04rem;
  padding: 0.08rem 0.16rem;
  font-size: 0.14rem;
  cursor: pointer;
  height: 0.2rem;
}

.routes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.2rem;
}

.route-card {
  background-color: #F9FAFB;
  border-radius: 0.08rem;
  padding: 0.2rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
}

.route-header {
  display: flex;
  align-items: center;
  gap: 0.08rem;
}

.route-icon {
  background-color: #f0f0ff;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.route-name {
  flex-grow: 1;
  font-weight: 500;
  font-size: 0.12rem;
}

.route-status {
  margin-top: 0.01rem;
  font-size: 0.10rem;
  padding: 0.02rem 0.08rem;
  border-radius: 0.04rem;
  width: 0.20rem;
}

/* Status colors */
.status-normal {
  background-color: #e6f7e6;
  color: #4CAF50;

}

.status-error {
  background-color: #ffecec;
  color: #f44336;
}

/* Route metrics */
.route-metrics {
  display: flex;
  justify-content: space-between;
  gap: 0.08rem;
}

.metric {
  text-align: center;
  flex: 1;
  border-radius: 0.08rem;
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 0.12rem;
  gap: 0rem 0.1rem;
  flex-wrap: wrap;
  align-content: flex-start;
  background: #fff;
}

.metric-label {
  text-align: left;
  font-size: 0.12rem;
  color: #666;
  margin-bottom: 0.04rem;
}

.metric-value {
  font-size: 0.16rem;
  font-weight: 500;
}

/* Progress bar */
.progress-bar {
  height: 0.06rem;
  background-color: #f0f0f0;
  border-radius: 0.03rem;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 0.03rem;
  transition: width 0.3s ease;
}

/* Select button */
.select-btn {
  background-color: #5856d6;
  color: white;
  border: none;
  border-radius: 0.04rem;
  font-size: 0.12rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 0.2rem;
}

.select-btn:hover {
  background-color: #4745c0;
}

/* Why Choose Us Section */
.why-choose-section {
  padding: 0.4rem 0.24rem;
  background-color: #fff;
  border-radius: 0.08rem;
  margin: 0 0.24rem 0.4rem;
  box-shadow: 0 0.02rem 0.08rem rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 0.24rem;
  font-weight: 600;
  margin-bottom: 0.08rem;
  text-align: center;
}

.section-subtitle {
  font-size: 0.16rem;
  color: #666;
  margin-bottom: 0.32rem;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.24rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.24rem;
  border-radius: 0.08rem;
  background-color: #f8f9fa;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;
}

.feature-card:hover {
  transform: translateY(-0.05rem);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  display: flex;
  border-radius: 50%;
  width: 100%;
  text-align: left;
}

.feature-title {
  font-size: 0.18rem;
  font-weight: 600;
  margin-bottom: 0.12rem;
  color: #333;
  text-align: left;
  width: 100%;
}

.feature-description {
  font-size: 0.14rem;
  color: #666;
  line-height: 1.6;
}

/* Responsive adjustments */
/*
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    padding: 32px 20px;
  }

  .hero-content {
    padding-right: 0;
    margin-bottom: 24px;
  }

  .search-filter {
    flex-direction: column;
  }

  .routes-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}*/
</style>