<script setup>
import lock from  "@/assets/images/mobile/lock.png"
import {ref} from "vue";
import {showToast} from "vant";

const password = ref("");

const verifyAccess = () => {
  if (!password.value) {
    showToast("请输入访问密码");
    return;
  }
  showToast("验证成功");
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <div style="text-align: center;">
        <img src="@/assets/images/mobile/auth.png" class="auth" alt="auth"/>
        <h3 class="title">访问验证</h3>
        <p class="desc">请输入安全密码以继续访问</p>
      </div>
      <div class="box">
        <p class="p">访问密码</p>
        <van-field
            v-model="password"
            :left-icon="lock"
            type="password"
            icon-prefix="van-icon__image"
            placeholder="请输入密码"
            class="input-field"
        />
        <van-button type="primary" block class="verify-btn" @click="verifyAccess">
          验证访问 →
        </van-button>
        <div class="fingerprint">
          <img src="@/assets/images/mobile/fingerprint.png" alt="指纹"/>
          <span>系统将进行身份安全验证</span>
        </div>
      </div>
      <div class="copy">
        © 2024 All Rights Reserved
      </div>
    </div>
  </div>
</template>

<style>
.input-field{
  justify-content: center;
}
.van-icon__image{
  width: 12.25px;
  height: 14px;
}
.copy{
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0px;

  font-feature-settings: "kern" on;
  color: #9CA3AF;
  margin-top: 32px;
}
.auth{
  width: 48px;
  height: 56px;
}
.p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  font-feature-settings: "kern" on;
  color: #374151;
  text-align: left;
}

.bg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/images/mobile/pwd7bg.png");
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

h3 {
  text-align: center;
}

.box {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.desc {
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0px;

  font-feature-settings: "kern" on;
  color: #6B7280;
}


.input-field {
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
  background-color: #6366f1;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 0;
}

.fingerprint {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #888;
}

.fingerprint img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
