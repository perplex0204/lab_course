<template>
    <div>
        <div class="m-2">
            <span class="fs-3">1. 範例</span>
            <el-link class="m-2" type="info" href="https://getbootstrap.com/docs/5.0/forms/overview/"
                target="_blank">官方文檔(英)</el-link>
            <el-link class="m-2" type="info" href="https://bootstrap5.hexschool.com/docs/5.1/forms/overview/"
                target="_blank">官方文檔(中)</el-link>
        </div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example" disabled>
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked"> Checked checkbox </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" disabled>
                <label class="form-check-label" for="flexCheckChecked"> disabled checkbox </label>
            </div>
            <label for="customRange1" class="form-label">disabled range</label>
            <input type="range" class="form-range" id="customRange1">
            <label for="customRange1" class="form-label">Example range</label>
            <input type="range" class="form-range" id="customRange1" disabled>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div v-highlight="'html'" class="border mb-2 mx-2 ps-4">
            <div class="d-flex justify-content-end m-0 p-0">
                <span class="label bg-secondary text-white">html</span>
            </div>
            <pre class="m-0">
                <code>
&lt;form&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;exampleInputEmail1&quot; class=&quot;form-label&quot;&gt;Email address&lt;/label&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleInputEmail1&quot; aria-describedby=&quot;emailHelp&quot;&gt;
        &lt;div id=&quot;emailHelp&quot; class=&quot;form-text&quot;&gt;We&#39;ll never share your email with anyone else.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3&quot;&gt;
        &lt;label for=&quot;exampleInputPassword1&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
        &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleInputPassword1&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;mb-3 form-check&quot;&gt;
        &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;exampleCheck1&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;exampleCheck1&quot;&gt;Check me out&lt;/label&gt;
    &lt;/div&gt;
    &lt;select class=&quot;form-select&quot; aria-label=&quot;Default select example&quot;&gt;
        &lt;option selected&gt;Open this select menu&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;/select&gt;
    &lt;select class=&quot;form-select&quot; aria-label=&quot;Default select example&quot; disabled&gt;
        &lt;option selected&gt;Open this select menu&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;/select&gt;
    &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckDefault&quot;&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckDefault&quot;&gt; Default checkbox &lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckChecked&quot; checked&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckChecked&quot;&gt; Checked checkbox &lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;form-check&quot;&gt;
        &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckChecked&quot; disabled&gt;
        &lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckChecked&quot;&gt; disabled checkbox &lt;/label&gt;
    &lt;/div&gt;
    &lt;label for=&quot;customRange1&quot; class=&quot;form-label&quot;&gt;disabled range&lt;/label&gt;
    &lt;input type=&quot;range&quot; class=&quot;form-range&quot; id=&quot;customRange1&quot;&gt;
    &lt;label for=&quot;customRange1&quot; class=&quot;form-label&quot;&gt;Example range&lt;/label&gt;
    &lt;input type=&quot;range&quot; class=&quot;form-range&quot; id=&quot;customRange1&quot; disabled&gt;
    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
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