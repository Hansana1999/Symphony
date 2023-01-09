import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const MuCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Violin"><i><FontAwesomeIcon icon={faSquare} /><span>VIOLINS</span></i></Link>
          <Link href="./Keyboard"><i><FontAwesomeIcon icon={faSquare} /><span>KEYBOARDS</span></i></Link>
          <Link href="./Piano"><i><FontAwesomeIcon icon={faSquare} /><span>PIANOS</span></i></Link>
          <Link href="./Drum"><i><FontAwesomeIcon icon={faSquare} /><span>DRUMSET</span></i></Link>
          <Link href="./Guitar"><i><FontAwesomeIcon icon={faSquare} /><span>GUITAR</span></i></Link>
            
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default MuCategories
