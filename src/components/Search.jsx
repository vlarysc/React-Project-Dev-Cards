import React from 'react'
import styles from '../../styles/Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Search(props) {
  return (
    <React.Fragment className={styles.search}>

      <input className={props.classProps} type="text" id={styles.text} placeholder="Pesquisar" />

      <FontAwesomeIcon width="30" height="30" icon="search" className={styles.searchi} />

    </React.Fragment>
  )
}