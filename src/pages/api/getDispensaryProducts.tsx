import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { Prisma } from '@prisma/client';
import {
    getCurrentDateString,
    getDispensaryNameFromParam,
} from '../../lib/helpers';
import prismadb from '../../lib/prisma-db';

const generateFilterWhereInput = (
    param: string,
    whereInput: Prisma.ProductWhereInput,
) => {
    const paramSplit = param.split('/');
    const paramType = paramSplit[0];
    let paramValue = paramSplit[1];
    let dispensaryName = '';

    if (paramType === 'loc') {
        const index = paramValue.indexOf('-');
        const dispensaryNameFromParam = paramValue
            .slice()
            .split('')
            .splice(0, index)
            .join('')
            .replaceAll('#', ' ')
            .replace('__and__', '&')
            .replace('$', '-')
            .replace('@', ',');
        dispensaryName = getDispensaryNameFromParam(dispensaryNameFromParam);
        paramValue = paramValue
            .split('')
            .splice(index)
            .join('')
            .replace(/-/g, ' ')
            .trim();
    }

    if (paramType === 'br') {
        paramValue = paramValue.replace(/-/g, ' ').trim();
        if (paramValue.includes('  ')) {
            paramValue = paramValue.replace('  ', '- ');
        }
    }

    // Remove Parentheses from paramValue
    if (paramValue.includes('(') && paramValue.includes(')')) {
        paramValue = paramValue.replace('(', '\\(').replace(')', '\\)');
    }

    switch (paramType) {
        case 'loc':
            whereInput.dispensaryLocation = {
                equals: paramValue,
                mode: 'insensitive',
            };
            whereInput.dispensaryName = {
                equals: dispensaryName,
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            await prismadb.$connect();

            const lastUpdated = await prismadb.lastUpdated.findFirst();

            if (!lastUpdated) {
                throw new Error('No last updated date found');
            }

            const menuType =
                query.menuType === 'rec'
                    ? 'Recreational cannabis only'
                    : 'Medicinal cannabis only';

            const whereInput: Prisma.ProductWhereInput = {
                lastSold: lastUpdated.date,
                menuType: menuType,
            };
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
                        whereInput.thcPercent = { not: null };
                        orderByInput.thcPercent = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'thc-high-to-low':
                        whereInput.thcPercent = { not: null };
                        orderByInput.thcPercent = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'thc-content-low-to-high':
                        whereInput.thcContent = { not: null };
                        orderByInput.thcContent = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'thc-content-high-to-low':
                        whereInput.thcContent = { not: null };
                        orderByInput.thcContent = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-low-to-high':
                        whereInput.cbdPercent = { not: null };
                        orderByInput.cbdPercent = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-high-to-low':
                        whereInput.cbdPercent = { not: null };
                        orderByInput.cbdPercent = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-content-low-to-high':
                        whereInput.cbdContent = { not: null };
                        orderByInput.cbdContent = 'asc';
                        orderByInputs.push(orderByInput);
                        break;
                    case 'cbd-content-high-to-low':
                        whereInput.cbdContent = { not: null };
                        orderByInput.cbdContent = 'desc';
                        orderByInputs.push(orderByInput);
                        break;
                    default:
                        break;
                }
            }

            console.log({ whereInput });

            let products = await prismadb.product.findMany({
                take: 100,
                where: whereInput,
                orderBy: orderByInputs,
            });

            await prismadb.$disconnect();
            res.status(200).json({ products });
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
