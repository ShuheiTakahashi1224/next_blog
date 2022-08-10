import React from 'react'
import styles from 'styles/Social.module.scss'
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = ({ iconSize = 'initial' }) => {
  return (
    <ul className={styles.list} style={{ '--icon-size': iconSize }}>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}

export default Social
