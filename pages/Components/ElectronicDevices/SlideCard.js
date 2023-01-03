import React from "react"
import Sdata from "./Sdata"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

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
              <div className='box d_flex top' key={index}>
                <div className='left'>
                <h3>Electronics</h3>
                  <h6>{value.title}</h6>
                  {/* <p>{value.desc}</p> */}
                  <Link href='/Mobile' className='abc'><button className='btn-primary1'>VISIT COLLECTIONS</button></Link>
                </div>
                <div className='right'>
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
