import Image from 'next/image'
import React from 'react'
import ProductList from '../ProductList'
import styles from './Home.module.css'

const Home = ({ products }) => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.bg}
        src="/bg/bg-init.jpg"
        alt="Beer"
        width={1920}
        height={1080}
        priority
      />
      <div className={styles.bgText}>
        Drink good beer <br />
        with good friends
      </div>

      <ProductList products={products} />

      <div className={styles.bgEndWrapp}>
        <Image
          className={styles.bgEnd}
          src="/bg/bg-end.jpg"
          alt="Beer"
          width={1920}
          height={1080}
          priority
        />
      </div>
    </div>
  )
}

export default Home
