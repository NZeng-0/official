<script setup>
import dragVerify from "@/components/dragVerify.vue";
import {ref} from "vue";

const isPassing6 = ref(false)
const dragVerify6 = ref(null)

function passcallback2() {
}
function reset(){
  dragVerify6.value.reset()
}
</script>

<template>
  <div class="box">
    <div class="card">
      <!-- 标题 -->
      <h2 class="title">访问验证</h2>
      <p class="desc">请完成滑块验证以证明您不是机器人</p>

      <div class="slider">
        <drag-verify
            ref="dragVerify6"
            :isPassing.sync="isPassing6"
            text="向右滑动完成验证"
            successText="验证通过"
            handlerIcon="el-icon-d-arrow-right"
            successIcon="el-icon-circle-check"
            @passcallback="passcallback2"
        >
        </drag-verify>
      </div>
      <!-- 重新验证按钮 -->
      <div class="retry-btn" @click="reset">
        <span>重新验证</span>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* 全局居中 */
.box {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f9fc;
  font-family: Arial, sans-serif;
}

/* 白色卡片 */
.card {
  width: 3.5rem;
  height: 2rem;
  text-align: center;
  background: #fff;
  border-radius: 0.12rem;
  box-shadow: 0rem 0.04rem 0.08rem rgba(0, 0, 0, 0.1);
}

/* 标题 */
.title {
  font-size: 0.20rem;
  font-weight: bold;
  color: #333;
}

/* 提示文本 */
.desc {
  font-size: 0.14rem;
  color: #666;
}
.slider{
  display: flex;
  justify-content: center;
}

/* 重新验证按钮 */
.retry-btn {
  width: 100%;
  margin-top: 0.16rem;
  color: #6B7280;
  border: none;
  font-size: 0.14rem;
  cursor: pointer;
  transition: background 0.3s;
}
</style>
