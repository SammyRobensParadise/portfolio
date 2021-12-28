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

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    body: { name, partition }
  } = req
  await getGithubContributions({
    username: name,
    config: {
      partition: 'current',
      proxy: 'https://glacial-citadel-92798.herokuapp.com/'
    }
  })
    .then((response: string) => {
      console.log(response)
      res.status(200).json({
        data: response,
        status: 'success'
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
