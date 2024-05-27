import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '../fetchers';

const useProductDetail = ({
    strain,
    dispensary,
}: {
    strain: string;
    dispensary: string;
}) => {
    return useQuery({
        queryKey: ['getProductDetail', strain, dispensary],
        queryFn: () => getProductDetail({ strain, dispensary }),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};

export default useProductDetail;
