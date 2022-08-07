import React from 'react'
import styles from 'styles/Container.module.scss'

const Container = ({ large = false, children }) => {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

export default Container
