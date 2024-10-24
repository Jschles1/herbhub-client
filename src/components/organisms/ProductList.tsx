import * as React from 'react';
import { Stack, Skeleton, Pagination, Group } from '@mantine/core';
import { Product } from '../../lib/interfaces';
import ProductListItem from '../molecules/ProductListItem';
import useProductData from '../../lib/hooks/useProductData';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = ({ products = [] }) => {
    const [activePage, setPage] = React.useState(1);
    const { isLoading, isFetching } = useProductData();
    const isMobile = useMediaQuery('(max-width: 750px)');
    const pages = Math.floor(products.length / 20);

    React.useEffect(() => {
        setPage(1);
    }, [products]);

    const showProducts = products.slice(
        (activePage - 1) * 20,
        (activePage - 1) * 20 + 20,
    );

    const hasPages = pages > 1;

    if (isLoading || isFetching) {
        return (
            <Stack>
                {Array.from({ length: 20 }).map((_, index) => (
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
            {isMobile ? (
                <Group mb="md">
                    {showProducts?.map((product) => (
                        <ProductListItem product={product} key={product.id} />
                    ))}
                </Group>
            ) : (
                <Stack mb="md">
                    {showProducts?.map((product) => (
                        <ProductListItem product={product} key={product.id} />
                    ))}
                </Stack>
            )}
            {hasPages && (
                <Pagination
                    page={activePage}
                    onChange={setPage}
                    total={pages}
                    initialPage={1}
                    position="center"
                    getItemAriaLabel={(page) => {
                        if (page === 'prev') return 'Previous page';
                        if (page === 'next') return 'Next page';
                        const numberSuffix =
                            page === 2 ? 'nd' : page === 1 ? 'st' : 'th';
                        return `${page}${numberSuffix} page`;
                    }}
                />
            )}
        </>
    );
};

export default ProductList;
