
import React from "react"
import styles from "/styles/Wrapper.module.css"
import Link from "next/link"
import cx from 'classnames';

const Wrapper = () => {
  const data = [
    {
      cateImg: "/images/Categories/car.png",
      title: "Vehical Parts",
      path:"/Components/Vehicalparts/Vehicalparts",
    },
    {
      cateImg: "/images/Categories/smartphone (2).png",
      title: "Electronics",
      path:"/Components/ElectronicDevices/ElectronicDevices",
    },
    {
      cateImg: "/images/Categories/house.png",
      title: "Home & Garden",
      path:"/Components/HomeGarden/HomeGarden",
    },
    {
      cateImg: "/images/Categories/cat.png",
      title: "Pets",
      path:"/Components/Animals/Animals",
    },
    {
      cateImg: "/images/Categories/toys.png",
      title: "Toys",
      path:"/Components/Toys/Toys",
    },
    {
      cateImg: "/images/Categories/sports.png",
      title: "Hobby & Sport",
      path:"/Components/HobbySport/HobbySport",
    },
    {
      cateImg: "/images/Categories/burger.png",
      title: "Food",
      path:"/Components/Foods/Foods",
    },
    {
      cateImg: "/images/Categories/education.png",
      title: "Education",
      path:"/Components/Education/Education",
    },
    {
      cateImg: "/images/Categories/essential-oil.png",
      title: "Essentials",
      path:"/Components/Essentials/Essentials",
    },
    {
      cateImg: "/images/Categories/dress.png",
      title: "Fashion & Beauty",
      path:"/Components/FashionBeauty/FashionBeauty",
    },
    {
      cateImg: "/images/Categories/giftbox.png",
      title: "Gifts",
      path:"/Components/Gifts/Gifts",
    },
    {
      cateImg: "/images/Categories/guitar.png",
      title: "Music",
      path:"/Components/Music/Music",
    },
  ]
  return (
    <>
      <section className={cx(styles["wrapper123"],)}>
      <h1 className={cx(styles["how1"],)}>Browse items by category</h1>
        <div className={cx(styles["wcontainer"],)}>
          {data.map((val, index) => {
            return (
              <div key={index}>
                <Link className={cx(styles["cname"],)} href={val.path}>
                <div className={cx(styles["category1"],)}>
                 <img src={val.cateImg} alt='' />
                </div>
                <span >{val.title}</span></Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper

