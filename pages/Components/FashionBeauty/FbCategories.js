import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import styles from '/styles/Home1.module.css'
import Link from 'next/link';


const FbCategories = () => {
  
  return (
    <>
     <section className={styles.bg1}>
      <h3 className={styles.text1}>TYPES</h3>
        <div className='box'>
          <ul>
          <Link href="./Bag"><i><FontAwesomeIcon icon={faSquare} /><span>BAGS</span></i></Link>
          <Link href="./Clothes"><i><FontAwesomeIcon icon={faSquare} /><span>CLOTHING</span></i></Link>
          <Link href="./Jwel"><i><FontAwesomeIcon icon={faSquare} /><span>JEWELLERY</span></i></Link>
          <Link href="./Sun"><i><FontAwesomeIcon icon={faSquare} /><span>SUNGLASSES</span></i></Link>
          <Link href="./Shoes"><i><FontAwesomeIcon icon={faSquare} /><span>SHOES</span></i></Link>
            
            
          </ul>
          </div>
      </section>
    </>
  )
}

export default FbCategories
