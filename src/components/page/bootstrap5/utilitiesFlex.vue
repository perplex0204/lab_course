<template>
    <div>
        <div class="m-2">
            <span class="fs-3">1. 透明度</span>
        </div>
        <div class="opacity-100 bg-primary">100</div>
        <div class="opacity-75 bg-primary">75</div>
        <div class="opacity-50 bg-primary">50</div>
        <div class="opacity-25 bg-primary">25</div>
        <div v-highlight="'html'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">html</span>
            </div>
            <pre class="m-0">
                <code>
&lt;head&gt;
  &lt;link href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; integrity=&quot;sha384wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0&quot; crossorigin=&quot;anonymous&quot;/&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js&quot; integrity=&quot;sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
                </code>
            </pre>
        </div>
        <el-divider class="m-2"></el-divider>
        <div class="m-2">
            <span class="fs-3">2. Overflow</span>
        </div>
        <div class="d-flex flex-row">
            <div class="overflow-auto m-2" style="height: 100px; width: 100px;">
                <p>overflow-auto</p>
                <p>overflow-auto</p>
            </div>
            <div class="overflow-hidden m-2" style="height: 100px; width: 100px;">
                <p>overflow-hidden</p>
                <p>overflow-hidden</p>
            </div>
            <div class="overflow-visible m-2" style="height: 100px; width: 100px;">
                <p>overflow-visible</p>
                <p>overflow-visible</p>
            </div>
            <div class="overflow-scroll m-2" style="height: 100px; width: 100px;">
                <p>overflow-scroll</p>
                <p>overflow-scroll</p>
            </div>
        </div>
        <div v-highlight="'bash'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">bash</span>
            </div>
            <pre class="m-0">
                <code>
&lt;div class=&quot;d-flex flex-row&quot;&gt;
    &lt;div class=&quot;overflow-auto m-2&quot; style=&quot;height: 100px; width: 100px;&quot;&gt;
        &lt;p&gt;overflow-auto&lt;/p&gt;
        &lt;p&gt;overflow-auto&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;overflow-hidden m-2&quot; style=&quot;height: 100px; width: 100px;&quot;&gt;
        &lt;p&gt;overflow-hidden&lt;/p&gt;
        &lt;p&gt;overflow-hidden&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;overflow-visible m-2&quot; style=&quot;height: 100px; width: 100px;&quot;&gt;
        &lt;p&gt;overflow-visible&lt;/p&gt;
        &lt;p&gt;overflow-visible&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;overflow-scroll m-2&quot; style=&quot;height: 100px; width: 100px;&quot;&gt;
        &lt;p&gt;overflow-scroll&lt;/p&gt;
        &lt;p&gt;overflow-scroll&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
                </code>
            </pre>
        </div>
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