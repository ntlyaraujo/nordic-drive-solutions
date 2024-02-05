import type { NextApiRequest, NextApiResponse } from "next";
import data from '../../../public/api/cars.json';
import { Item } from '../../../src/models';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item | { message: string }>,
) {
  const { id } = req.query;
  const item = data.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.status(200).json(item);
}
