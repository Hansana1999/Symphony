import React from "react"
import Categories from "../Categories"
import SliderHome from "./Slider"
import styles from "/styles/HomeWrapper.module.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <section className='home'>
      <Categories />
        <div className={styles.box1}>
          <SliderHome />
        </div>
      </section>
      <br/><br/><br/><br/>
      <Footer/>
      </div>
    </>
  )
}

export default Home
