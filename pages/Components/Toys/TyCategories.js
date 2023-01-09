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
          <Link href="./TeddyBear"><i><FontAwesomeIcon icon={faSquare} /><span>TEDDY BEAR</span></i></Link>
          <Link href="./Bicycle"><i><FontAwesomeIcon icon={faSquare} /><span>BICYCLES</span></i></Link>
          <Link href="./Car"><i><FontAwesomeIcon icon={faSquare} /><span>CAR ITEMS</span></i></Link>
          <Link href="./Doll"><i><FontAwesomeIcon icon={faSquare} /><span>DOLLS</span></i></Link>
          <Link href="./AnimalToy"><i><FontAwesomeIcon icon={faSquare} /><span>ANIMAL TOYS</span></i></Link>
            
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default GiCategories
