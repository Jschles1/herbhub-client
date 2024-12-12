import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import { Dispensary, Product, ProductData } from './interfaces';

export const getDispensaryProducts = async ({
    queryKey,
}: QueryFunctionContext<[string, string]>): Promise<
    ProductData | undefined
> => {
    try {
        const [_key, param] = queryKey;
        const queryParams = param.length ? `?${param}` : '';
        const response = await axios.get(
            `/api/getDispensaryProducts${queryParams}`,
        );
        const data = response.data;
        return { products: data.products, lastUpdated: data.lastUpdated };
    } catch (e) {
        console.error('Error getting dispensary products: ', e);
        return Promise.reject(e);
    }
};

export const getProductBrands = async ({
    query,
}: {
    query: string;
}): Promise<any> => {
    try {
        const response = await axios.get(
            `/api/getProductBrands?search=${query}`,
        );
        const data = response.data;
        return data.brands;
    } catch (e) {
        console.error('Error getting product brands: ', e);
        return Promise.reject(e);
    }
};

export const getDispensaries = async ({
    query,
}: {
    query: { menuType: string; county: string };
}): Promise<any> => {
    try {
        const params = new URLSearchParams();
        params.append('menuType', query.menuType);
        params.append('county', query.county);
        const response = await axios.get(
            `/api/getDispensaries?${params.toString()}`,
        );
        const data = response.data;
        return data.dispensaries;
    } catch (e) {
        console.error('Error getting dispensaries: ', e);
        return Promise.reject(e);
    }
};

export const getProductDetail = async ({
    strain,
    dispensaryName,
    dispensaryLocation,
}: {
    strain: string;
    dispensaryName: string;
    dispensaryLocation: string;
}): Promise<
    | {
          product: Product;
          relatedProducts: Product[];
          dispensary: Dispensary;
          splitMenus: boolean;
      }
    | undefined
> => {
    try {
        const params = new URLSearchParams();
        params.append('strain', strain);
        params.append('dispensaryName', dispensaryName);
        params.append('dispensaryLocation', dispensaryLocation);
        const response = await axios.get(
            `/api/getProductDetail?${params.toString()}`,
        );
        const data = response.data;
        return {
            product: data.product,
            relatedProducts: data.relatedProducts,
            dispensary: data.dispensary,
            splitMenus: data.splitMenus,
        };
    } catch (e) {
        console.error('Error getting product detail: ', e);
        return Promise.reject(e);
    }
};
