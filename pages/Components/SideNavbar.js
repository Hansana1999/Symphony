import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import styles from '/styles/Sidebar.module.css'



function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden"
          />
        </Disclosure.Button>
        <div className=" w-1/3 bg-white  lg:w-60 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/car.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                VEHICAL PARTS
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/smartphone (2).png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                ELECTRONICS
                </h3>
              </div>  
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/house.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                HOME & GARDEN
                </h3>
              </div>  
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/cat.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                PETS
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/toys.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                TOYS
                </h3>
              </div> 
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/sports.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                HOBBY & SPORT
                </h3>
              </div> 
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/burger.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                FOODS
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/education.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                EDUCATION
                </h3>
              </div> 
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/essential-oil.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                ESSENTIALS
                </h3>
              </div> <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/dress.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                FASHION
                </h3>
              </div> <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/giftbox.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                GIFTS
                </h3>
              </div> <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <img className={styles.image} src='/images/Categories/guitar.png' />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                MUSIC
                </h3>
              </div>       
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
