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
                const orderByInput: Prisma.ProductOrderByWithRelationInput = {};
                switch (query.sortBy) {
                    case 'alphabetical':
                        orderByInput.strain = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'price-low-to-high':
                        orderByInput.lowestPrice = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'price-high-to-low':
                        orderByInput.lowestPrice = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'thc-low-to-high':
                        whereInput.thc = { not: 0 };
                        orderByInput.thc = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'thc-high-to-low':
                        whereInput.thc = { not: 0 };
                        orderByInput.thc = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-low-to-high':
                        whereInput.cbd = { not: 0 };
                        orderByInput.cbd = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-high-to-low':
                        whereInput.cbd = { not: 0 };
                        orderByInput.cbd = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    default:
                        break;
                }
            }

            let products = await prisma.product.findMany({
                take: 100,
                where: whereInput,
                orderBy: orderByInputs,
            });

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
