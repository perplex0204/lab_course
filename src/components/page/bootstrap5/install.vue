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
&lt;link href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; integrity=&quot;sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU&quot; crossorigin=&quot;anonymous&quot;&gt;

&lt;script src=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js&quot; integrity=&quot;sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
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