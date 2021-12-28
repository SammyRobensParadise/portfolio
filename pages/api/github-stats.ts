import type { NextApiRequest, NextApiResponse } from 'next'
import { getGithubContributions } from 'github-contributions-counter'
import { AxiosError } from 'axios'

interface ApiRequest extends NextApiRequest {
  body: {
    name: string
  }
}

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    body: { name }
  } = req
  await getGithubContributions({
    username: name,
    token: process.env.GITHUB_STATS_PAT || ''
  })
    .then((response) => {
      res.status(200).json({
        data: response.data.data,
        status: 'success'
      })
    })
    .catch((err: AxiosError) => {
      res.status(500).json({
        data: err,
        status: 'error'
      })
    })
}
