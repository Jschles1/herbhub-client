import { useQuery } from '@tanstack/react-query';
import { getDispensaries } from '../fetchers';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { useQueryParams } from '../../store';

export const useProductDispensaries = () => {
    const [params] = useQueryParams();
    const urlParams = new URLSearchParams(params);
    const menuType = urlParams.get('menuType') ?? 'rec';
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['productDispensaries', menuType],
        queryFn: () => getDispensaries({ query: menuType }),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    return { data, isLoading, isFetching };
};
