import { BASE_URL } from '../constants/env'

export const getProductBySku = async (code) => {
  const res = await fetch(`${BASE_URL}/api/stock-price/${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const dataJson = await res.json()
  return dataJson.data
}
