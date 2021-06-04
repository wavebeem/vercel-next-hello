import { NextApiRequest, NextApiResponse } from "next";

export default function apiHello(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
}
