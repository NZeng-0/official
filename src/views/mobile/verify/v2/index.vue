<script setup>
import { ref } from "vue";

const password = ref("");
const showPassword = ref(false);

function submitPassword () {
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h2 class="title">欢迎访问</h2>
      <p class="desc">请输入访问密码继续浏览</p>

      <van-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="请输入访问密码"
          class="input-field"
          right-icon='eye-o'
          @click-right-icon="showPassword = !showPassword"
      />

      <van-button block type="primary" class="confirm-btn" @click="submitPassword">
        确认
      </van-button>
    </div>
  </div>
</template>

<style>
.input-field input::-ms-reveal,
.input-field input::-webkit-credentials-auto-fill-button {
  display: none;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #FFFFFF;
}
.card {
  background: white;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 16px;
  margin-right: 16px;
}
.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}
.desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}
.input-field {
  margin-bottom: 15px;
  background: #F3F4F6;
  border-radius: 4px;
}
.confirm-btn {
  background: #4a3aff;
  border-radius: 8px;
  font-size: 16px;
}
</style>
