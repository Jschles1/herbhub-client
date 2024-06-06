import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from './interfaces';

export const getDispensaryProducts = async ({
    queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Product[] | undefined> => {
    try {
        const [_key, param] = queryKey;
        const queryParams = param.length ? `?${param}` : '';
        const response = await axios.get(
            `/api/getDispensaryProducts${queryParams}`,
        );
        const data = response.data;
        return data.products;
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
        };
    } catch (e) {
        console.error('Error getting product detail: ', e);
        return Promise.reject(e);
    }
};
