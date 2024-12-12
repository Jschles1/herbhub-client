import { useQuery } from '@tanstack/react-query';
import { getDispensaries } from '../fetchers';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { useQueryParams } from '../../store';

export const useProductDispensaries = () => {
    const [params] = useQueryParams();
    const urlParams = new URLSearchParams(params);
    const menuType = urlParams.get('menuType') ?? 'rec';
    const filter = urlParams.get('filter') ?? '';
    let county = '';
    if (filter) {
        const filters = filter.split(',');
        for (const f of filters) {
            if (f.includes('county')) {
                if (county.length > 0) {
                    county += `,${f.split('/')[1]}`;
                } else {
                    county = f.split('/')[1];
                }
            }
        }
    }
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['productDispensaries', menuType, county],
        queryFn: () => getDispensaries({ query: { menuType, county } }),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    return { data, isLoading, isFetching };
};
