import { PrismaClient } from '@prisma/client';
import type { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const { query } = req;

            await prisma.$connect();

            let { search } = query;

            if (!search) {
                res.status(400).json({ message: 'Missing query params' });
                return;
            }

            const whereInput: Prisma.BrandWhereInput = {
                name: {
                    contains: search as string,
                    mode: 'insensitive',
                },
            };

            const brands = await prisma.brand.findMany({
                where: whereInput,
                take: 15,
            });

            await prisma.$disconnect();
            res.status(200).json({ brands });
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
