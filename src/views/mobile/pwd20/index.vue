<script setup>
import icon from "@/assets/images/mobile/pwd20/pwd20_input_icon.png"
import {ref} from "vue";
import {showToast} from "vant";

const password = ref("");

const verifyAccess = () => {
  if (!password.value) {
    showToast("请输入访问验证码");
    return;
  }
  showToast("验证成功");
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <img src="@/assets/images/mobile/pwd20/pwd20.png" class="pwd20bg" alt="pwd9">
      <!-- 标题 -->
      <div style="text-align: center;margin-top: 50px;">
        <h3 class="title">身份验证</h3>
        <p class="subtitle">安全访问认证</p>
      </div>

      <!-- 验证卡片 -->
      <div class="card">
        <div class="icon-box">
          <img src="@/assets/images/mobile/pwd20/pwd20_icon.png" class="pwd20_icon" alt="pwd9">
        </div>
        <div class="card-title">安全验证中心</div>
        <p class="card-subtitle">Security Authentication</p>

        <van-field
            v-model="password"
            type="password"
            maxlength="6"
            :left-icon="icon"
            placeholder="请输入访问验证码"
            class="input-field"
            left-icon="key-o"
        />

        <van-button type="primary" block class="verify-btn" @click="verifyAccess">
          验证访问
          <img src="@/assets/images/mobile/pwd20/pwd20_button_icon.png" class="pwd20_button_icon" alt="pwd9">
        </van-button>
        <!-- 安全功能选项 -->
        <div class="features">
          <div class="feature-item">
            <div class="item-box">
              <img src="@/assets/images/mobile/pwd20/fingerprint.png" class="icon" alt="pwd9">
              <h5>生物识别</h5>
            </div>
            <p>多重身份验证</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="@/assets/images/mobile/pwd20/safe.png" class="icon" alt="pwd9">
              <h5>安全防护</h5>
            </div>
            <p>全方位保护</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="@/assets/images/mobile/pwd20/realtime.png" class="icon" alt="pwd9">
              <h5>实时监控</h5>
            </div>
            <p>24 小时守护</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="@/assets/images/mobile/pwd20/any.png" class="icon" alt="pwd9">
              <h5>智能分析</h5>
            </div>
            <p>AI 风控系统</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-box {
  display: flex;
  align-items: center;

  .icon {
    width: 40px;
    height: 40px;
  }
}

.pwd20_button_icon {
  width: 14px;
  height: 12.25px;
}

.pwd20bg {
  position: fixed;
  top: -75px;
  width: 192px;
  height: 192px;
}

.bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #f8f8ff, #ffffff);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 24px;
  flex-wrap: wrap;
  align-content: center;
}

.title {
  font-size: 22px;
  font-weight: bold;
  color: #222;
}

.subtitle {
  font-size: 0.37333rem;
  color: #777;
  margin-bottom: 0.53333rem;
  width: 3.73333rem;
  height: 0.96rem;
  border-radius: 266.64rem;
  align-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(79, 70, 229, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
}

/* 验证卡片 */
.card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}

.icon-box .pwd20_icon {
  width: 88px;
  height: 88px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #222;
}

.card-subtitle {
  font-size: 12px;
  color: #777;
  margin-bottom: 16px;
}

.input-field {
  justify-content: center;

  margin: 16px 0;
  height: 48px;
  border-radius: 16px;
  opacity: 1;

  /* 自动布局 */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;

  background: #F9FAFB;

  box-sizing: border-box;
  border: 1px solid #E5E7EB;
}

.verify-btn {
  background: linear-gradient(to right, #6a5af9, #905cff);
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 0;
  margin-top: 10px;
}

/* 功能区 */
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.feature-item {
  background: white;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 98px;
}

.feature-item h5 {
  font-size: 14px;
  margin: 6px 0 4px;
  color: #222;
  margin-left: 5px;
}

.feature-item p {
  font-size: 12px;
  color: #777;
  text-align: left;
}
</style>
