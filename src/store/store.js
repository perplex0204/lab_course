// store.js
import {
    createStore
} from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        token: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = null
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== null
        }
    },
    actions: {
        async login({
            commit
        }, {
            username,
            password
        }) {
            const response = await axios.post('/api/login', {
                username,
                password
            })
            const token = response.data.token

            commit('setToken', token)
        },
        async logout({
            commit
        }) {
            // 假設使用 axios 發送登出請求，並且成功後清除 token
            await axios.post('/api/logout')

            commit('clearToken')
        }
    }
})

export default store