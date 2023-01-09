// import React from "react"
// import { Link } from "react-router-dom"
// import '../pages/Categories.css';

// const Categories = () => {
//   const data = [
//     {
//       path:"/Furniture",
//       cateName: "FURNITURE",
//     },
//     {
//       path:"/Battery",
//       cateName: "KITCHEN ITEMS",
//     },
//     {
//       path:"/Wheel",
//       cateName: "GARDEN ITEMS",
//     }, 
//     {
//       path:"Fuel Tank",
//       cateName: "BATHROOM ITEMS",
//     },
//     {
//       path:"/Windscreen",
//       cateName: "BUILDING ITEMS",
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
//       </div> 
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
            <Link to="./Furniture"><i class="fa fa-square" aria-hidden="true"><span>FURNITURE</span></i></Link>
            <Link to="./Kitchen"><i class="fa fa-square" aria-hidden="true"><span>KITCHEN ITEMS</span></i></Link>
            <Link to="./Garden"><i class="fa fa-square" aria-hidden="true"><span>GARDEN ITEMS</span></i></Link>
            <Link to="./Bathroom"><i class="fa fa-square" aria-hidden="true"><span>BATHROOM ITEMS</span></i></Link>
            <Link to="./Building"><i class="fa fa-square" aria-hidden="true"><span>BUILDING ITEMS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories



