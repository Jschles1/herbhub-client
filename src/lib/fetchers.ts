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
