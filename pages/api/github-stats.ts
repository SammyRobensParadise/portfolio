import type { NextApiRequest, NextApiResponse } from 'next'
import { getGithubContributions } from 'github-contributions-counter'

interface ApiRequest extends NextApiRequest {
  body: {
    name: string
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
    body: { name }
  } = req
  await getGithubContributions({ username: '', token: '' })
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
