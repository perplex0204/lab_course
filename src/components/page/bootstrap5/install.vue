<template>
    <div>
        <div class="m-2">
            <span class="fs-3">1. 使用CDN安裝</span>
        </div>
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
            <span class="fs-3">2. 使用npm安裝</span>
        </div>
        <div v-highlight="'bash'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">bash</span>
            </div>
            <pre class="m-0">
                <code>
$ npm install bootstrap
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