import { NextApiRequest, NextApiResponse } from 'next';
import sqlDb from '../../db/drizzle';
import { and, asc, eq, ilike, or, SQL, sql } from 'drizzle-orm';
import { dispensaries as dispensariesTable } from '../../db/schema';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;
            const menuType =
                query.menuType === 'rec'
                    ? 'Recreational cannabis only'
                    : 'Medicinal cannabis only';

            let countyParam = query.county as string;

            const whereFiltersMap: Map<string, SQL<unknown>[]> = new Map();

            whereFiltersMap.set('menuType', [
                eq(dispensariesTable.type, menuType),
            ]);

            if (countyParam) {
                countyParam = countyParam.replace('-', ' ');
                if (countyParam.includes(',')) {
                    const counties = countyParam.split(',');
                    for (const county of counties) {
                        if (whereFiltersMap.has('county')) {
                            whereFiltersMap
                                .get('county')!
                                .push(
                                    ilike(
                                        dispensariesTable.county,
                                        `%${county}%`,
                                    ),
                                );
                        } else {
                            whereFiltersMap.set('county', [
                                ilike(dispensariesTable.county, `%${county}%`),
                            ]);
                        }
                    }
                } else {
                    whereFiltersMap.set('county', [
                        ilike(dispensariesTable.county, `%${countyParam}%`),
                    ]);
                }
            }

            let whereFilters = Array.from(whereFiltersMap.keys()).map((key) => {
                const filter = whereFiltersMap.get(key)!;
                if (filter && filter.length > 1) {
                    return or(...filter);
                }
                return filter[0];
            });

            const sqlDispensaries = await sqlDb
                .select()
                .from(dispensariesTable)
                .where(and(...whereFilters))
                .orderBy(asc(dispensariesTable.name));

            res.status(200).json({ dispensaries: sqlDispensaries });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: e });
        }
    } else {
        res.status(400).json({ message: 'Unauthenticated' });
    }
};

export default handler;
