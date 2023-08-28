<template>
    <div>
        <div class="m-2">
            <span class="fs-3">1. Images</span>
        </div>
        <a href="https://bootstrap5.hexschool.com/docs/5.1/content/tables/" class="m-2 link-primary">中文文檔</a>
        <a href="https://getbootstrap.com/docs/5.0/content/tables/" class="m-2 link-primary">英文文檔</a>
        <el-divider class="mx-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">2. Figures</span>
        </div>
        <a href="https://bootstrap5.hexschool.com/docs/5.1/content/figures/" class="m-2 link-primary">中文文檔</a>
        <a href="https://getbootstrap.com/docs/5.0/content/figures/" class="m-2 link-primary">英文文檔</a>
    </div>
</template>

<script setup>
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import { ref } from "vue"
</script>

<style scoped>
* {
    text-align: start;
}
</style>