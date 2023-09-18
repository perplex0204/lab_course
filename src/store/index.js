import {
    useUserStore
} from './modules/useUserStore';
import {
    useCartStore
} from './modules/useCartStore';
import {
    useProductsStore
} from './modules/useProductsStore';

export const setupStores = () => {
    const userStore = useUserStore();
    const cartStore = useCartStore();
    const productsStore = useProductsStore();

    return {
        userStore,
        cartStore,
        productsStore,
    };
};