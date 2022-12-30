import React from "react"
import styles from "/styles/HomeWrapper.module.css"
import cx from "classnames";
import { FaUserAlt , FaPlus ,FaShoppingBag, FaShare } from "react-icons/fa";


const Wrapper = () => {
  const data = [
    {
      cover: <FaUserAlt/>,
      title: "Free Account",
      decs: "You can create free account in symphony.lk.",
    },
    {
      cover: <FaPlus/>,
      title: "Post Add",
      decs: "Post ads about any items you need to share online.",
    },
    {
      cover: <FaShoppingBag/>,
      title: "Free Items",
      decs: "Select the best item you want for free.",
    },
    {
      cover: <FaShare/>,
      title: "Sharing",
      decs: "Share your items with others & grow community.",
    },
  ]
  return (
    <>
    <h2 className={cx(styles["how"],)}>How It Works?</h2>
      <section className={cx(styles["wrapper"],)}>
        <div className={cx(styles["grid2"],)}>
          {data.map((val, index) => {
            return (
              <div className={cx(styles["wproduct"],)} key={index}>
                <div className={cx(styles["wicon-circle"],)}>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
      
    </>
  )
}

export default Wrapper
