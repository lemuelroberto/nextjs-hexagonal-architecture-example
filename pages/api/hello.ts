// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ClockDateAdapter } from '@adapter/module/greetings/clock-date-adapter'
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
  const execute = service(new ClockDateAdapter())
  const output = execute({ name: 'Ana' })
  res.status(200).json({
    greetings: output.greetings,
    executedAt: output.executedAt.toISOString(),
  })
}
