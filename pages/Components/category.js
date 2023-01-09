import styles from '/styles/category.module.css'
import Link from 'next/link';

const Categories = () => {
  const data = [
    {
      path:"./Vehicalparts",
      cateImg: "/images/Categories/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"./ElectronicDevices",
      cateImg: "/images/Categories/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"./HomeGarden",
      cateImg: "/images/Categories/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"./Animals",
      cateImg: "/images/Categories/cat.png",
      cateName: "PETS",
    },
    {
      path:"./Toys",
      cateImg: "/images/Categories/toys.png",
      cateName: "TOYS",
    },
    {
      path:"./HobbySport",
      cateImg: "/images/Categories/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"./Foods",
      cateImg: "/images/Categories/burger.png",
      cateName: "FOODS",
    },
    {
      path:"./Education",
      cateImg: "/images/Categories/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"./Essentials",
      cateImg: "/images/Categories/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"./FashionBeauty",
      cateImg: "/images/Categories/dress.png",
      cateName: "FASHION",
    },
    {
      path:"./Gifts",
      cateImg: "/images/Categories/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"./Music",
      cateImg: "/images/Categories/guitar.png",
      cateName: "MUSIC",
    },
  ]

  return (
    <>
      <div className={styles.category}>
        {data.map((value, index) => {
          return (
            <Link href ={value.path} className={styles.abc}>
              <div className={styles.box1} key={index}>
                  <img src={value.cateImg} alt='' />
                  <span>{value.cateName}</span>    
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Categories


