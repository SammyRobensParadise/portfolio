import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  name: string
  email: string
  phone: string | null
  message: string | null
  for_hire: boolean
}

type ResponseData = {
  message: string
  status: 'success' | 'error'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).json({
    name: 'Sammy Robens-Paradise',
    emoji: '🐧',
    favourite_food: 'sushi'
  })
}
