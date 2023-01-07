import * as React from 'react';
import type {
    NextPage,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next';
import Head from 'next/head';
import { PrismaClient } from '@prisma/client';
import { Product } from '../../lib/interfaces';
import PDPTemplate from '../../components/templates/PDPTemplate';

// function that capitalizes the first letter of a string
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// function that takes a string, replaces all "-" with " ", and capitalizes the first letter of each word
function formatDashedString(str: string, splitChar = '-') {
    return str
        .split(splitChar)
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');
}

// function that takes a string that includes dispensary name and dispenary location separated by a dash, and returns an object with the dispensary name and location. dispensary location may possiblly have a dash in it, so we need to split the string by the first dash and then join the rest of the string back together
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
        include: {
            price: true,
            promoPrice: true,
        },
    });

    if (!product) {
        return {
            notFound: true,
            props: {},
        };
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
        include: {
            price: true,
            promoPrice: true,
        },
        take: 6,
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
    const p = product as Product;
    const relatedPs = relatedProducts as Product[];
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
