export const getPathId = (productId, productBrand) => {
  const id = productId.toString()
  const brand = productBrand.toLowerCase().replace(' ', '-')
  return `${id}-${brand}`
}

export const validatePath = (path) => {
  try {
    require(`../public${path}`)
    return path
  } catch (err) {
    return '/no-image.png'
  }
}

export const getPrice = (cents) => {
  const dollars = (cents / 100).toFixed(2)
  return `$ ${dollars}`
}

export const validateEnvLink = (link) => {
  return link ? link : '#'
}

export const isEmpty = (value) => {
  return value === '' || value === null || value === undefined
}
