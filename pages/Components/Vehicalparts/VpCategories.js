import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';

const VpCategories = () => {
  
  return (
    <>
    <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Engine"><i><FontAwesomeIcon icon={faSquare} /><span>ENGINE</span></i></Link>
          <Link href="./Battery"><i><FontAwesomeIcon icon={faSquare} /><span>BATERY</span></i></Link>
          <Link href="./Wheel"><i><FontAwesomeIcon icon={faSquare} /><span>WHEEL</span></i></Link>
          <Link href="./Fuel"><i><FontAwesomeIcon icon={faSquare} /><span>FUEL TANK</span></i></Link>
          <Link href="./Screen"><i><FontAwesomeIcon icon={faSquare} /><span>WINDSCREEN</span></i></Link>
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default VpCategories

