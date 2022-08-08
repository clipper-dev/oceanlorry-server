import Head from 'next/head'
import { useState } from 'react';

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
          <title>Track your service | TrackID</title>
        </>
        <meta name="description" content="The only productivity blog you need." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <NavbarSimple/>

      

    </div>
  )
}
