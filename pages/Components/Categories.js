import React from "react"
import Link from "next/link";
import styles from '/styles/Categories.module.css';
import cx from 'classnames';

const Categories = () => {
  const data = [
    {
      path:"/Components/Vehicalparts/Vehicalparts",
      cateImg: "/images/Category/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"/Components/ElectronicDevices/ElectronicDevices",
      cateImg: "/images/Category/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"/Components/HomeGarden/HomeGarden",
      cateImg: "/images/Category/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"/Components/Animals/Animals",
      cateImg: "/images/Category/cat.png",
      cateName: "PETS",
    },
    {
      path:"/Components/Toys/Toys",
      cateImg: "/images/Category/toys.png",
      cateName: "TOYS",
    },
    {
      path:"/Components/HobbySport/HobbySport",
      cateImg: "/images/Category/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"/Components/Foods/Foods",
      cateImg: "/images/Category/burger.png",
      cateName: "FOODS",
    },
    {
      path:"/Components/Education/Education",
      cateImg: "/images/Category/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"/Components/Essentials/Essentials",
      cateImg: "/images/Category/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"/Components/FashionBeauty/FashionBeauty",
      cateImg: "/images/Category/dress.png",
      cateName: "FASHION",
    },
    {
      path:"/Components/Gifts/Gifts",
      cateImg: "/images/Category/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"/Components/Music/Music",
      cateImg: "/images/Category/guitar.png",
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


