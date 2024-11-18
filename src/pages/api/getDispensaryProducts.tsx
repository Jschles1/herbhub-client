import type { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../lib/prisma-db';
import sqlDb from '../../db/drizzle';
import {
    lastUpdated as lastUpdatedTable,
    products as productsTable,
    brands as brandsTable,
    dispensaries as dispensariesTable,
} from '../../db/schema';
import { and, asc, desc, eq, ilike, or, sql, SQL } from 'drizzle-orm';

const generateFilterWhereInput = (
    param: string,
    whereFilters: Map<string, SQL<unknown>[]>,
) => {
    const paramSplit = param.split('/');
    const paramType = paramSplit[0];
    let paramValue = paramSplit[1];

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
            whereFilters.set('dispensaryId', [
                eq(productsTable.dispensaryId, paramValue),
            ]);
            break;
        case 'br':
            if (whereFilters.has('brandName')) {
                whereFilters
                    .get('brandName')!
                    .push(ilike(brandsTable.name, `%${paramValue}%`));
            } else {
                whereFilters.set('brandName', [
                    ilike(brandsTable.name, `%${paramValue}%`),
                ]);
            }
            break;
        case 'type':
            if (whereFilters.has('categoryType')) {
                whereFilters
                    .get('categoryType')!
                    .push(eq(productsTable.categoryType, paramValue));
            } else {
                whereFilters.set('categoryType', [
                    eq(productsTable.categoryType, paramValue),
                ]);
            }
            break;
        case 'str':
            if (whereFilters.has('strainType')) {
                whereFilters
                    .get('strainType')!
                    .push(
                        eq(
                            productsTable.strainType,
                            paramValue.replace('-', ' '),
                        ),
                    );
            } else {
                whereFilters.set('strainType', [
                    eq(productsTable.strainType, paramValue.replace('-', ' ')),
                ]);
            }
            break;
        default:
            break;
    }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;
            const lastUpdatedDate = (
                await sqlDb.select().from(lastUpdatedTable)
            )[0].date;

            await prismadb.$connect();

            const lastUpdated = await prismadb.lastUpdated.findFirst();

            if (!lastUpdated) {
                throw new Error('No last updated date found');
            }

            const menuType =
                query.menuType === 'rec'
                    ? 'Recreational cannabis only'
                    : 'Medicinal cannabis only';

            // const;
            const whereFiltersMap: Map<string, SQL<unknown>[]> = new Map();
            const orderByFilter = [];
            whereFiltersMap.set('lastSold', [
                eq(productsTable.lastSold, lastUpdatedDate),
            ]);
            whereFiltersMap.set('menuType', [
                eq(productsTable.menuType, menuType),
            ]);

            if (query.search) {
                whereFiltersMap.set('strain', [
                    ilike(productsTable.strain, `%${query.search}%`),
                ]);
            }

            if (query.filter) {
                if (query.filter.includes(',')) {
                    const filterSplit = (query.filter as string).split(',');
                    for (const filterParam of filterSplit) {
                        generateFilterWhereInput(filterParam, whereFiltersMap);
                    }
                } else {
                    generateFilterWhereInput(
                        query.filter as string,
                        whereFiltersMap,
                    );
                }
            }

            if (query.sortBy) {
                switch (query.sortBy) {
                    case 'alphabetical':
                        orderByFilter.push(asc(productsTable.strain));
                        break;
                    case 'price-low-to-high':
                        orderByFilter.push(asc(productsTable.lowestPrice));
                        break;
                    case 'price-high-to-low':
                        orderByFilter.push(desc(productsTable.lowestPrice));
                        break;
                    case 'thc-low-to-high':
                        orderByFilter.push(asc(productsTable.thcPercent));
                        break;
                    case 'thc-high-to-low':
                        orderByFilter.push(desc(productsTable.thcPercent));
                        break;
                    case 'thc-content-low-to-high':
                        orderByFilter.push(asc(productsTable.thcContent));
                        break;
                    case 'thc-content-high-to-low':
                        orderByFilter.push(desc(productsTable.thcContent));
                        break;
                    case 'cbd-low-to-high':
                        orderByFilter.push(asc(productsTable.cbdPercent));
                        break;
                    case 'cbd-high-to-low':
                        orderByFilter.push(desc(productsTable.cbdPercent));
                        break;
                    case 'cbd-content-low-to-high':
                        orderByFilter.push(asc(productsTable.cbdContent));
                        break;
                    case 'cbd-content-high-to-low':
                        orderByFilter.push(desc(productsTable.cbdContent));
                        break;
                    default:
                        break;
                }
            }

            const whereFilters = Array.from(whereFiltersMap.keys()).map(
                (key) => {
                    const filter = whereFiltersMap.get(key)!;

                    if (filter && filter.length > 1) {
                        console.log({ filter });
                        return or(...filter);
                    }
                    console.log(filter[0]);
                    return filter[0];
                },
            );

            // console.log({ whereFilters });

            let sqlProducts = await sqlDb
                .select({
                    url: productsTable.url,
                    dispensaryId: productsTable.dispensaryId,
                    subcategoryType: productsTable.subcategoryType,
                    categoryType: productsTable.categoryType,
                    description: productsTable.description,
                    image: productsTable.image,
                    weight: productsTable.weight,
                    normalPrice: sql<number>`CAST(${productsTable.normalPrice} AS FLOAT)`,
                    promoPrice: sql<number>`CAST(${productsTable.promoPrice} AS FLOAT)`,
                    unit: productsTable.unit,
                    quantity: productsTable.quantity,
                    strain: productsTable.strain,
                    strainType: productsTable.strainType,
                    lastSold: productsTable.lastSold,
                    thcPercent: sql<number>`CAST(${productsTable.thcPercent} AS FLOAT)`,
                    cbdPercent: sql<number>`CAST(${productsTable.cbdPercent} AS FLOAT)`,
                    thcContent: sql<number>`CAST(${productsTable.thcContent} AS FLOAT)`,
                    cbdContent: sql<number>`CAST(${productsTable.cbdContent} AS FLOAT)`,
                    lowestPrice: sql<number>`CAST(${productsTable.lowestPrice} AS FLOAT)`,
                    menuType: productsTable.menuType,
                    terpenes: productsTable.terpenes,
                    includedTerpenes: productsTable.includedTerpenes,
                    cannabinoids: productsTable.cannabinoids,
                    includedCannabinoids: productsTable.includedCannabinoids,
                    brand: brandsTable.name,
                    dispensaryName: dispensariesTable.name,
                    dispensaryLocation: dispensariesTable.location,
                })
                .from(productsTable)
                .leftJoin(
                    dispensariesTable,
                    eq(productsTable.dispensaryId, dispensariesTable.id),
                )
                .leftJoin(
                    brandsTable,
                    eq(productsTable.brandId, brandsTable.id),
                )
                .where(and(...whereFilters))
                .orderBy(...orderByFilter)
                .limit(100);

            res.status(200).json({
                products: sqlProducts,
                lastUpdated: lastUpdatedDate,
            });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: e });
        }
    } else {
        res.status(400).json({ message: 'Unauthenticated' });
    }
};

export default handler;
