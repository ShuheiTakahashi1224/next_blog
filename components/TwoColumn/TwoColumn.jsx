import React from 'react'
import styles from 'styles/TwoColumn.module.scss'

const TwoColumn = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

export default TwoColumn
