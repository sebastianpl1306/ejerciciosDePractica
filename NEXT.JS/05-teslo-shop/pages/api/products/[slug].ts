import { db } from '@/database';
import { Product } from '@/models';
import { IProduct } from '@/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = 
| {message: string}
| IProduct

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts( req, res );
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}

const getProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { slug } = req.query;

    await db.connect();
    const product = await Product.findOne({ slug })
        .select('title images price inStock slug -_id')
        .lean();

    if(!product){
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await db.disconnect();
    return res.status(200).json( product );
}