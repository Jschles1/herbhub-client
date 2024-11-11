import { useQuery } from '@tanstack/react-query';
import { getProductBrands } from '../fetchers';
import { CATEGORY_FILTERS } from '../../lib/constants';

const initialData = CATEGORY_FILTERS[2].options;

export const useProductBrands = (query: string) => {
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['productBrands', query],
        queryFn: () => !!query && getProductBrands({ query }),
        initialData: query ? undefined : initialData,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    if (!query) {
        return { data: initialData, isLoading: false };
    }
    return { data, isLoading, isFetching };
};
