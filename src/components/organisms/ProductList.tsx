import * as React from 'react';
import { Stack, Skeleton, Pagination } from '@mantine/core';
import { Product } from '../../lib/interfaces';
import ProductListItem from '../molecules/ProductListItem';
import useProductData from '../../lib/hooks/useProductData';

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products = [] }) => {
    const [activePage, setPage] = React.useState(1);
    const { isLoading, isFetching } = useProductData();
    const pages = Math.floor(products.length / 20);

    React.useEffect(() => {
        setPage(1);
    }, [products]);

    const showProducts = products.slice(
        (activePage - 1) * 20,
        (activePage - 1) * 20 + 20,
    );

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
        <>
            <Stack mb="md">
                {showProducts?.map((product) => (
                    <ProductListItem product={product} key={product.id} />
                ))}
            </Stack>
            {!!products.length && (
                <Pagination
                    page={activePage}
                    onChange={setPage}
                    total={pages}
                    initialPage={1}
                    position="center"
                />
            )}
        </>
    );
};

export default ProductList;
