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
    console.log('capitalizeFirstLetter', str);
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function formatDashedString(str: string, splitChar = '-') {
    const hasDash = splitChar === '-' && str.includes('---');
    if (hasDash) {
        str = str.replace('---', '***');
    }

    let finalString = str
        .split(splitChar)
        .map((word) => capitalizeFirstLetter(word))
        .join(' ');

    if (hasDash) {
        finalString = finalString.replace('***', ' - ');
    }

    return finalString;
}

function formatDispensaryName(str: string) {
    const [dispensaryName, ...dispensaryLocation] = str.split('-');
    return {
        dispensaryName: dispensaryName,
        dispensaryLocation: dispensaryLocation.join('-'),
    };
}

const prisma = new PrismaClient();

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

    console.log({ strain, dispensaryName, dispensaryLocation });

    let product = await prisma.product.findFirst({
        where: {
            dispensaryName: {
                equals: dispensaryName,
            },
            dispensaryLocation: {
                equals: dispensaryLocation,
            },
            strain: {
                equals: strain,
            },
        },
    });

    if (!product) {
        console.log('Product not found, trying partial match');
        product = await prisma.product.findFirst({
            where: {
                dispensaryName: {
                    equals: dispensaryName,
                },
                dispensaryLocation: {
                    equals: dispensaryLocation,
                },
                strain: {
                    contains: strain.slice(0, 5),
                },
            },
        });

        if (!product) {
            console.log('Product not found');
            return {
                notFound: true,
                props: {},
            };
        } else {
            product.description = sanitizeHtml(product.description);
        }
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

    await prisma.$disconnect();

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
