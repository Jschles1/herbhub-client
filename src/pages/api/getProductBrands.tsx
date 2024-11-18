import { NextApiRequest, NextApiResponse } from 'next';
import sqlDb from '../../db/drizzle';
import { brands as brandsTable } from '../../db/schema';
import { ilike } from 'drizzle-orm';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            let { search } = query;

            if (!search) {
                res.status(400).json({ message: 'Missing query params' });
                return;
            }

            const sqlBrands = await sqlDb
                .select()
                .from(brandsTable)
                .where(ilike(brandsTable.name, `%${search}%`))
                .limit(10);

            res.status(200).json({ brands: sqlBrands });
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: e });
        }
    } else {
        res.status(400).json({ message: 'Unauthenticated' });
    }
};

export default handler;
