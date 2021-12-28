import type { NextApiRequest, NextApiResponse } from 'next'
import { getGithubContributions } from 'github-contributions-counter'
import { Partitions } from 'github-contributions-counter/dist/core/main'

interface ApiRequest extends NextApiRequest {
  body: {
    name: string
    partition: Partitions
  }
}

type ResponseData = {
  message: string
  status: 'success' | 'error'
}

export default function handler(req: ApiRequest, res: NextApiResponse): void {
  const {
    body: { name, partition }
  } = req
  getGithubContributions({
    username: name,
    config: {
      partition
    }
  }).then((response) => {
    res.status(200).json({
      message: 'success',
      status: 'success'
    } as ResponseData)
  })
}
