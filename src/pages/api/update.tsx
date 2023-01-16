import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(process.env.AWS_API_GATEWAY_URL as string, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log({ data });
    res.status(200).json(data);
};

export default handler;
