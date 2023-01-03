// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Mobile",
//       cateName: "MOBILE PHONES",
//     },
//     {
//       path:"/",
//       cateName: "TELEVISIONS",
//     },
//     {
//       path:"/",
//       cateName: "COMPUERS",
//     }, 
//     {
//       path:"/ ",
//       cateName: "AIR CONDITIONS",
//     },
//     {
//       path:"/",
//       cateName: "GAMING CONSOLES",
//     },
//   ]

//   return (
//     <>
//       <div className='vcategory'>
//       <h3 className='types'>TYPES</h3>
//         {data.map((value, index) => {
//           return (
//             <Link to={value.path} className='abc'>
//               <div className='box f_flex1' key={index}>
//               <i class="fa fa-square" aria-hidden="true"><span>{value.cateName}</span></i>
//               </div>
//             </Link>
//           )
//         })}
//         </div> 
//     </>
//   )
// }

// export default Categories


import React from "react"
import { Link } from "react-router-dom"
import '../../App.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Mobile"><i class="fa fa-square" aria-hidden="true"><span>MOBILE PHONES</span></i></Link>
            <Link to="./Tele"><i class="fa fa-square" aria-hidden="true"><span>TELEVISIONS</span></i></Link>
            <Link to="./Com"><i class="fa fa-square" aria-hidden="true"><span>COMPUERS</span></i></Link>
            <Link to="./Air"><i class="fa fa-square" aria-hidden="true"><span>AIR CONDITIONS</span></i></Link>
            <Link to="./Game"><i class="fa fa-square" aria-hidden="true"><span>GAMING CONSOLES</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories