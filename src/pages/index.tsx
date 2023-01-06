import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import useProductData from '../lib/hooks/useProductData';
import PLPTemplate from '../components/templates/PLPTemplate';
import { Product } from '../lib/interfaces';

const Home: NextPage = () => {
    const { isLoading, error, data, isFetching, isError } = useProductData();

    if (data) {
        // console.log(data);
    }

    return (
        <>
            <Head>
                <title>HerbHub NJ</title>
            </Head>
            <PLPTemplate
                products={data as Product[]}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
            />
        </>
    );
};

export default Home;
