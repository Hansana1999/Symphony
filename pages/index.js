import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/Home/HomePage'
import Footer from './Components/Footer'

export default function Home() {
  return (
    
   <div>
    <Head>
      <title>Symphony</title>
    </Head>
    <Navbar/>
    <HomePage/>
    <Footer/>
    
    
   </div>
  )
}

