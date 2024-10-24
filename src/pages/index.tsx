import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useProductData from '../lib/hooks/useProductData';
import PLPTemplate from '../components/templates/PLPTemplate';
import { Product, ProductData } from '../lib/interfaces';

const Home: NextPage = () => {
    const { isLoading, error, data, isFetching, isError } = useProductData();

    const productData = data as ProductData;

    return (
        <>
            <Head>
                <title>Garden State Herbhub</title>
            </Head>
            <PLPTemplate
                products={productData?.products}
                lastUpdated={productData?.lastUpdated}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
            />
        </>
    );
};

export default Home;
