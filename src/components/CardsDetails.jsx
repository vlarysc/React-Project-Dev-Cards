import styles from '../../styles/CardsDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import desenvolvedores from '../data/desenvolvedores'
import Avatar from 'react-avatar';

export default function CardsDetails() {
  let desenvolvedor = desenvolvedores.map((dev) => {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4" key={dev.id}>

        <div className={styles.boxDev}>
          <div className="d-flex justify-content-center mt-3 mb-3">
            <div className={styles.photo}>
              <Avatar className="mt-1" facebookId="100033305901376" size="100" round={true} />
            </div>
          </div>

          <div className={styles.name}>
            {dev.nome}
          </div>
          <div className={styles.skills}>

            {dev.skills.join()}

          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className={styles.boxDev}>

            <h5 className="d-flex justify-content-end mt-2">Ordenar por: Nome
              <FontAwesomeIcon width="30" height="30" icon="angle-down" className={styles.icon} />
            </h5>
          </div>
        </div>
        {desenvolvedor}


      </div>
    </div >
  )
}