import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { Prisma } from '@prisma/client';

const generateFilterWhereInput = (
    param: string,
    whereInput: Prisma.ProductWhereInput,
) => {
    const paramSplit = param.split('/');
    const paramType = paramSplit[0];
    let paramValue = paramSplit[1];

    if (paramType === 'loc') {
        const index = paramValue.indexOf('-');
        paramValue = paramValue
            .split('')
            .splice(index)
            .join('')
            .replace(/-/g, ' ')
            .trim();
    }

    if (paramType === 'br') {
        paramValue = paramValue.replace(/-/g, ' ').trim();
    }

    switch (paramType) {
        case 'loc':
            whereInput.dispensaryLocation = {
                equals: paramValue,
                mode: 'insensitive',
            };
            break;
        case 'br':
            whereInput.brand = {
                equals: paramValue,
                mode: 'insensitive',
            };
            break;
        case 'type':
            whereInput.categoryType = {
                equals: paramValue,
                mode: 'insensitive',
            };
            break;
        case 'str':
            whereInput.strainType = {
                equals: paramValue,
                mode: 'insensitive',
            };
            break;
        default:
            break;
    }
};

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            await prisma.$connect();

            const whereInput: Prisma.ProductWhereInput = {};
            const orderByInputs: Prisma.ProductOrderByWithRelationInput[] = [];

            if (query.search) {
                whereInput.strain = {
                    contains: query.search as string,
                    mode: 'insensitive',
                };
            }

            if (query.filter) {
                if (query.filter.includes(',')) {
                    const filterSplit = (query.filter as string).split(',');
                    for (const filterParam of filterSplit) {
                        generateFilterWhereInput(filterParam, whereInput);
                    }
                } else {
                    generateFilterWhereInput(
                        query.filter as string,
                        whereInput,
                    );
                }
            }

            if (query.sortBy) {
                switch (query.sortBy) {
                    case 'alphabetical':
                        const input: Prisma.ProductOrderByWithRelationInput = {
                            strain: 'asc',
                        };
                        orderByInputs.push(input);
                        break;
                    case 'thc-low-to-high':
                    case 'thc-high-to-low':
                        whereInput.thc = { not: 0 };
                    case 'cbd-low-to-high':
                    case 'cbd-high-to-low':
                        whereInput.cbd = { not: 0 };
                    default:
                        break;
                }
            }

            let products = await prisma.product.findMany({
                take: 100,
                where: whereInput,
                orderBy: orderByInputs,
            });

            if (query.sortBy === 'thc-low-to-high') {
                products = products.sort((a, b) => a.thc - b.thc);
            }

            if (query.sortBy === 'thc-high-to-low') {
                products = products.sort((a, b) => b.thc - a.thc);
            }

            if (query.sortBy === 'cbd-low-to-high') {
                products = products.sort((a, b) => a.cbd - b.cbd);
            }

            if (query.sortBy === 'cbd-high-to-low') {
                products = products.sort((a, b) => b.cbd - a.cbd);
            }

            if (query.sortBy === 'price-low-to-high') {
                products = products.sort((a, b) => {
                    const aPrice = (a as any).price;
                    const bPrice = (b as any).price;
                    const aPromoPrice = (a as any).promoPrice;
                    const bPromoPrice = (b as any).promoPrice;
                    if (aPrice && bPrice && aPromoPrice && bPromoPrice) {
                        let aAveragePrice: number;
                        let bAveragePrice: number;
                        const aPrices = (Object.values(aPrice) as any).filter(
                            (pr: any) => typeof pr === 'number',
                        );
                        const bPrices = (Object.values(bPrice) as any).filter(
                            (pr: any) => typeof pr === 'number',
                        );
                        const aPromoPrices = (
                            Object.values(aPromoPrice) as any
                        ).filter((pr: any) => typeof pr === 'number');
                        const bPromoPrices = (
                            Object.values(bPromoPrice) as any
                        ).filter((pr: any) => typeof pr === 'number');

                        if (aPromoPrices.length) {
                            if (aPromoPrices.length > 1) {
                                aAveragePrice =
                                    aPromoPrices.reduce(
                                        (a: number, b: number) => a + b,
                                        0,
                                    ) / aPromoPrices.length;
                            } else {
                                aAveragePrice = aPromoPrices[0];
                            }
                        } else {
                            if (aPrices.length > 1) {
                                aAveragePrice =
                                    aPrices.reduce(
                                        (a: number, b: number) => a + b,
                                        0,
                                    ) / aPrices.length;
                            } else {
                                aAveragePrice = aPrices[0];
                            }
                        }

                        if (bPromoPrices.length) {
                            if (bPromoPrices.length > 1) {
                                bAveragePrice =
                                    bPromoPrices.reduce(
                                        (a: number, b: number) => a + b,
                                        0,
                                    ) / bPromoPrices.length;
                            } else {
                                bAveragePrice = bPromoPrices[0];
                            }
                        } else {
                            if (bPrices.length > 1) {
                                bAveragePrice =
                                    bPrices.reduce(
                                        (a: number, b: number) => a + b,
                                        0,
                                    ) / bPrices.length;
                            } else {
                                bAveragePrice = bPrices[0];
                            }
                        }

                        return aAveragePrice - bAveragePrice;
                    }
                    return 0;
                });
            }

            await prisma.$disconnect();
            res.status(200).json({ products });
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
