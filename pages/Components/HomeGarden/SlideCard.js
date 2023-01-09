import React from "react"
import Sdata from "./Sdata"
import Link from "next/link"
import styles from "/styles/HomeWrapper.module.css"
import cx from "classnames"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      {/* <Slider {...settings}> */}
        {Sdata.map((value, index) => {
          return (
            <>
              <div  key={index}>
                <div >
                <h3 className={cx(styles["cleft"],)}>Home</h3>
                  <h6>{value.title}</h6>
                  {/* <p>{value.desc}</p> */}
                  <Link href='/Components/Vehicalparts/Engine' className='abc'><button className={cx(styles["cbtn"],)}>VISIT COLLECTIONS</button></Link>
                </div>
                <div className={cx(styles["cright"],)}>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      {/* </Slider> */}
    </>
  )
}

export default SlideCard
