import { NextApiRequest, NextApiResponse } from 'next';
import sqlDb from '../../db/drizzle';
import { asc, eq, sql } from 'drizzle-orm';
import { dispensaries as dispensariesTable } from '../../db/schema';

// Single prepared statement with a parameter
const preparedDispensaryQuery = sqlDb
    .select()
    .from(dispensariesTable)
    .where(eq(dispensariesTable.type, sql.placeholder('menuType')))
    .orderBy(asc(dispensariesTable.name))
    .prepare('get_dispensaries');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;
            const menuType =
                query.menuType === 'rec'
                    ? 'Recreational cannabis only'
                    : 'Medicinal cannabis only';

            const sqlDispensaries = await preparedDispensaryQuery.execute({
                menuType: menuType,
            });

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
