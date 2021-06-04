import { NextApiRequest, NextApiResponse } from "next";

async function sleep(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default async function apiClock(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  await sleep(500); // simulate slow endpoint
  res.status(200).json({ date: new Date() });
}
