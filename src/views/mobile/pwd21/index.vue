<script setup>
import left from "@/assets/images/mobile/pwd21/input_left_icon.png"
import left2 from "@/assets/images/mobile/pwd21/left_icon2.png"
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
      <!-- 标题 -->
      <div style="text-align: center;">
        <img src="../../../assets/images/mobile/pwd21/top_icon.png" class="pwd21bg" alt="pwd9">
        <h3 class="title">系统安全验证</h3>
        <p class="subtitle">
          <img src="../../../assets/images/mobile/pwd21/pwd21_lock.png" class="pwd20_button_icon" alt="pwd9">
          系统安全验证
        </p>
      </div>

      <!-- 验证卡片 -->
      <div class="card">

        <van-field
            v-model="password"
            type="password"
            maxlength="6"
            :left-icon="left"
            placeholder="请输入访问验证码"
            class="input-field filed1"
            left-icon="key-o"
        />
        <van-field
            v-model="password"
            type="password"
            maxlength="6"
            :left-icon="left2"
            placeholder="请输入访问验证码"
            class="input-field"
            left-icon="key-o"
        />

        <van-button type="primary" block class="verify-btn" @click="verifyAccess">
          验证访问 →
        </van-button>
        <!-- 安全功能选项 -->
        <div class="features">
          <div class="feature-item">
            <div class="item-box">
              <img src="../../../assets/images/mobile/pwd20/fingerprint.png" class="icon" alt="pwd9">
              <h5>生物识别</h5>
            </div>
            <p>多重身份验证</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="../../../assets/images/mobile/pwd20/safe.png" class="icon" alt="pwd9">
              <h5>安全防护</h5>
            </div>
            <p>全方位保护</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="../../../assets/images/mobile/pwd20/realtime.png" class="icon" alt="pwd9">
              <h5>实时监控</h5>
            </div>
            <p>24 小时守护</p>
          </div>
          <div class="feature-item">
            <div class="item-box">
              <img src="../../../assets/images/mobile/pwd20/any.png" class="icon" alt="pwd9">
              <h5>智能分析</h5>
            </div>
            <p>AI 风控系统</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pwd21bg {
  width: 112px;
  height: 112px;
}
.filed1 .van-icon__image{
  width: 48px;
  height: 48px;
}
.item-box {
  display: flex;
  align-items: center;

  .icon {
    width: 40px;
    height: 40px;
  }
}

.pwd20_button_icon {
  width: 10.5px;
  height: 12px;
}

.bg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/images/mobile/pwd21/pwd21.png");
  background-size: cover;
  background-position: center;
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
  color: white;
}

.subtitle {
  font-size: 0.37333rem;
  color: white;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(255, 255, 255, 0.1);

  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);

  backdrop-filter: blur(12px);
  flex-direction: row;
  padding: 0.16rem 0.42667rem;
  align-content: center;
  border-radius: 266.64rem;
}

/* 验证卡片 */
.card {
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.input-field {
  border-radius: 16px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  padding: 16px;
  gap: 0px 10px;
  flex-wrap: wrap;
  align-items: center;

  background: rgba(255, 255, 255, 0.05);

  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.input-field::after{
  border: none;
}

.verify-btn {
  background: linear-gradient(to right, #6a5af9, #905cff);
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 0;
  margin-top: 10px;
  border: none;
}

/* 功能区 */
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;
}

.feature-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 98px;
}

.feature-item h5 {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 6px 0 4px 5px;
}

.feature-item p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
}
</style>
