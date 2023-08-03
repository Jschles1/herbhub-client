import * as React from 'react';
import type {
    NextPage,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';
import sanitizeHtml from 'sanitize-html';
import { Product } from '../../lib/interfaces';
import PDPTemplate from '../../components/templates/PDPTemplate';

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDashedString(str: string, splitChar = '-') {
    return str
        .split(splitChar)
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');
}

function formatDispensaryName(str: string) {
    const [dispensaryName, ...dispensaryLocation] = str.split('-');
    return {
        dispensaryName: dispensaryName,
        dispensaryLocation: dispensaryLocation.join('-'),
    };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let { strain, dispensary } = context.query;
    let { dispensaryName, dispensaryLocation } = formatDispensaryName(
        dispensary as string,
    );
    strain = formatDashedString(strain as string);
    dispensaryName = formatDashedString(dispensaryName);
    dispensaryLocation = formatDashedString(dispensaryLocation, ' ');

    if (!strain || !dispensaryName || !dispensaryLocation) {
        return {
            notFound: true,
            props: {},
        };
    }

    const prisma = new PrismaClient();

    const product = await prisma.product.findFirst({
        where: {
            dispensaryName: {
                equals: dispensaryName,
                mode: 'insensitive',
            },
            dispensaryLocation: {
                equals: dispensaryLocation,
                mode: 'insensitive',
            },
            strain: {
                equals: strain,
                mode: 'insensitive',
            },
        },
    });

    if (!product) {
        return {
            notFound: true,
            props: {},
        };
    } else {
        product.description = sanitizeHtml(product.description);
    }

    const relatedProducts = await prisma.product.findMany({
        where: {
            dispensaryName: {
                equals: dispensaryName,
                mode: 'insensitive',
            },
            dispensaryLocation: {
                equals: dispensaryLocation,
                mode: 'insensitive',
            },
            categoryType: {
                equals: product.categoryType,
                mode: 'insensitive',
            },
            strain: {
                not: product.strain,
                mode: 'insensitive',
            },
        },
        take: 6,
    });

    console.log({
        props: {
            product,
            relatedProducts,
            seoProductName: strain,
            seoDispensaryName: dispensaryName,
            seoDispensaryLocation: dispensaryLocation,
        },
    });

    return {
        props: {
            product,
            relatedProducts,
            seoProductName: strain,
            seoDispensaryName: dispensaryName,
            seoDispensaryLocation: dispensaryLocation,
        },
    };
}

const ProductPage: NextPage = ({
    product,
    relatedProducts,
    seoDispensaryLocation,
    seoDispensaryName,
    seoProductName,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const p = product as unknown as Product;
    const relatedPs = relatedProducts as unknown as Product[];
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
