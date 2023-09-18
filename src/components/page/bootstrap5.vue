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
        <el-menu-item index="2">安裝 Install</el-menu-item>
        <el-menu-item index="3">RWD網站設計</el-menu-item>
        <el-sub-menu index="4">
            <template #title>排版 Layout</template>
            <el-menu-item index="4-1">容器 Containers</el-menu-item>
            <el-menu-item index="4-2">網格 Grid</el-menu-item>
            <el-menu-item index="4-3">欄 Columns</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>內容 Content</template>
            <el-menu-item index="5-1">文字排版 Typography</el-menu-item>
            <el-menu-item index="5-2">表格 Tables</el-menu-item>
            <el-menu-item index="5-3">圖片、圖片區 Images/Figures</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
            <template #title>表單 Forms</template>
            <el-menu-item index="6-1">概覽 Overview</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="7">元件 Components</el-menu-item>
        <el-sub-menu index="8">
            <template #title>通用類別 Utilities</template>
            <el-menu-item index="8-2">互動 Interactions</el-menu-item>
            <el-menu-item index="8-3">透明度、溢出 Opacity/Overflow</el-menu-item>
            <el-menu-item index="8-4">Flex、垂直對齊 Flex/Vertical alignment</el-menu-item>
            <el-menu-item index="8-5">位置、尺寸、間隔 Position/Sizing/Spacing</el-menu-item>
            <el-menu-item index="8-6">陰影 Shadows</el-menu-item>
            <el-menu-item index="8-7">文字 Text</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="9">Icons</el-menu-item>
        <!-- <el-sub-menu index=" 2">
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
        </el-sub-menu> -->
    </el-menu>
    <install class="card m-2" v-if="activeIndex == '2'"></install>
    <rwdBreakPoint class="card m-2" v-if="activeIndex == '3'"></rwdBreakPoint>
    <layoutContainer class="card m-2" v-if="activeIndex == '4-1'"></layoutContainer>
    <layoutGrid class="card m-2" v-if="activeIndex == '4-2'"></layoutGrid>
    <layoutColumns class="card m-2" v-if="activeIndex == '4-3'"></layoutColumns>
    <contentTypography class="card m-2" v-if="activeIndex == '5-1'"></contentTypography>
    <contentTables class="card m-2" v-if="activeIndex == '5-2'"></contentTables>
    <contentImages class="card m-2" v-if="activeIndex == '5-3'"></contentImages>
    <formsOverview class="card m-2" v-if="activeIndex == '6-1'"></formsOverview>
    <components class="card m-2" v-if="activeIndex == '7'"></components>
    <utilitiesInteractions class="card m-2" v-if="activeIndex == '8-2'"></utilitiesInteractions>
    <utilitiesOpacity class="card m-2" v-if="activeIndex == '8-3'"></utilitiesOpacity>
    <utilitiesFlex class="card m-2" v-if="activeIndex == '8-4'"></utilitiesFlex>
</template>

<script setup>
import { ref } from "vue"
import install from './bootstrap5/install.vue'
import rwdBreakPoint from "./bootstrap5/rwdBreakPoint.vue";
import layoutContainer from "./bootstrap5/layoutContainer.vue";
import layoutGrid from "./bootstrap5/layoutGrid.vue"
import layoutColumns from "./bootstrap5/layoutColumns.vue"
import contentTypography from "./bootstrap5/contentTypography.vue"
import contentImages from "./bootstrap5/contentImages.vue"
import contentTables from "./bootstrap5/contentTables.vue"
import formsOverview from "./bootstrap5/formsOverview.vue"
import components from "./bootstrap5/components.vue"
import utilitiesInteractions from "./bootstrap5/utilitiesInteractions.vue"
import utilitiesOpacity from "./bootstrap5/utilitiesOpacity.vue"
import utilitiesFlex from "./bootstrap5/utilitiesFlex.vue"

const activeIndex = ref("2")
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
    activeIndex.value = key
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