import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const GiCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Christmas"><i><FontAwesomeIcon icon={faSquare} /><span>CHRISTMAS ITEMS</span></i></Link>
          <Link href="./New"><i><FontAwesomeIcon icon={faSquare} /><span>NEW YEAR ITEMS</span></i></Link>
          <Link href="./Mother"><i><FontAwesomeIcon icon={faSquare} /><span>MOTHERS DAY</span></i></Link>
          <Link href="./Father"><i><FontAwesomeIcon icon={faSquare} /><span>FATHERS DAY</span></i></Link>
          <Link href="./Valentine"><i><FontAwesomeIcon icon={faSquare} /><span>VALENTINES</span></i></Link>
            
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default GiCategories
