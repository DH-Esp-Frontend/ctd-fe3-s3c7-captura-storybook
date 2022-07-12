import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BasicCard from '../features/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <BasicCard />
      <BasicCard />
      <BasicCard />
      <BasicCard />
    </div>
  )
}

export default Home
