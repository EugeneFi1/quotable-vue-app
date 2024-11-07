import type { QouteBE } from '@/models/qoute.model'

const BE_LINK = 'https://api.quotable.io'

enum BE_ROUTES {
  GET_QOUTE = '/quotes/random?limit=1',
}

export async function getQoute(): Promise<QouteBE> {
  const response = await fetch(`${BE_LINK}${BE_ROUTES.GET_QOUTE}`, {
    method: 'GET',
  })
  if (response.ok) {
    return response.json().then((data) => data[0])
  }
  throw new Error()
}
