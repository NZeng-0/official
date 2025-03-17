<script setup>
import { ref } from 'vue';
import VerifyTopIcon from "@/components/VerifyTopIcon.vue";

const verificationCode = ref('');
const currentStep = ref(1);
const totalSteps = 3;

const login = () => {
  // Handle login logic here
  if (verificationCode.value.length === 6) {
    currentStep.value++;
  }
};
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <VerifyTopIcon />
        <span class="app-name">SecureVerify</span>
      </div>
    </div>

    <div class="main-content">
      <div class="title">双重身份验证</div>
      <p class="subtitle">请完成身份验证以确保账户安全</p>

      <div class="step-indicator">
        <div class="step-line"></div>
        <div
            v-for="step in totalSteps"
            :key="step"
            class="step"
            :class="{ active: step === currentStep, completed: step < currentStep }"
        >
          {{ step }}
        </div>
      </div>

      <div class="form-container">
        <div class="form-group">
          <label class="form-label">手机验证码</label>
          <div class="input-container">
            <input
                v-model="verificationCode"
                type="text"
                class="verification-input"
                maxlength="6"
                placeholder="输入6位验证码"
            />
            <button @click="login" class="login-button">登录</button>
          </div>
        </div>
      </div>

      <div class="security-notice">
        <div class="notice-header">安全提示</div>
        <ul class="notice-list">
          <li>所有验证信息经过端到端加密</li>
          <li>生物信息仅用于本次验证</li>
          <li>如遇问题请联系客服处理</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 16px 24px;
  border-bottom: 1px solid #eaeaea;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.icon {
  width: 100%;
  height: 100%;
}

.app-name {
  font-size: 20px;
  font-weight: 500;
  color: #3179F6;
}

.main-content {
  padding: 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
  font-size: 21px;
}

.subtitle {
  color: #4B5563;
  margin-bottom: 32px;
  text-align: center;
  font-size: 12.25px;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
  margin-bottom: 48px;
  position: relative;
}

.step-line {
  position: absolute;
  height: 2px;
  background-color: #e0e0e0;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.step {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  color: #666;
  font-weight: bold;
  z-index: 2;
  position: relative;
  font-size: 12.25px;
}

.step.active {
  background-color: #3179F6;
  color: white;
}

.step.completed {
  background-color: #3179F6;
  color: white;
}

.form-container {
  width: 100%;
  max-width: 480px;
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12.25px;
  color: #374151;
}

.input-container {
  display: flex;
  gap: 10px;
}

.verification-input {
  flex-grow: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

.verification-input::placeholder {
  color: #6B7280;
}

.login-button {
  padding: 12px 24px;
  border: 2px solid #3179F6;
  color: #3179F6;
  background: white;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.security-notice {
  width: 100%;
  max-width: 480px;
  background-color: #EFF4FC;
  border-radius: 8px;
  padding: 16px;
}

.notice-header {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12.25px;
  line-height: 17.5px;
  letter-spacing: 0px;
  color: #374151;
}

.notice-list {
  padding-left: 16px;
  margin: 0;
  color: #555;
  font-size: 10.5px;
}

.notice-list li {
  margin-bottom: 6px;
}

.notice-list li:last-child {
  margin-bottom: 0;
}
</style>