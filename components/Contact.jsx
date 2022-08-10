import React from 'react'
import styles from 'styles/Contact.module.scss'
import Social from './Social'

const Contact = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.address</address>
    </div>
  )
}

export default Contact
