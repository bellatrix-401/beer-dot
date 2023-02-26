async function extractData(code) {
  const data = await import('@component/data/stock-price')
  const product = data.default[code]

  return product
}

export default async function handler(req, res) {
  const { code } = req.query
  const product = await extractData(code)

  return res.status(200).json({
    data: product,
  })
}
