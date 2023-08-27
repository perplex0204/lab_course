<template>
    <aside class="d-flex" :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="logo">
            <img :src="VueLogo" alt="Vue" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>MENU</h3>

        <div class="d-flex flex-column flex-grow-1 menu" style="overflow-x: hidden;">
            <router-link to="/axios" class="button p-3 m-3 rounded">
                <img :src="AxiosLogo" class="w-100" />
            </router-link>
            <router-link to="/bootstrap5" class="button p-3 m-3 rounded">
                <img :src="BootstrapLogo" class="w-100" />
            </router-link>
            <router-link to="/elementPlus" class="button p-3 m-3 rounded">
                <img :src="ElementUILogo" class="w-100" />
            </router-link>
            <router-link to="/echarts" class="button p-3 m-3 rounded">
                <img :src="EChartsLogo" class="w-100" />
            </router-link>
            <router-link to="/vuex" class="button p-3 m-3 rounded">
                <img :src="VueXLogo" class="w-100" />
            </router-link>
        </div>

    </aside>
</template>

<script setup>
import { ref } from 'vue'
import VueLogo from '../assets/logo.png'
import AxiosLogo from '../assets/axios.png'
import BootstrapLogo from '../assets/bootstrap.png'
import ElementUILogo from '../assets/element_ui.png'
import EChartsLogo from '../assets/echarts.png'
import VueXLogo from '../assets/vuex.png'
import axios from 'axios'

const userRole = ref()

async function validateToken(requiresAdmin = false) {
    console.log("validateToken");
    try {
        const response = await axios.post("/validate_token", {
            requires_admin: requiresAdmin,
        });
        userRole.value = response.data.role;
        console.log(userRole.value)
        return true; // token 是有效的
    } catch (error) {
        console.log(error);
        return false; // token 是無效的
    }
}

// validateToken()

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    min-height: 100%;
    padding: 1rem 1rem 0rem 1rem;
    transition: 0.2s ease-in-out;

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.2s ease-in-out;
            height: 3.5rem;
            // padding: 0.5rem 1rem;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }

        .footer {
            opacity: 0;
        }
    }

    // @media (max-width: 1024px) {
    //     position: absolute;
    //     z-index: 99;
    // }
}
</style>