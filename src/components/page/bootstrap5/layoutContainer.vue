<template>
    <div>
        <div class="m-2 d-flex align-items-center">
            <span class="fs-3">Layout Containers</span>
            <el-link class="m-2" type="info" href="https://getbootstrap.com/docs/5.0/layout/containers/"
                target="_blank">官方文檔(英)</el-link>
            <el-link class="m-2" type="info" href="https://bootstrap5.hexschool.com/docs/5.1/layout/containers/"
                target="_blank">官方文檔(中)</el-link>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">預設容器、響應式容器、流體容器</span>
            <span class="m-2">(layoutContainer.html)</span>
            <div class="container bg-secondary">Container</div>
            <div class="container-sm bg-warning">100% wide until small breakpoint</div>
            <div class="container-md bg-secondary">100% wide until medium breakpoint</div>
            <div class="container-lg bg-warning">100% wide until large breakpoint</div>
            <div class="container-xl bg-secondary">100% wide until extra large breakpoint</div>
            <div class="container-xxl bg-warning">100% wide until extra extra large breakpoint</div>
            <div class="container-fluid bg-secondary">Fluid Container</div>
            <div v-highlight="'html'" class="border m-2 ps-4">
                <div class="d-flex justify-content-end m-0 p-0">
                    <span class="label bg-secondary text-white">html</span>
                </div>
                <pre class="m-0">
                <code>
&lt;div class=&quot;container bg-secondary&quot;&gt;Container&lt;/div&gt;
&lt;div class=&quot;container-sm bg-warning&quot;&gt;100% wide until small breakpoint&lt;/div&gt;
&lt;div class=&quot;container-md bg-secondary&quot;&gt;100% wide until medium breakpoint&lt;/div&gt;
&lt;div class=&quot;container-lg bg-warning&quot;&gt;100% wide until large breakpoint&lt;/div&gt;
&lt;div class=&quot;container-xl bg-secondary&quot;&gt;100% wide until extra large breakpoint&lt;/div&gt;
&lt;div class=&quot;container-xxl bg-warning&quot;&gt;100% wide until extra extra large breakpoint&lt;/div&gt;
&lt;div class=&quot;container-fluid bg-secondary&quot;&gt;Fluid Container&lt;/div&gt;
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