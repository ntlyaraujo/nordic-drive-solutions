import type { NextApiRequest, NextApiResponse } from "next";
import data from '../../../public/api/cars.json';
import { Item } from '../../../src/models';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>,
) {
  res.status(200).json(data);
}

