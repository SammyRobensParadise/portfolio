// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  emoji: string
  favourite_food: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({
    name: 'Sammy Robens-Paradise',
    emoji: '🐧',
    favourite_food: 'sushi'
  })
}
