import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const HsCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Sport"><i><FontAwesomeIcon icon={faSquare} /><span>SPORTS</span></i></Link>
          <Link href="./Travelling"><i><FontAwesomeIcon icon={faSquare} /><span>TRAVELLING ITEMS</span></i></Link>
          <Link href="./Art"><i><FontAwesomeIcon icon={faSquare} /><span>ARTS</span></i></Link>
          <Link href="./Gym"><i><FontAwesomeIcon icon={faSquare} /><span>GYM ITEMS</span></i></Link>
          <Link href="./Collection"><i><FontAwesomeIcon icon={faSquare} /><span>COLLECTIONS</span></i></Link> 
          </ul>
          </div>
      </section>
    </>
  )
}

export default HsCategories
