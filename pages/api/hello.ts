// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { service } from '@domain/module/greetings/service'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  greetings: string
  executedAt: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  const execute = service((): Date => { return new Date() })
  const output = execute({ name: 'Ana' })
  res.status(200).json({
    greetings: output.greetings,
    executedAt: output.executedAt.toISOString(),
  })
}
