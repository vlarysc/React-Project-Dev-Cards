import styles from '../../styles/Footer.module.css';
import Image from 'next/image'

export default function Footer(props) {
  const facebookIcon = require('../assets/icons/facebook.png');
  const twitterIcon = require('../assets/icons/twitter.png');
  const instagramIcon = require('../assets/icons/instagram.png');

  return (
    <div className={styles.footer}>
      <div className={styles.titulo}>
        <h1>XYZ</h1>
        <h5>Company</h5>
      </div>

      <div className={styles.iconsocial}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className={styles.icon}>
                <Image src={facebookIcon} />
              </div>
            </div>
            <div className="col-4">
              <div className={styles.icon}>
                <Image src={instagramIcon} />
              </div>
            </div>
            <div className="col-4">
              <div className={styles.icon}>
                <Image src={twitterIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          Copyright &copy; 2021 - Todos os direitos reservados
        </p>
      </div>
    </div>
  )
}