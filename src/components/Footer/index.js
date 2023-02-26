import { FB_URL, IN_URL, TW_URL } from '@component/src/constants/env'
import { validateEnvLink } from '@component/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const date = new Date()
  return (
    <footer className={styles.main}>
      <span>© Copyright {date.getFullYear()}. All Rights Reserved</span>
      <div className={styles.iconsWrapper}>
        <Link href={validateEnvLink(FB_URL)} target="_blank">
          <Image
            className={styles.logo}
            src="/icons/fb-icon.svg"
            alt="BD Facebook"
            width={24}
            height={24}
            priority
          />
        </Link>

        <Link href={validateEnvLink(TW_URL)} target="_blank">
          <Image
            className={styles.logo}
            src="/icons/tw-icon.svg"
            alt="BD Twitter"
            width={24}
            height={24}
            priority
          />
        </Link>

        <Link href={validateEnvLink(IN_URL)} target="_blank">
          <Image
            className={styles.logo}
            src="/icons/in-icon.svg"
            alt="BD Linkedin"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
