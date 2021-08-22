import styles from '../../styles/Paginacao.module.css';

export default function Paginacao(props) {
  return (
    <div className="container d-flex justify-content-center">
      <div className={styles.paginationbar}>
        <a href="#">&lt;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&gt;</a>
        <div className={styles.underline}></div>
      </div>
    </div>
  )
}