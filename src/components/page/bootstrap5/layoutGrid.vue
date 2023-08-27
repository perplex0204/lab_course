<template>
    <div>
        <div class="m-2 d-flex align-items-center">
            <span class="fs-3">Layout Grid</span>
            <el-link class="m-2" type="info" href="https://getbootstrap.com/docs/5.0/layout/grid/"
                target="_blank">官方文檔(英)</el-link>
            <el-link class="m-2" type="info" href="https://bootstrap5.hexschool.com/docs/5.1/layout/grid/"
                target="_blank">官方文檔(中)</el-link>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">自動排版、設置其中一個欄位的寬度</span>
            <div class="container-fluid border m-2">
                <div class="row">
                    <div class="col border">
                        1 of 2
                    </div>
                    <div class="col border">
                        2 of 2
                    </div>
                </div>
                <div class="row">
                    <div class="col border">
                        1 of 3
                    </div>
                    <div class="col border">
                        2 of 3
                    </div>
                    <div class="col border">
                        3 of 3
                    </div>
                </div>
                <div class="row">
                    <div class="col border">
                        1 of 4
                    </div>
                    <div class="col border">
                        2 of 4
                    </div>
                    <div class="col border">
                        3 of 4
                    </div>
                    <div class="col border">
                        4 of 4
                    </div>
                </div>
                <div class="row">
                    <div class="col border border-primary">
                        1 of 4
                    </div>
                    <div class="col-6 border border-primary">
                        2 of 4 (col-6)
                    </div>
                    <div class="col border border-primary">
                        3 of 4
                    </div>
                    <div class="col border border-primary">
                        4 of 4
                    </div>
                </div>
                <div class="row">
                    <div class="col border border-danger">
                        1 of 6
                    </div>
                    <div class="col border border-danger">
                        2 of 6
                    </div>
                    <div class="col border border-danger">
                        3 of 6
                    </div>
                    <div class="col border border-danger">
                        4 of 6
                    </div>
                    <div class="col border border-danger">
                        5 of 6
                    </div>
                    <div class="col border border-danger">
                        6 of 6
                    </div>
                </div>
            </div>
            <div v-highlight="'html'" class="border m-2 ps-4">
                <div class="d-flex justify-content-end m-0 p-0">
                    <span class="label bg-secondary text-white">html</span>
                </div>
                <pre class="m-0">
                <code>
&lt;div class=&quot;container-fluid border m-2&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col border&quot;&gt;
            1 of 2
        &lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;
            2 of 2
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col border&quot;&gt;
            1 of 3
        &lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;
            2 of 3
        &lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;
            3 of 3
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
                </code>
            </pre>
            </div>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">水平堆疊</span>
            <div class="container-fluid m-2">
                <div class="row">
                    <div class="col-sm-8 border">col-sm-8</div>
                    <div class="col-sm-4 border">col-sm-4</div>
                </div>
                <div class="row">
                    <div class="col-sm border">col-sm</div>
                    <div class="col-sm border">col-sm</div>
                    <div class="col-sm border">col-sm</div>
                </div>
            </div>
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
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">設定列與欄</span>
            <div class="container m-2">
                <div class="row row-cols-2">
                    <div class="col border">Column</div>
                    <div class="col border">Column</div>
                    <div class="col border">Column</div>
                    <div class="col border">Column</div>
                </div>
            </div>
            <div v-highlight="'html'" class="border m-2 ps-4">
                <div class="d-flex justify-content-end m-0 p-0">
                    <span class="label bg-secondary text-white">html</span>
                </div>
                <pre class="m-0">
                <code>
&lt;div class=&quot;container m-2&quot;&gt;
    &lt;div class=&quot;row row-cols-2&quot;&gt;
        &lt;div class=&quot;col border&quot;&gt;Column&lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;Column&lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;Column&lt;/div&gt;
        &lt;div class=&quot;col border&quot;&gt;Column&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
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