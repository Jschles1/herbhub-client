import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import sanitizeHtml from 'sanitize-html';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            await prisma.$connect();

            let { strain, dispensaryName, dispensaryLocation } = query;

            if (!strain || !dispensaryName || !dispensaryLocation) {
                console.log('Missing query params');
                return {
                    notFound: true,
                    props: {},
                };
            }

            let product = await prisma.product.findFirst({
                where: {
                    dispensaryName: {
                        equals: dispensaryName as string,
                    },
                    dispensaryLocation: {
                        equals: dispensaryLocation as string,
                    },
                    strain: {
                        equals: strain as string,
                    },
                },
            });

            if (!product) {
                console.log('Product not found, trying partial match');
                product = await prisma.product.findFirst({
                    where: {
                        dispensaryName: {
                            equals: dispensaryName as string,
                        },
                        dispensaryLocation: {
                            equals: dispensaryLocation as string,
                        },
                        strain: {
                            contains: (strain as string).slice(0, 5),
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
                        equals: dispensaryName as string,
                        mode: 'insensitive',
                    },
                    dispensaryLocation: {
                        equals: dispensaryLocation as string,
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

            await prisma.$disconnect();
            res.status(200).json({ product, relatedProducts });
        } catch (e) {
            console.error(e);
            await prisma.$disconnect();
            res.status(500).json({ message: e });
        }
    } else {
        res.status(400).json({ message: 'Unauthenticated' });
    }
};

export default handler;
