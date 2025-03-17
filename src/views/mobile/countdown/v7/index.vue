<template>
  <div class="container">
    <!-- Gradient background -->
    <div class="gradient-bg"></div>

    <!-- Center logo in circle -->
    <div class="logo-container">
      <div class="logo">
        <img src="@/assets/images/mobile/countdown/v7_icon.png" alt="icon" style="width: 56px;height: 56px;" />
      </div>
    </div>

    <!-- Countdown panel -->
    <div class="countdown-panel">
      <div class="countdown-number">{{ countdown }}</div>
      <div class="countdown-text">秒后自动进入官网</div>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
      </div>
    </div>

    <!-- Enter button -->
    <div class="button-container">
      <button class="enter-button" @click="enterSite">立即进入</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: 6,
      progressWidth: 0,
      timer: null
    }
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      const totalTime = 6;
      this.progressWidth = 0;

      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
          this.progressWidth = ((totalTime - this.countdown) / totalTime) * 100;
        } else {
          clearInterval(this.timer);
          this.enterSite();
        }
      }, 1000);
    },
    enterSite() {
      // Replace with your site navigation logic
      console.log('Entering site...');
      // this.$router.push('/main');
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url("@/assets/images/mobile/countdown/v7.png");
}

.logo-container {
  position: relative;
  margin-bottom: 30px;
}

.logo {
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo svg {
  width: 40px;
  height: 40px;
}

.countdown-panel {
  padding-left: 28px;
  padding-right: 28px;
  width: 252px;
  height: 140px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0 0;
  flex-wrap: wrap;
  align-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 10px -6px rgba(0, 0, 0, 0.1),0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.countdown-number {
  font-size: 26.25px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.countdown-text {
  font-size: 12.25px;
  color: #666;
  margin-bottom: 20px;
}

.progress-bar-container {
  height: 4px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #2196f3;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.button-container {
  margin-top: 30px;
}

.enter-button {
  background-color: white;
  color: #2196f3;
  border: none;
  border-radius: 4px;
  padding: 12px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.enter-button:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>