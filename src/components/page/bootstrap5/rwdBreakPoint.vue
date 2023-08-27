<template>
    <div>
        <div class="m-2 d-flex align-items-center">
            <span class="fs-3">RWD Breakpoints</span>
            <el-link class="m-2" type="info" href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
                target="_blank">官方文檔(英)</el-link>
            <el-link class="m-2" type="info" href="https://bootstrap5.hexschool.com/docs/5.1/layout/breakpoints/"
                target="_blank">官方文檔(中)</el-link>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="d-flex flex-row justify-content-around m-2">
            <img class="h-50 w-50" :src="RWD_image" alt="">
            <img class="h-25 w-25" :src="RWD_pros_cons" alt="">
        </div>
        <div v-highlight="'javascript'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">javascript</span>
            </div>
            <pre class="m-0">
                <code>
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
                </code>
            </pre>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2 d-flex align-items-center">
            <span class="fs-3">範例網站</span>
            <el-link class="m-2" type="info" href="https://chat.openai.com/" target="_blank">ChatGPT</el-link>
            <el-link class="m-2" type="info" href="https://ieeexplore-ieee-org.ezproxy.lib.ntust.edu.tw/Xplore/home.jsp"
                target="_blank">IEEE</el-link>
            <el-link class="m-2" type="info" href="https://www.gamer.com.tw/" target="_blank">巴哈姆特</el-link>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2 align-items-center">
            <span class="fs-3">範例程式</span>
            <div v-highlight="'javascript'" class="border mb-2 mx-2 ps-4">
                <div class="d-flex justify-content-end m-0 p-0">
                    <span class="label bg-secondary text-white">javascript</span>
                </div>
                <pre class="m-0">
                <code>
function handleResize() {
  // 當視窗寬度大於等於 768px 時，顯示桌面版導覽列
  if (window.innerWidth >= 768) {
    isDesktop.value = '電腦'
    console.log('設備:', isDesktop.value)
  } else {
    isDesktop.value = '手機'
    console.log('設備:', isDesktop.value)
  }
  // console.log(isDesktop.value)
}

onMounted(() => {
  // 監聽視窗寬度的變化
  window.addEventListener('resize', handleResize)
  handleResize()
})
                </code>
            </pre>
            </div>
        </div>
    </div>
</template>

<script setup>
import RWD_image from '../../../assets/RWD.png'
import RWD_pros_cons from '../../../assets/RWD_pros_cons.jpg'
</script>

<style scoped>
* {
    text-align: start;
}
</style>