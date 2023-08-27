import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    createWebHistory,
    createRouter
} from 'vue-router'
import router from './router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/store.js'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
const vm = createApp(App)

axios.defaults.baseURL = "http://140.118.172.169:5001";

vm.directive("highlight", {
    mounted(el, binding) {
        const blocks = el.querySelectorAll("pre code");
        const language = binding.value; // 获取指令的绑定值

        blocks.forEach(block => {
            const codeToHighlight = block.textContent || block.innerText;
            const highlightedCode = hljs.highlight(language, codeToHighlight).value;
            block.innerHTML = highlightedCode;
        });
    }
});


// 部屬用
// axios.defaults.baseURL = "http://210.242.178.151:8085/api/";

vm.use(router)
vm.use(ElementPlus)
vm.use(store)
vm.use(hljsVuePlugin)
vm.use(VueAxios, axios).mount('#app')