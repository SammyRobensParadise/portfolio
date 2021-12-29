import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

interface ApiRequest extends NextApiRequest {
  body: {
    name: string
    email: string
    message: string | undefined
  }
}

type ResponseData = {
  message: string
  status: 'success' | 'error'
}

export default function handler(req: ApiRequest, res: NextApiResponse): void {
  const {
    body: { name, email, message }
  } = req
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

  const msg = {
    personalizations: [
      {
        to: [{ email }],
        cc: [{ email: 'srobensparadise@gmail.com' }],
        subject: `👋 Hey ${name}! I will be in touch with you shortly, - Sammy`
      },
      {
        to: [{ email: 'srobensparadise@gmail.com' }],
        subject: `${name}, ${email}! Want's to get in touch`
      }
    ],
    from: 'sammy.world@domainsbyproxy.com',
    html: `
    <div
    style="
      margin: 0;
      -webkit-font-smoothing: antialiased;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      margin-left: 48px;
      margin-right: 48px;
    "
  >
    <h2 style="color: #3f46f3">
      Hey ${name}! I have gotten your message, and will reach out shortly! 🕐
    </h2>
    <h4 style="color: #3f46f3">Your message:</h4>
    <p>${message || 'No message 😀'}</p>
    <p>
      <i>P.S. Your message goes straight to my inbox</i>
    </p>
    <p>Contact:</p>
    <a style="color: #3f46f3" href="https://sammy.world">sammy.world</a>
    <br />
    <a style="color: #3f46f3" href="mailto:srobensparadise@gmail.com"
      >srobensparadise@gmail.com</a
    >
  </div>  
    `
  }

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({
        message: 'success',
        status: 'success'
      } as ResponseData)
    })
    .catch((error) => {
      res.status(500).json({
        message: JSON.stringify(error),
        status: 'error'
      } as ResponseData)
    })
}
