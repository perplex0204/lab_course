<template>
    <div>
        <div class="m-2 d-flex align-items-center">
            <span class="fs-3">Layout Columns</span>
            <el-link class="m-2" type="info" href="https://getbootstrap.com/docs/5.0/layout/containers/"
                target="_blank">官方文檔(英)</el-link>
            <el-link class="m-2" type="info" href="https://bootstrap5.hexschool.com/docs/5.1/layout/containers/"
                target="_blank">官方文檔(中)</el-link>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <div class="container-fluid">
                <div class="row align-items-start border" style="height: 100px;">
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                </div>
                <div class="row align-items-center border" style="height: 100px;">
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                </div>
                <div class="row align-items-end border" style="height: 100px;">
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                    <div class="col border border-primary"> One of three columns </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row border" style="height: 100px;">
                    <div class="col align-self-start border border-primary"> One of three columns </div>
                    <div class="col align-self-center border border-primary"> One of three columns </div>
                    <div class="col align-self-end border border-primary"> One of three columns </div>
                </div>
            </div>
            <div v-highlight="'html'" class="border my-2 ps-4">
                <div class="d-flex justify-content-end m-0 p-0">
                    <span class="label bg-secondary text-white">html</span>
                </div>
                <pre class="m-0">
                <code>
&lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;row align-items-start border&quot; style=&quot;height: 100px;&quot;&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row align-items-center border&quot; style=&quot;height: 100px;&quot;&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row align-items-end border&quot; style=&quot;height: 100px;&quot;&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;



&lt;div class=&quot;container-fluid&quot;&gt;
    &lt;div class=&quot;row border&quot; style=&quot;height: 100px;&quot;&gt;
        &lt;div class=&quot;col align-self-start border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col align-self-center border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
        &lt;div class=&quot;col align-self-end border border-primary&quot;&gt;
            One of three columns
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                </code>
            </pre>
            </div>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">實際舉例：亞福家用儲能主畫面</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    text-align: start;
}
</style>