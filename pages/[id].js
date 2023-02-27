import Head from 'next/head'
import { getPathId } from '@component/utils'
import ProductDetail from '@component/src/components/ProductDetail'
import { useEffect, useState } from 'react'
import { getProductBySku } from '@component/src/services/stock.service'

export default function Detail({ stockData, productData }) {
  const product = JSON.parse(productData)
  const [stock, setStock] = useState(JSON.parse(stockData))

  useEffect(() => {
    const interval = setInterval(async () => {
      await fetchData()
    }, 5000)

    return () => clearInterval(interval)
  })

  const fetchData = async () => {
    const resp = await handleStock(product?.skus)
    setStock(resp)
  }

  return (
    <>
      <Head>
        <title>{product.brand}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetail stock={stock} product={product} />
    </>
  )
}

export async function getStaticPaths() {
  const data = await import('@component/data/products')
  const products = data.default

  const allPaths = products.map((it) => {
    return {
      params: {
        id: getPathId(it.id, it.brand),
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id = params.id.split('-')[0]

  const products = await import('@component/data/products')
  const product = products.default.find((it) => it.id === parseInt(id))
  const productJson = JSON.stringify(product)

  const stock = await handleStock([...product.skus])
  const stockJson = JSON.stringify(stock)

  return {
    props: {
      productData: productJson,
      stockData: stockJson,
    },
  }
}

async function handleStock(skuCodes) {
  const stock = []

  for (const el of skuCodes) {
    const response = await getProductBySku(el.code)
    stock.push({ ...response, name: el.name, code: el.code })
  }

  return stock
}
