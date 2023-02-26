import { getPrice, validatePath } from '@component/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './ProductDetail.module.css'

const ProductDetail = ({ product, stock }) => {
  return (
    <div className={styles.main}>
      <div className={styles.detailsWrapper}>
        <Link href="/#productList" className={styles.goBack}>
          Go back
        </Link>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.imgProduct}
            src={validatePath(product.image)}
            alt={product.brand}
            width={100}
            height={100}
            priority
          />
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{product.brand}</h1>
            <h2>
              {product.style} - {product.substyle}
            </h2>
          </div>

          <div className={styles.properties}>
            <span>
              <strong>Origin:</strong> {product.origin}
            </span>
            <span>
              <strong>Abv:</strong> {product.abv}
            </span>
          </div>

          <p>{product.information}</p>

          <div className={styles.skuWrapper}>
            {stock.map((sku) => {
              return (
                <div key={sku.code} className={styles.sku}>
                  <span>
                    <strong>{sku.name}</strong>
                  </span>
                  <span>{getPrice(sku.price)}</span>
                  <span>Sku: {sku.code}</span>
                  <span>{sku.stock} left</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
