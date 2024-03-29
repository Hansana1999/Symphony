
// import React from "react"
// import "../pages/Wrapper.css"
// import '../../App.css';
// import { Link } from "react-router-dom"
// import ElCategories from "./ElCategories"

// const Wrapper = () => {
//   const data = [
//     {
//       path:"./Vp1",
//       cateImg: "./images/Electronics/1.jpg",
//       title: "Horn ",
//       brand:"Apple",
//       model:"single",
//       decs: "You can use decorate your table Table suitable",
//       phone:"021548936",
//       email:"ergset@gmail.com",
//     },
//     {
//       path:"./Vp2",
//       cateImg: "./images/Electronics/2.jpg",
//       title: "Air filter ",
//       brand:"Apple",
//       model:"single",
//       decs: "You can use decorate your table Table suitable",
//       phone:"021548936",
//       email:"ergset@gmail.com",
//     },
//     {
//       path:"./Vp3",
//       cateImg: "./images/Electronics/3.jpg",
//       title: "Fuel filter ",
//       brand:"Apple",
//       model:"single",
//       decs: "You can use decorate your table Table suitable",
//       phone:"021548936",
//       email:"ergset@gmail.com",
//     },
//     {
//       path:"./Vp4",
//       cateImg: "./images/Electronics/4.jpg",
//       title: "Oil filter ",
//       brand:"Apple",
//       model:"single",
//       decs: "You can use decorate your table Table suitable",
//       phone:"021548936",
//       email:"ergset@gmail.com",
//     },
//   ]
//   return (
//     <>
//     <h1 className='qwe3'>Mobile Phones</h1>
//       <ElCategories/>
//       <section className='wrapper wbackground'>
//         <div className='wcontainer1 grid9'>
//           {data.map((val, index) => {
//             return (
//               <div className='vpproduct' key={index}>
//                 <div>
//                 <img src={val.cateImg} alt='' />
//                 </div>
//                 <h2>{val.title}</h2>
//                 <p>{val.brand}</p>
//                 <p>{val.model}</p>
//                 <p>{val.decs}</p>
//                 <p>Whatsapp : {val.phone}</p>
//                 <p>{val.email}</p>
//                 <p><link rel = "canonical" href = "https://www.javatpoint.com/"  />    
//                    <Link to={val.phone}><button className='btn--medium'>CONTACT</button></Link></p>
//               </div>
//             ) 
//           })}
//         </div>
//       </section> 
//     </>
//   )
// }

// export default Wrapper

import styles from '/styles/Home1.module.css'
import ElCategories from "./ElCategories"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "/images/Electronics/1.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "/images/Electronics/2.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "/images/Electronics/3.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "/images/Electronics/4.jpg",
      title: "Oil filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
  ]
  return (
    <>
    <div>
      <Navbar/>
    <h1 className= {styles.qwe3}>Mobile Phones</h1>
    <ElCategories/>
      <section className= {styles.wbackground}>
        <div className={styles.grid9}>
          {data.map((val, index) => {
            return (
              <div className={styles.vpproduct} key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h5>{val.title}</h5>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <p><link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                <button className='btn--medium'>CONTACT</button></p>
              </div>
            ) 
          })}
        </div>
      </section> 
      <Footer/>
      </div>
    </>
  )
}

export default Wrapper