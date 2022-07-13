import type { NextPage } from 'next'
import Head from 'next/head'
import BasicCard from '../features/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <BasicCard materia='Infraestructura IV'/>
    </div>
  )
}

export default Home
