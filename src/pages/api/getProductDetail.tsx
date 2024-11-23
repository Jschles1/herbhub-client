import type { NextApiRequest, NextApiResponse } from 'next';
import sanitizeHtml from 'sanitize-html';
import sqlDb from '../../db/drizzle';
import {
    products as productsTable,
    dispensaries as dispensariesTable,
    brands as brandsTable,
} from '../../db/schema';
import { and, eq, ilike, ne, sql } from 'drizzle-orm';

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

            let { strain, dispensaryName, dispensaryLocation } = query;

            if (!strain || !dispensaryName || !dispensaryLocation) {
                console.log('Missing query params');
                return {
                    notFound: true,
                    props: {},
                };
            }

            let sqlProduct = await sqlDb
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
                .innerJoin(
                    dispensariesTable,
                    eq(productsTable.dispensaryId, dispensariesTable.id),
                )
                .innerJoin(
                    brandsTable,
                    eq(productsTable.brandId, brandsTable.id),
                )
                .where(
                    and(
                        ilike(dispensariesTable.name, `%${dispensaryName}%`),
                        eq(
                            dispensariesTable.location,
                            dispensaryLocation as string,
                        ),
                        eq(productsTable.strain, strain as string),
                    ),
                )
                .limit(1);

            // console.log('sqlProduct', sqlProduct);
            // console.log('sqlProduct', {
            //     sqlProduct,
            //     query: {
            //         strain,
            //         dispensaryName,
            //         dispensaryLocation,
            //     },
            // });

            if (!sqlProduct[0]) {
                console.log('Product not found, trying partial match');

                sqlProduct = await sqlDb
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
                        includedCannabinoids:
                            productsTable.includedCannabinoids,
                        brand: brandsTable.name,
                        dispensaryName: dispensariesTable.name,
                        dispensaryLocation: dispensariesTable.location,
                        dispensariesTable: dispensariesTable,
                    })
                    .from(productsTable)
                    .innerJoin(
                        dispensariesTable,
                        eq(productsTable.dispensaryId, dispensariesTable.id),
                    )
                    .innerJoin(
                        brandsTable,
                        eq(productsTable.brandId, brandsTable.id),
                    )
                    .where(
                        and(
                            ilike(
                                dispensariesTable.name,
                                `%${dispensaryName}%`,
                            ),
                            eq(
                                dispensariesTable.location,
                                dispensaryLocation as string,
                            ),
                            ilike(
                                productsTable.strain,
                                `%${strain as string}%`,
                            ),
                        ),
                    )
                    .limit(1);

                // console.log('sqlProduct backup', {
                //     sqlProduct,
                //     query: {
                //         strain: `%${strain as string}%`,
                //         dispensaryName,
                //         dispensaryLocation,
                //     },
                // });

                if (!sqlProduct[0]) {
                    console.log('Product not found');
                    res.status(404).json({ message: 'Product not found' });
                    return;
                } else {
                    sqlProduct[0].description = generateProductDescription(
                        sqlProduct[0].description ?? '',
                        sqlProduct[0].url,
                    );
                }
            } else {
                sqlProduct[0].description = generateProductDescription(
                    sqlProduct[0].description ?? '',
                    sqlProduct[0].url,
                );
            }

            const sqlRelatedProducts = await sqlDb
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
                    dispensariesTable: dispensariesTable,
                })
                .from(productsTable)
                .innerJoin(
                    dispensariesTable,
                    eq(productsTable.dispensaryId, dispensariesTable.id),
                )
                .innerJoin(
                    brandsTable,
                    eq(productsTable.brandId, brandsTable.id),
                )
                .where(
                    and(
                        ilike(dispensariesTable.name, `%${dispensaryName}%`),
                        eq(
                            dispensariesTable.location,
                            dispensaryLocation as string,
                        ),
                        eq(
                            productsTable.categoryType,
                            sqlProduct[0].categoryType,
                        ),
                        ne(productsTable.strain, sqlProduct[0].strain),
                    ),
                )
                .limit(6);

            let splitMenus = false;

            const dispensary = await sqlDb
                .select()
                .from(dispensariesTable)
                .where(
                    and(
                        ilike(dispensariesTable.name, `%${dispensaryName}%`),
                        eq(
                            dispensariesTable.location,
                            dispensaryLocation as string,
                        ),
                        eq(dispensariesTable.type, sqlProduct[0].menuType),
                    ),
                )
                .limit(1);

            const oppositeMenuType =
                sqlProduct[0].menuType === 'Recreational cannabis only'
                    ? 'Medicinal cannabis only'
                    : 'Recreational cannabis only';

            const sqlOppositeDispensary = await sqlDb
                .select()
                .from(dispensariesTable)
                .where(
                    and(
                        ilike(dispensariesTable.name, `%${dispensaryName}%`),
                        eq(
                            dispensariesTable.location,
                            dispensaryLocation as string,
                        ),
                        eq(dispensariesTable.type, oppositeMenuType),
                    ),
                );
            if (sqlOppositeDispensary.length > 0) {
                splitMenus = true;
            }
            res.status(200).json({
                product: sqlProduct[0] as any,
                relatedProducts: sqlRelatedProducts,
                dispensary: dispensary[0],
                splitMenus,
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
