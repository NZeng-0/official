<template>
  <div class="verification-container">
    <div class="verification-box">
      <div class="header">
        <div class="title">滑动验证</div>
        <img src="@/assets/images/mobile/slide/v2/more.png" alt="icon" style="width: 29.75px;height: 5.25px;">
      </div>
      <img src="@/assets/images/mobile/slide/v2/bg.png" alt="icon"
           style="margin-top: 30px; margin-bottom: 20px; width: 289px;height: 140px;">
      <VueDragVerify
          :width="300"
          :height="40"
          text="向右滑动完成验证"
          successText="验证成功"
          @success="handleSuccess"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
               width="17.5" height="24.5" viewBox="0 0 17.5 24.5">
            <defs>
              <clipPath id="master_svg0_229_33259">
                <rect x="0" y="3.5" width="17.5" height="17.5" rx="0"/>
              </clipPath>
            </defs>
            <g>
              <rect x="0" y="0" width="17.5" height="24.5" rx="0" fill="#000000" fill-opacity="0"/>
              <g clip-path="url(#master_svg0_229_33259)">
                <g transform="matrix(1,0,0,-1,0,34.001953125)">
                  <g>
                    <path
                        d="M13.9111,17.3085935625L17.1924,20.5898465625L13.9111,17.3085935625L17.1924,20.5898465625Q17.5,20.9316365625,17.5,21.3759765625Q17.5,21.8203165625,17.1924,22.1621065625L13.9111,25.4433565625Q13.5693,25.7509765625,13.125,25.7509765625Q12.6807,25.7509765625,12.3389,25.4433565625Q12.0312,25.1015665625,12.0312,24.6572265625Q12.0312,24.2128865625,12.3389,23.8710965625L13.7744,22.4697265625L3.72559,22.4697265625L5.16113,23.8710965625Q5.46875,24.2128865625,5.46875,24.6572265625Q5.46875,25.1015665625,5.16113,25.4433565625Q4.81934,25.7509765625,4.375,25.7509765625Q3.93066,25.7509765625,3.58887,25.4433565625L0.307617,22.1621065625Q0,21.8203165625,0,21.3759765625Q0,20.9316365625,0.307617,20.5898465625L3.58887,17.3085935625Q3.93066,17.0009765625,4.375,17.0009765625Q4.81934,17.0009765625,5.16113,17.3085935625Q5.46875,17.6503905625,5.46875,18.0947265625Q5.46875,18.5390665625,5.16113,18.8808565625L3.72559,20.2822265625L13.7744,20.2822265625L12.3389,18.8808565625Q12.0312,18.5390665625,12.0312,18.0947265625Q12.0312,17.6503905625,12.3389,17.3085935625Q12.6807,17.0009765625,13.125,17.0009765625Q13.5693,17.0009765625,13.9111,17.3085935625Z"
                        fill="#A78BFA" fill-opacity="1"/>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </template>
      </VueDragVerify>
    </div>

    <div class="verification-tip">
      <img class="icon" src="@/assets/images/mobile/slide/v2/bottom.png" alt="icon">
      <div>
        <div style="margin-bottom: 5px">温馨提示</div>
        <div>请将滑块拖动到指定位置完成验证。验证通过后将自动跳转到下一页面。</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import VueDragVerify from "@/components/dragVerify.vue";

const sliderPosition = ref(0)
const isDragging = ref(false)
const maxSliderWidth = 300 // Adjust based on your design

function startDrag(event) {
  isDragging.value = true
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

function onDrag(event) {
  if (!isDragging.value) return

  const containerRect = event.target.getBoundingClientRect()
  let newPosition = event.clientX - containerRect.left

  // Constrain slider position
  newPosition = Math.max(0, Math.min(newPosition, maxSliderWidth))
  sliderPosition.value = newPosition

  // Check if verification is complete (e.g., 90% of the way)
  if (newPosition >= maxSliderWidth * 0.9) {
    verificationSuccess()
  }
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)

  // Reset if not fully verified
  if (sliderPosition.value < maxSliderWidth * 0.9) {
    sliderPosition.value = 0
  }
}

function verificationSuccess() {
  // Add your success logic here, like navigation
  console.log('Verification successful!')
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
}

.title {
  font-size: 15.75px;
  color: #4C1D95;
}

.verification-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 100%);
}

.verification-box {
  width: 350px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.slider-track {
  height: 50px;
  background-color: #e6f2ff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
}

.slider-hint {
  color: #4a90e2;
  display: flex;
  align-items: center;
  gap: 10px;
}

.slider-block {
  width: 50px;
  height: 50px;
  background-color: #4a90e2;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  cursor: grab;
  z-index: 10;
  transition: background-color 0.3s;
}

.slider-block:active {
  cursor: grabbing;
  background-color: #3a7bd5;
}

.verification-tip {
  margin: 20px;
  display: flex;
  align-items: center;
  background: rgba(245, 243, 255, 0.3);
  box-sizing: border-box;
  border: 1px solid rgba(237, 233, 254, 0.5);
  padding: 10px 15px;
  border-radius: 8px;
  max-width: 350px;
  color: #6D28D9;
  font-size: 12.25px;
}

.verification-tip .icon {
  width: 11.81px;
  height: 24.5px;
  margin-right: 10px;
}
</style>