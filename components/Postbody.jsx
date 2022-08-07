import React from 'react'
import styles from 'styles/PostBody.module.scss'

const Postbody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}

export default Postbody
