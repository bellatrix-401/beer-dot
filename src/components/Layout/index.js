import Image from 'next/image'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
