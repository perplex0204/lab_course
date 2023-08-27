<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import logoURL from '../assets/logo.png'
import AxiosLogo from '../assets/axios.png'
import BootstrapLogo from '../assets/bootstrap.png'
import ElementUILogo from '../assets/element_ui.png'
import EChartsLogo from '../assets/echarts.png'
import VueXLogo from '../assets/vuex.png'
const showMenuBool = ref(false)
const currentPage = ref('主畫面')

function closeMenu() {
    showMenuBool.value = !showMenuBool.value
    console.log('closeMenu')
}

const menuBG = ref()
async function showMenu() {
    showMenuBool.value = !showMenuBool.value
    console.log('showMenu')
}

function toBs() {
    window.location.href = '/bootstrap5'
}

function toElementPlus() {
    window.location.href = '/elementPlus'
}

function toEcharts() {
    window.location.href = '/echarts'
}

function toVueX() {
    window.location.href = '/vuex'
}

function toAxios() {
    window.location.href = '/axios'
}

</script>

<template>
    <div class="topnav mx-2">
        <div class="row m-2 p- align-items-center">
            <div class="col-10 fs-2">
                <div class="fw-bold" style="color: white;"><img class="me-4" :src="logoURL" alt="Vue" />實驗室課程</div>
            </div>
            <div class="menuDiv col-2">
                <span class="material-icons text-white" @click="showMenu">menu</span>
            </div>
        </div>
    </div>
    <!-- Menu -->
    <div class="menuBG d-flex align-items-center" ref="menuBG" v-if="showMenuBool" @click="">
        <div class="container" style="margin-top: 1rem; margin-bottom: 1rem;">
            <div class="row align-items-center">
                <div class="col">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center"
                        @click="toAxios">
                        <img class="w-50 h-50" :src="AxiosLogo" alt="">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col justify-content-end">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center" @click="toBs">
                        <img class="w-50 h-50" :src="BootstrapLogo" alt="">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col justify-content-end">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center"
                        @click="toElementPlus">
                        <img class="w-50 h-50" :src="ElementUILogo" alt="">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col justify-content-end">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center"
                        @click="toEcharts">
                        <img class="w-50 h-50" :src="EChartsLogo" alt="">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col justify-content-end">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center"
                        @click="toVueX">
                        <img class="w-50 h-50" :src="VueXLogo" alt="">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col justify-content-end">
                    <div class="pageButton d-inline-flex p-2 bd-highlight fs-1 d-flex justify-content-center"
                        @click="closeMenu">關閉目錄</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 2rem;
}


/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #04AA6D;
    color: white;
}


.pageButton {
    margin: 1rem;
    padding: auto;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.pageButton:hover {
    background-color: rgba(160, 158, 158, 0.207);
    cursor: pointer;
}

@keyframes openMenu {
    0% {
        background-color: rgba(0, 0, 0, 0);
        color: rgba(255, 255, 255, 0)
    }

    100% {
        background-color: rgba(0, 0, 0, 0.85);
        color: rgba(255, 255, 255, 1)
    }
}

.menuBG {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    color: #dbdbdb;
    z-index: 9999;
    /* 設置 z-index 屬性，確保覆蓋在其他元素之上 */
    animation: openMenu 0.2s ease-in-out;
}

#test {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 2s ease-in-out;
}

.menuIcon {
    color: rgba(255, 255, 255, 1);
    width: 50px;
    height: 50px;
}

.menuDiv {
    border-radius: 5px;
}

.menuDiv:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
}
</style>