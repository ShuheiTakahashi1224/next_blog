import Link from 'next/link'
import React from 'react'
import styles from 'styles/Logo.module.scss'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  )
}

export default Logo
