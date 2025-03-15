<script setup>

</script>

<template>
  <div class="box">
    <div class="container">
      <div class="title">
        <!-- Logo -->
        <img src="../../assets/images/desktop/logo.png" class="logo" alt="logo"/>
        <!-- 标题 -->
        <div class="sub_title">密码访问验证</div>
        <!-- 说明 -->
        <div class="description">
          <img src="../../assets/images/desktop/safe.png" class="safe" alt="safe">
          安全访问：请输入访问密码以继续浏览
        </div>
      </div>
      <!-- 输入框 + 按钮 -->
      <div class="input-container">
        <img src="../../assets/images/desktop/lock.png" alt="lock" class="lock" />
        <input type="password" placeholder="请输入访问密码" class="password-input">
        <button class="submit-button">验证</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 全局样式 */
.box {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
  background: #f7f9fc;
  font-family: Arial, sans-serif;
}

.lock{
  width: 0.14rem;
  height: 0.16rem;
}

.logo {
  width: 0.52rem;
  height: 0.36rem;
}

.title {
  text-align: center;
  margin-top: 0.08rem;
}

.safe {
  width: 0.1594rem;
  height: 0.1591rem;
  margin-right: 0.08rem;
}

/* 容器居中 */
.input-container {

}

/* 标题 */
.sub_title {
  font-size: 0.24rem;
  color: #333;
  margin: 0 0.12rem;
}

/* 说明 */
.description {
  font-size: 0.14rem;
  color: #666;
  margin-top: 0.05rem;
  display: flex;
  align-items: center;
  justify-content: center
}

.input-container {
  width: 4.48rem;
  height: 1.08rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0.02rem 0.04rem -0.02rem rgba(0, 0, 0, 0.1),
  0 0.04rem 0.06rem -0.01rem rgba(0, 0, 0, 0.1);
  padding: 0 0.2rem;
  gap: 0.1rem;
  margin-top: 0.18rem;
}

.password-input {
  flex: 1;
  height: 0.44rem;
  border: none;
  padding-left: 0.2rem;
  font-size: 0.16rem;
  color: #333;
  outline: none;
  background: #F9FAFB;
}

.password-input::placeholder {
  color: #999;
}

.submit-button {
  width: 0.6rem;
  height: 0.32rem;
  font-size: 0.14rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 0.08rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: #2563eb;
}

</style>