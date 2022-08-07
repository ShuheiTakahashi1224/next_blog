import React from 'react'
import styles from 'styles/TwoColumn.module.scss'

const TwoColumnSide = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>
}

export default TwoColumnSide
