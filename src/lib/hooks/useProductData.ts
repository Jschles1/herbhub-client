import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from '../../store';
import { getDispensaryProducts } from '../fetchers';

const useProductData = () => {
    const [params] = useQueryParams();
    // console.log(params);
    return useQuery({
        queryKey: ['getDispensaryProducts', params],
        queryFn: getDispensaryProducts,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};

export default useProductData;
