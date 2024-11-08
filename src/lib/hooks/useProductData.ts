import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from '../../store';
import { getDispensaryProducts } from '../fetchers';
import React from 'react';

const useProductData = () => {
    const [params] = useQueryParams();
    // const queryClient = useQueryClient();

    // React.useEffect(() => {
    //     console.log('Current params:', {
    //         raw: params,
    //         parsed: new URLSearchParams(params).toString(),
    //         hour: new URLSearchParams(params).get('timestamp'),
    //     });

    //     const queryKey = ['getDispensaryProducts', params];
    //     const cachedData = queryClient.getQueryData(queryKey);
    //     console.log('Cache status:', {
    //         hasCache: !!cachedData,
    //         queryKey,
    //         timestamp: new Date().toISOString(),
    //     });
    // }, [params, queryClient]);

    const query = useQuery({
        queryKey: ['getDispensaryProducts', params],
        queryFn: getDispensaryProducts,
        // onSuccess: () => {
        //     console.log('Query succeeded, key:', [
        //         'getDispensaryProducts',
        //         params,
        //     ]);
        // },
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    return query;
};

export default useProductData;
