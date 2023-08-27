import {
    createWebHistory,
    createRouter
} from 'vue-router'
import main from '../components/page/main.vue'
import axiosPage from '../components/page/axios.vue'
import bootstrap5Page from '../components/page/bootstrap5.vue'
import echartsPage from '../components/page/eCharts.vue'
import elementPlusPage from '../components/page/elementPlus.vue'
import vuexPage from '../components/page/vueX.vue'
import notFoundPage from '../components/page/notFound.vue'
import axios from "axios"
import login from '../components/page/login.vue'

const routes = [{
        path: '/',
        redirect: '/axios'
    }, {
        path: '/login',
        name: 'login',
        component: login,
    }, {
        path: '/axios',
        name: 'axios',
        component: axiosPage,
    },
    {
        path: '/bootstrap5',
        name: 'bootstrap5',
        component: bootstrap5Page,
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: echartsPage,
    },
    {
        path: '/elementPlus',
        name: 'elementPlus',
        component: elementPlusPage,
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: vuexPage,
    },
    {
        path: '/:catchAll(.*)', // 匹配所有路徑
        name: 'NotFound',
        component: notFoundPage, // 404頁面的組件,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// async function validateToken(requiresAdmin = false) {
//     console.log("this page need validateToken");
//     try {
//         const response = await axios.post("/validate_token", {
//             requires_admin: requiresAdmin,
//         });
//         return true; // token 是有效的
//     } catch (error) {
//         console.log(error);
//         return false; // token 是無效的
//     }
// }

// router.beforeEach(async (to, from, next) => {
//     const token = localStorage.getItem("token");

//     // console.log(to.meta.requiresAuth);

//     if (!token && to.path !== "/login") {
//         // 如果沒有 token 或是to.path不等於/login，則跳轉到登入頁面
//         return next("/login");

//     } else if (to.meta.requiresAuth || to.meta.requiresAdmin) {
//         // 如果路由需要驗證，則驗證 token 是否有效
//         const isValidToken = await validateToken(to.meta.requiresAdmin);
//         if (isValidToken) {
//             next();
//         } else {
//             return next("/login"); // 跳轉到登入頁面
//         }
//     } else {
//         next();
//     }
// });

// axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = token;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axios.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         const status = error.response ? error.response.status : null;
//         if (status === 401) {
//             // 如果請求返回 401 錯誤，表示 token 失效或無效，需要重新登入
//             localStorage.removeItem("token");
//             // 跳轉到登入頁面
//             window.location.href = "/login";
//         }
//         return Promise.reject(error);
//     }
// );

export default router;