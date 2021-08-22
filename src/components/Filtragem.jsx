import styles from '../../styles/Filtragem.module.css';

export default function Filtragem() {
  return (
    <div className={styles.filtragem}>
      <div className="container">
        <div className="mt-2">
          <div className={styles.titulo}>
            <h5>Filtrar por Stacks</h5>
          </div>
        </div>

        <div className="mt-3">
          <div className={styles.opcoes}>
            <h6> <input type="checkbox" name="" id="" className={styles.checkbox} /> <strong>React</strong> </h6>
            <h6> <input type="checkbox" name="" id="" className={styles.checkbox} /> <strong>React Native</strong> </h6>
            <h6> <input type="checkbox" name="" id="" className={styles.checkbox} /> <strong>Node js</strong> </h6>
            <h6> <input type="checkbox" name="" id="" className={styles.checkbox} /> <strong>JavaScript</strong> </h6>
            <h6> <input type="checkbox" name="" id="" className={styles.checkbox} /> <strong>HTML e CSS</strong> </h6>
          </div>
        </div>

        <div className="mt-3">
          <div className={styles.todos}>
            <a href="">Ver todos</a>
          </div>
        </div>
      </div>
    </div>
  )
}