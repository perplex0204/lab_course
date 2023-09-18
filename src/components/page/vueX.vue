<template>
    <el-menu :default-active="activeIndex" class="m-2 el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
    <div>
        <h1>Main Page</h1>
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <div class="d-inline-flex p-2 bd-highlight">test div</div>
                    <div>
                        {{ userStore.username.value }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <el-input class="m-2" v-model="username">
        </el-input>
        <el-button @click="uploadUserName">upload</el-button>
    </div>
</template>

<script setup>
import { ref, inject } from "vue"


const stores = inject('stores')

const { userStore, cartStore } = stores

const activeIndex = ref("1")
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

const username = ref('test')
const uploadUserName = () => {
    console.log(username.value)
    userStore.login(username.value)
}
</script>