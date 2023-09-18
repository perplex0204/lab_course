<template>
    <div>
        <div class="m-2">
            <span class="fs-3">1. 文字選擇</span>
        </div>
        <p class="user-select-all">當使用者點選時，這個段落將會被全選。</p>
        <p class="user-select-auto">這個段落具有預設的選取行為。</p>
        <p class="user-select-none">當使用者點選的時候，此段落將不會被選取</p>
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
            <span class="fs-3">2. Pointer 事件</span>
        </div>
        <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">這個連結</a> 不可被點選</p>
        <p><a href="#" class="pe-auto">這個連結</a> 可以被點選 (此為預設行為).</p>
        <p class="pe-none"><a href="#" tabindex="-1" aria-disabled="true">這個連結</a> 無法被點選，因為其 <code>pointer-events</code>
            屬性繼承自父層。然而 <a href="#" class="pe-auto">這個連結</a> 具有 <code>pe-auto</code> 類別，因此可以被點選。</p>
        <div v-highlight="'bash'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">bash</span>
            </div>
            <pre class="m-0">
                <code>
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;pe-none&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;這個連結&lt;/a&gt; 不可被點選&lt;/p&gt;
&lt;p&gt;&lt;a href=&quot;#&quot; class=&quot;pe-auto&quot;&gt;這個連結&lt;/a&gt; 可以被點選 (此為預設行為).&lt;/p&gt;
&lt;p class=&quot;pe-none&quot;&gt;&lt;a href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;這個連結&lt;/a&gt; 無法被點選，因為其 &lt;code&gt;pointer-events&lt;/code&gt;
    屬性繼承自父層。然而 &lt;a href=&quot;#&quot; class=&quot;pe-auto&quot;&gt;這個連結&lt;/a&gt; 具有 &lt;code&gt;pe-auto&lt;/code&gt; 類別，因此可以被點選。&lt;/p&gt;
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