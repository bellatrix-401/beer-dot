import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.main}>
      <a href={'/'} className={styles.goHome}>
        <Image
          className={styles.logo}
          src="/logo/beerdot-big.svg"
          alt="Beer dot"
          width={200}
          height={87}
          priority
        />
      </a>
    </header>
  )
}

export default Header
