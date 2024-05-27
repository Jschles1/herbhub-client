import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '../fetchers';

const useProductDetail = ({
    strain,
    dispensaryName,
    dispensaryLocation,
}: {
    strain: string;
    dispensaryName: string;
    dispensaryLocation: string;
}) => {
    return useQuery({
        queryKey: [
            'getProductDetail',
            strain,
            dispensaryName,
            dispensaryLocation,
        ],
        queryFn: () =>
            getProductDetail({ strain, dispensaryName, dispensaryLocation }),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};

export default useProductDetail;
