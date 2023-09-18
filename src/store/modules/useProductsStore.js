import {
    ref
} from 'vue';

export const useProductsStore = () => {
    const productsList = ref([]);

    const setProducts = (products) => {
        productsList.value = products;
    };

    return {
        productsList,
        setProducts,
    };
};