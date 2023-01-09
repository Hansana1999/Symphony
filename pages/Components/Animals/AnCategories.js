import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';

const AnCategories = () => {
  
  return (
    <>
    <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Cat"><i><FontAwesomeIcon icon={faSquare} /><span>CATS</span></i></Link>
          <Link href="./Petfood"><i><FontAwesomeIcon icon={faSquare} /><span>PET FOODS</span></i></Link>
          <Link href="./Dog"><i><FontAwesomeIcon icon={faSquare} /><span>DOGS</span></i></Link>
          <Link href="./Farm"><i><FontAwesomeIcon icon={faSquare} /><span>FARM ANIMALS</span></i></Link>
          <Link href="./Fish"><i><FontAwesomeIcon icon={faSquare} /><span>FISH</span></i></Link>
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default AnCategories