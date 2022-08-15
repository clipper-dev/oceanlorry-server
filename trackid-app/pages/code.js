import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Code.module.css'


{/*Icons*/ }
import { FaRegCheckSquare, FaRegSquare, FaLock, FaUser } from 'react-icons/fa';

//import { useAuth } from '../context/AuthContext';
import Login from '../components/Login';
import { NavbarSimple } from '../components/Navbar';
import App from '../components/App';

export default function Admin() {

  //const { user } = useAuth()



  return (
    <div>
      <Head>

        <>
          {/*Main content, only for logged users*/}
          <title>Code test | TrackID</title>
        </>
        <meta name="description" content="The only productivity blog you need." />
        <link rel="icon" href="/favicon.ico" />

      </Head>


      
        <NavbarSimple />

      <div className={styles['main']}>


        <div className={styles['code-block']}>
          <ol>
            <li className={[styles['code-line'],styles['tab-1']].join(" ")}>class <span className={styles.class}>Example()</span></li>
            <li className={[styles['code-line'],styles['tab-1']].join(" ")}>class</li>
          </ol>
        </div>

      </div>


    </div>
  )
}
