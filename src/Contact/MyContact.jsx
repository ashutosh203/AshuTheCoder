import React from 'react'
import styles from './MyContact.module.css'

const MyContact = () => {
  return (
    <address className={styles.MyContact}>
      <p><strong>Nane</strong> Ashutosh Kumar Shah</p>
      <p><strong>Email:</strong> <a href="https://mail.google.com/mail/u/0/#inbox">ashutoshkumarshah8512@gmail.com</a></p>
      <p><strong>Phone:</strong> +91-9667606305</p>
    </address>
  )
}

export default MyContact
