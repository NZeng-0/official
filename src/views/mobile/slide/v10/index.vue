<script setup>
import { ref } from "vue";

const isVerified = ref(false);

const handleVerify = () => {
  isVerified.value = true;
};
</script>

<template>
  <div class="container">
    <div class="title_box">
      <div class="title">安全验证</div>
    </div>
    <!-- 标题 -->
    <div class="subtitle-container">
      <p class="subtitle">
        为了确保账户安全，请完成身份验证
      </p>
      <p class="subtitle">
        验证完成后将自动跳转
      </p>
    </div>

    <!-- 验证区域 -->
    <div class="verify-box">
      <div class="verify-button-container">
        <button class="verify-btn" @click="handleVerify">
          <img src="@/assets/images/mobile/slide/shield-icon.png" class="icon" alt="shield" />
          <span>点击验证</span>
        </button>
      </div>
      <p class="verify-text">请点击按钮开始验证</p>
    </div>

    <!-- 额外信息 -->
    <div class="info-box">
      <div class="info-card">
        <div class="info-icon-container">
          <img src="@/assets/images/mobile/slide/encrypt-icon.png" class="info-icon" alt="encrypt" />
        </div>
        <div class="info-content">
          <p class="info-title">安全防护</p>
          <p class="info-desc">全程加密</p>
        </div>
      </div>
      <div class="info-card">
        <div class="info-icon-container">
          <img src="@/assets/images/mobile/slide/lock-icon.png" class="info-icon" alt="lock" />
        </div>
        <div class="info-content">
          <p class="info-title">隐私保护</p>
          <p class="info-desc">严格审核</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 主体背景 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f8fbff, #eef3f9);
  text-align: center;
}

.title_box{
  width: 100%;
  height: 50px;
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 21px;
  row-gap: 0px;
  flex-wrap: wrap;
  align-content: center;
  background: white;
}

/* 标题 */
.title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

/* 副标题容器 */
.subtitle-container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}

/* 副标题 */
.subtitle {
  font-size: 15px;
  color: #5a6570;
  line-height: 1.8;
  margin: 0;
}

/* 验证框 */
.verify-box {
  background: white;
  width: 90%;
  max-width: 400px;
  padding: 30px 0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
  margin-left: 16px;
  margin-right: 16px;
}

/* 验证按钮容器 */
.verify-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  background: #F9FAFB;
  padding: 5px 0;
  margin-left: 20px;
  margin-right: 20px;
}

/* 验证按钮 */
.verify-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background: white;
  color: #3377ff;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(51, 119, 255, 0.15);
}

/* 按钮图标 */
.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #3377ff;
}

/* 提示文字 */
.verify-text {
  font-size: 14px;
  color: #8c96a1;
  margin-top: 12px;
}

/* 额外信息区域 */
.info-box {
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 90%;
  max-width: 400px;
}

/* 信息卡片 */
.info-card {
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

/* 信息图标容器 */
.info-icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

/* 信息图标 */
.info-icon {
  width: 30px;
  height: 30px;
}

/* 信息内容 */
.info-content {
  display: flex;
  flex-direction: column;
}

/* 信息标题 */
.info-title {
  font-size: 13px;
  color: #8c96a1;
  margin: 0 0 4px 0;
}

/* 信息描述 */
.info-desc {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin: 0;
}
</style>