import type { NextApiRequest, NextApiResponse } from 'next';
import sanitizeHtml from 'sanitize-html';
import prismadb from '../../lib/prisma-db';

const generateProductDescription = (
    description: string,
    url: string | null,
) => {
    if (url) {
        let domain = new URL(url).origin;
        description = description.replace(/href="([^"]*)"/g, (match, p1) => {
            return p1.startsWith('http') ? match : `href="${domain}${p1}"`;
        });
    }
    return sanitizeHtml(description);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            await prismadb.$connect();

            let { strain, dispensaryName, dispensaryLocation } = query;

            if (!strain || !dispensaryName || !dispensaryLocation) {
                console.log('Missing query params');
                return {
                    notFound: true,
                    props: {},
                };
            }

            let product = await prismadb.product.findFirst({
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
                product = await prismadb.product.findFirst({
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
                    product.description = generateProductDescription(
                        product.description,
                        product.url,
                    );
                }
            } else {
                product.description = generateProductDescription(
                    product.description,
                    product.url,
                );
            }

            const relatedProducts = await prismadb.product.findMany({
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

            await prismadb.$disconnect();
            res.status(200).json({ product, relatedProducts });
        } catch (e) {
            console.error(e);
            await prismadb.$disconnect();
            res.status(500).json({ message: e });
        }
    } else {
        res.status(400).json({ message: 'Unauthenticated' });
    }
};

export default handler;
