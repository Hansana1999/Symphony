import React from "react"
import Link from "next/link";
import styles from '/styles/Categories.module.css';
import cx from 'classnames';

const Categories = () => {
  const data = [
    {
      path:"/Vehicalparts",
      cateImg: "/images/Category/car.png",
      cateName: "VEHICAL PARTS",
    },
    {
      path:"/ElectronicDevices/ElectronicDevices",
      cateImg: "/images/Category/smartphone (2).png",
      cateName: "ELECTRONICS",
    },
    {
      path:"/HomeGarden",
      cateImg: "/images/Category/house.png",
      cateName: "HOME & GARDEN",
    }, 
    {
      path:"Animals",
      cateImg: "/images/Category/cat.png",
      cateName: "PETS",
    },
    {
      path:"/Toys",
      cateImg: "/images/Category/toys.png",
      cateName: "TOYS",
    },
    {
      path:"/HobbySport",
      cateImg: "/images/Category/sports.png",
      cateName: "HOBBY & SPORT",
    },
    {
      path:"/Foods",
      cateImg: "/images/Category/burger.png",
      cateName: "FOODS",
    },
    {
      path:"/Education",
      cateImg: "/images/Category/education.png",
      cateName: "EDUCATION",
    },
    {
      path:"/Essentials",
      cateImg: "/images/Category/essential-oil.png",
      cateName: "ESSENTIALS",          
    },
    {
      path:"/FashionBeauty",
      cateImg: "/images/Category/dress.png",
      cateName: "FASHION",
    },
    {
      path:"/Gifts",
      cateImg: "/images/Category/giftbox.png",
      cateName: "GIFTS",
    },
    {
      path:"/Music",
      cateImg: "/images/Category/guitar.png",
      cateName: "MUSIC",
    },
  ]

  return (
    <>
      <div className={cx(styles["category"],)}>
        {data.map((value, index) => {
          return (
            <Link href={value.path} className={cx(styles["abc"],)}>
              <div className={cx(styles["box"],)} key={index}>
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


