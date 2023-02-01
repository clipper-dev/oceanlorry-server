import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Purspray</title>
        <meta name="description" content="Pianowanie " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        </main>
    </div>
  )
}

export default Home
