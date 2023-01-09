import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const FdCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Beverage"><i><FontAwesomeIcon icon={faSquare} /><span>BEVERAGES</span></i></Link>
          <Link href="./Snack"><i><FontAwesomeIcon icon={faSquare} /><span>SNACKS</span></i></Link>
          <Link href="./Sweet"><i><FontAwesomeIcon icon={faSquare} /><span>SWEETS</span></i></Link>
          <Link href="./Vegi"><i><FontAwesomeIcon icon={faSquare} /><span>VEGETABLES</span></i></Link>
          <Link href="./Cake"><i><FontAwesomeIcon icon={faSquare} /><span>CAKES</span></i></Link>
            
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default FdCategories
