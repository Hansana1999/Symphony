import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const ElCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Mobile"><i><FontAwesomeIcon icon={faSquare} /><span>MOBILE PHONES</span></i></Link>
          <Link href="./Tele"><i><FontAwesomeIcon icon={faSquare} /><span>TELEVISIONS</span></i></Link>
          <Link href="./Com"><i><FontAwesomeIcon icon={faSquare} /><span>COMPUTERS</span></i></Link>
          <Link href="./Air"><i><FontAwesomeIcon icon={faSquare} /><span>AIR CONDITIONS</span></i></Link>
          <Link href="./Game"><i><FontAwesomeIcon icon={faSquare} /><span>GAMING CONSOLES</span></i></Link>
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default ElCategories


// import React from "react"
// import { Link } from "react-router-dom"
// import '../../App.css';

// const Categories = () => {
  
//   return (
//     <>
//       <div className='vcategory'>
//       <h3 className='types'>TYPES</h3>
//         <div className='box '>
//           <ul>
//             <Link to="./Mobile"><i class="fa fa-square" aria-hidden="true"><span>MOBILE PHONES</span></i></Link>
//             <Link to="./Tele"><i class="fa fa-square" aria-hidden="true"><span>TELEVISIONS</span></i></Link>
//             <Link to="./Com"><i class="fa fa-square" aria-hidden="true"><span>COMPUERS</span></i></Link>
//             <Link to="./Air"><i class="fa fa-square" aria-hidden="true"><span>AIR CONDITIONS</span></i></Link>
//             <Link to="./Game"><i class="fa fa-square" aria-hidden="true"><span>GAMING CONSOLES</span></i></Link>
//           </ul>
//           </div>
//       </div> 
//     </>
//   )
// }

// export default Categories