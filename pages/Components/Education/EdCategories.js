import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const EdCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./School"><i><FontAwesomeIcon icon={faSquare} /><span>SCHOOL BAGS</span></i></Link>
          <Link href="./Bottle"><i><FontAwesomeIcon icon={faSquare} /><span>WATER BOTTLES</span></i></Link>
          <Link href="./Stat"><i><FontAwesomeIcon icon={faSquare} /><span>STATIONARIES</span></i></Link>
          <Link href="./Note"><i><FontAwesomeIcon icon={faSquare} /><span>NOTE BOOKS</span></i></Link>
          <Link href="./Story"><i><FontAwesomeIcon icon={faSquare} /><span>STORY BOOKS</span></i></Link>
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default EdCategories