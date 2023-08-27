<template>
  <div id="app" class="app d-flex">
    <!-- Sidebar -->
    <sideBar v-if="isDesktop == '電腦' && !isPathLogin" />
    <!-- Content -->
    <div class="m-2" style="width:100%; overflow: auto; overflow-x: hidden;">
      <sideBarMobile v-if="isDesktop == '手機' && !isPathLogin" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, onUnmounted, provide, watch } from 'vue'
import * as echarts from "echarts";
import { useRoute } from "vue-router"
import sideBar from './components/sideBar.vue';
import sideBarMobile from './components/sideBarMobile.vue';
provide('echarts', echarts)


const isDesktop = ref('電腦')

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


const isPathLogin = ref(false)
const route = useRoute()
watch(route, (newRoute) => {
  isPathLogin.value = newRoute.path === '/login';  // 直接改變 isPathLogin 的值
  // console.log(isPathLogin.value)
})

onMounted(() => {
  // 監聽視窗寬度的變化
  window.addEventListener('resize', handleResize)
  handleResize()
})
</script>




<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
  border-radius: 2px;
  background-color: #dadada;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

:root {
  --primary: #4f697c;
  --primary-alt: #22c55e;
  --grey: #ffffff;
  --dark: #4f697c;
  --dark-alt: #798ca875;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 10rem;
    }
  }
}
</style>
