
import styles from '../../styles/Home.module.css';
import Header from '../components/Header';
import CardsDetails from '../components/CardsDetails'
import Filtragem from '../components/Filtragem'
import Paginacao from '../components/Paginacao'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>XYZ</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />        
      </Head>
      <Header />
      <div className="container mt-3">
       <div className="titulo mb-3">
       <h3>Lista de Devs</h3>
       </div>
      <div className="row">
      <div className="col-sm-3">
        <Filtragem />
        </div>
        <div className="col-sm-9">
        <CardsDetails />
      <Paginacao />
      </div>
        </div>
      </div>   
      <Footer />   
    </div>
  )
}
