import React from 'react'
import styles from 'styles/TwoColumn.module.scss'

const TwoColumnMain = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

export default TwoColumnMain
