<script setup>
import {ref} from "vue";
import {showToast} from "vant";

const password = ref("");

const verifyAccess = () => {
  if (!password.value) {
    showToast("请输入 6 位数字密码");
    return;
  }
  showToast("验证成功");
};
</script>

<template>
  <div class="bg">
    <div class="container">
      <img src="@/assets/images/mobile/pwd9.png" class="pwd9bg" alt="pwd9">
      <div style="text-align: center">
        <h3 class="title">访问验证</h3>
        <p class="desc">请输入您的访问密码以继续操作</p>
      </div>

      <div class="box">
        <label class="label">访问密码</label>
        <van-field
            v-model="password"
            type="password"
            maxlength="6"
            placeholder="请输入 6 位数字密码"
            class="input-field"
        />

        <van-button
            type="primary"
            block
            class="verify-btn"
            @click="verifyAccess"
        >
          验证访问
        </van-button>

        <div class="safe-options">
          <div class="safe-item">
            <span>安全加密</span>
          </div>
          <div class="safe-item">
            <img src="@/assets/images/mobile/fingerprint.png" alt="指纹">
            <span>身份验证</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pwd9bg {
  height: 200px;
  position: absolute;
  left: -30px;
  top: 80px;
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
  background: linear-gradient(to right, #6a5af9, #905cff);
  -webkit-background-clip: text;
  color: transparent;
}

.desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.box {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.label {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  display: block;
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
  margin-top: 10px;
  border: none;
}

.safe-options {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.safe-item {
  font-size: 14px;
  color: #666;
  width: 100px;
  border-radius: 16px;
  opacity: 1;

  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 0px 0px;
  flex-wrap: wrap;
  align-content: center;

  background: #F9FAFB;

}

.safe-item img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
