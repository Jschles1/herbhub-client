import * as React from 'react';
import { Stack, Skeleton } from '@mantine/core';
import { Product } from '../../lib/interfaces';
import ProductListItem from '../molecules/ProductListItem';
import useProductData from '../../lib/hooks/useProductData';

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
    const { isLoading, isFetching } = useProductData();
    if (isLoading || isFetching) {
        return (
            <Stack>
                {Array.from({ length: 10 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        height={145}
                        animate
                        sx={{ backgroundColor: '#fff' }}
                    />
                ))}
            </Stack>
        );
    }
    return (
        <Stack>
            {products?.map((product) => (
                <ProductListItem product={product} key={product.id} />
            ))}
        </Stack>
    );
};

export default ProductList;
