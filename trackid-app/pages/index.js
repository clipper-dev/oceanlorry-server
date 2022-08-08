import Head from 'next/head'
import { useState } from 'react';
import TrackService from '../components/TrackService'

{/*Icons*/ }
import { FaRegCheckSquare, FaRegSquare, FaLock, FaUser } from 'react-icons/fa';

//import { useAuth } from '../context/AuthContext';
import { NavbarSimple } from '../components/Navbar';
import App from '../components/App';

export default function Home() {

  //const { user } = useAuth()



  return (
    <div>
      <Head>

        <>
          {/*Main content, only for logged users*/}
          <title>Track your service | TrackID</title>
        </>
        <meta name="description" content="The only productivity blog you need." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <NavbarSimple/>

      <TrackService/>

    </div>
  )
}
