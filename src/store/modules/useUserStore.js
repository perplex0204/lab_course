import {
    defineStore
} from 'pinia';

import {
    ref
} from 'vue'

export const useUserStore = () => {
    const username = ref(null);
    const isLoggedIn = ref(false);

    const login = (newUsername) => {
        console.log("Type of newUsername:", typeof newUsername); // 檢查類型
        console.log("Value of newUsername:", newUsername);
        username.value = newUsername;
        isLoggedIn.value = true;
    };

    const logout = () => {
        username.value = null;
        isLoggedIn.value = false;
    };

    return {
        username,
        isLoggedIn,
        login,
        logout,
    };
};