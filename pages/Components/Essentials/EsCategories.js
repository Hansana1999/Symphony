import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const EsCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Helthcare"><i><FontAwesomeIcon icon={faSquare} /><span>HEALTHCARE</span></i></Link>
          <Link href="./Grocery"><i><FontAwesomeIcon icon={faSquare} /><span>GROCERY</span></i></Link>
          <Link href="./Household"><i><FontAwesomeIcon icon={faSquare} /><span>HOUSE HOLD</span></i></Link>
          <Link href="./Baby"><i><FontAwesomeIcon icon={faSquare} /><span>BABY PRODUCTS</span></i></Link>
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default EsCategories
