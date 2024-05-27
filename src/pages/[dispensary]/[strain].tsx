import * as React from 'react';
import type {
    NextPage,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { Product } from '../../lib/interfaces';
import PDPTemplate from '../../components/templates/PDPTemplate';
import useProductDetail from '../../lib/hooks/useProductDetail';
import { formatDashedString, formatDispensaryName } from '../../lib/helpers';
import PDPSkeletons from '../../components/organisms/PDPSkeletons';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let { strain, dispensary } = context.query;
    let { dispensaryName, dispensaryLocation } = formatDispensaryName(
        dispensary as string,
    );
    strain = formatDashedString(strain as string);
    dispensaryName = formatDashedString(dispensaryName);
    dispensaryLocation = formatDashedString(dispensaryLocation, ' ');

    if (!strain || !dispensaryName || !dispensaryLocation) {
        console.log('Missing query params');
        return {
            notFound: true,
            props: {},
        };
    }

    return {
        props: {
            strain,
            dispensary,
            seoProductName: strain,
            seoDispensaryName: dispensaryName,
            seoDispensaryLocation: dispensaryLocation,
        },
    };
}

const ProductPage: NextPage = ({
    strain,
    dispensary,
    seoDispensaryLocation,
    seoDispensaryName,
    seoProductName,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data, isLoading } = useProductDetail({
        strain: strain as string,
        dispensary: dispensary as string,
    });

    if (!data || isLoading) {
        return <PDPSkeletons />;
    }

    const p = data.product as unknown as Product;
    const relatedPs = data.relatedProducts as unknown as Product[];
    return (
        <>
            <Head>
                <title>
                    {`${seoProductName} - ${seoDispensaryName} ${seoDispensaryLocation}`}
                </title>
            </Head>
            <PDPTemplate product={p} relatedProducts={relatedPs} />
        </>
    );
};

export default ProductPage;
