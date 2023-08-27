<template>
    <el-menu :default-active="activeIndex" class="m-2 el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-sub-menu index="1">
            <template #title>官方網站</template>
            <div class="d-flex m-2 p-2 officialSiteLink" @click="openLink('https://getbootstrap.com/')">
                <div class="flex-grow-1 ">英文官方網站</div>
                <span class="material-icons">link</span>
            </div>
            <div class="d-flex align-content-center m-2 p-2 officialSiteLink"
                @click="openLink('https://bootstrap5.hexschool.com/')">
                <div class="flex-grow-1 ">中文官方網站</div>
                <span class="material-icons">link</span>
            </div>
        </el-sub-menu>
        <el-menu-item index="3">安裝</el-menu-item>
        <el-sub-menu index=" 2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <div>

        <h1>Main Page</h1>
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <div class="d-inline-flex p-2 bd-highlight">test div</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

const activeIndex = ref("1")
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

const openLink = (url) => {
    console.log(url)
    window.open(url, "_blank");
}
</script>

<style scoped>
.officialSiteLink:hover {
    cursor: pointer;
    color: var(--el-menu-hover-text-color);
    background-color: var(--el-color-primary-light-9);
}
</style>