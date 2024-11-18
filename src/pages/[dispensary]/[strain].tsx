import * as React from 'react';
import type {
    NextPage,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { Dispensary, Product } from '../../lib/interfaces';
import PDPTemplate from '../../components/templates/PDPTemplate';
import useProductDetail from '../../lib/hooks/useProductDetail';
import { formatDashedString, formatDispensaryName } from '../../lib/helpers';
import PDPSkeletons from '../../components/organisms/PDPSkeletons';
import { useRouter } from 'next/router';

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
            dispensaryName,
            dispensaryLocation,
        },
    };
}

const ProductPage: NextPage = ({
    strain,
    dispensaryName,
    dispensaryLocation,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data, isLoading, isError } = useProductDetail({
        strain: strain as string,
        dispensaryName: dispensaryName as string,
        dispensaryLocation: dispensaryLocation as string,
    });
    const router = useRouter();

    if (isError) {
        router.push('/404');
    }

    if (!data || isLoading) {
        return (
            <>
                <Head>
                    <title>{`${strain} - ${dispensaryName} ${dispensaryLocation}`}</title>
                </Head>
                <PDPSkeletons />
            </>
        );
    }

    const p = data.product as unknown as Product;
    const relatedPs = data.relatedProducts as unknown as Product[];
    const dispensary = data.dispensary as unknown as Dispensary;
    const splitMenus = data.splitMenus;
    return (
        <>
            <Head>
                <title>
                    {`${strain} - ${dispensaryName} ${dispensaryLocation}`}
                </title>
            </Head>
            <PDPTemplate
                product={p}
                relatedProducts={relatedPs}
                dispensary={dispensary}
                splitMenus={splitMenus}
            />
        </>
    );
};

export default ProductPage;
