import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import { HomePage } from './Components/home/home-page'

export default function Home() {
  return (
    
   <div>
    <Head>
      <title>Symphony</title>
    </Head>
    <Navbar/>
    <h1>home page</h1>
    
   </div>
  )
}

