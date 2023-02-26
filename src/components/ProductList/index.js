import { getPathId, validatePath } from '@component/utils'
import Image from 'next/image'
import React from 'react'
import styles from './ProductList.module.css'

const ProductList = ({ products }) => {
  return (
    <div className={styles.main}>
      <h1>Beer Menu</h1>
      <div className={styles.grid} id="productList">
        {products.map((product) => (
          <a key={product.id} href={getPathId(product.id, product.brand)}>
            <div className={styles.card}>
              <Image
                className={styles.productImg}
                src={validatePath(product.image)}
                alt={product.brand}
                width={200}
                height={200}
                priority
              />
              <span>{product.brand}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProductList
