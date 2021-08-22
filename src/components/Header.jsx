import styles from '../../styles/Header.module.css';
import Image from 'next/image'
import Search from './Search'
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Header(props) {
  const logo = require('../assets/xyz-company-logo.png');
  return (
    <div className={styles.header}>

      <div className="container">
        <div className="row">
          <div className=" col-sm-3 col-md-3 d-none d-sm-block">
            <Image width="134" height="85" src={logo} />

          </div>
          <div className="col-12 col-sm-9 col-md-9">
            <Search classProps="mt-3" />
          </div>
        </div>
      </div>


    </div>
  )
}