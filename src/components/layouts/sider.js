import React, { } from "react";
import './style/sider.css'
import { FaChevronCircleLeft } from "react-icons/fa";
import avatar from "./img/sider/avatar.jpg"
import { RiContactsBook2Line } from "react-icons/ri";
import { RiBarChartBoxFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Sider = (props) => {

   const openSider = props.openSider;


   return (

      <div className="sider bottom-0 top-16 fixed min-h-screen overflow-hidden ">
         <div
            className={` ${openSider ? "w-72" : "w-20 "} 
                  min-h-fit  h-screen p-5  pt-8  duration-300 flex flex-col 
                  `}
            style={{ backgroundImage: `url("https://3.imimg.com/data3/FM/UD/MY-3597718/colored-handmade-paper-500x500.jpg")` }}
         >
            <div
               className={`absolute cursor-pointer -right-1 top-9 w-7 border-gray-700
           ${!openSider && "rotate-180"} text-lg text-yellow-50`}
               onClick={() => props.updateOpenSider(openSider)}
            >
               <FaChevronCircleLeft />
            </div>
            <div className="flex gap-x-4 items-center border-b-yellow-900 border-b-2 pb-3 ">
               {/* <NavLink activeClassName="active" > */}
               <img alt="no-avatar"
                  src={avatar}
                  className={`cursor-pointer rounded-full h-20 duration-500 ${!openSider && " h-10"
                     }`}
               />

               {/* </NavLink> */}
               {/* <h1>Designer</h1> */}
               <h1
                  className={` text-white origin-left font-medium text-xl duration-200 ${!openSider && "scale-0"
                     }`}
               >
                  {/* {props.userLogin.name} */}
                  {
                     localStorage.getItem("user_name")
                  }
               </h1>
            </div>
            <ul className="pt-6 min-h-fit h-screen">
               <NavLink activeClassName="active" to="/dashboard" exact
                  className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400   hover:text-gray-100 text-sm items-center gap-x-4  focus:text-gray-100 `}
               >
                  <RiBarChartBoxFill className={` h-10 text-2xl `} />
                  <span className={`${!openSider && "hidden"} origin-left duration-200 text-lg`}>
                     Dashboard
                  </span>
                  {/* </NavLink> */}
               </NavLink>
               <NavLink activeClassName="active" to="/book"
                  className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400   hover:text-gray-100 text-sm items-center gap-x-4 focus:text-gray-100 `}
               >
                  <BiBook className={` h-10 text-2xl `} />
                  <span className={`${!openSider && "hidden"} origin-left duration-200 text-lg `}>
                     Qu???n l?? s??ch
                  </span>
                  {/* </NavLink> */}
               </NavLink>
               <NavLink activeClassName="active" to="/reader"
                  className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400   hover:text-gray-100 text-sm items-center gap-x-4  focus:text-gray-100 `}
               >
                  <RiContactsBook2Line className={` h-10 text-2xl `} />
                  <span className={`${!openSider && "hidden"} origin-left duration-200 text-lg`}>
                     Qu???n l?? ng?????i m?????n
                  </span>
                  {/* </NavLink> */}
               </NavLink>
               <NavLink activeClassName="active" to="/callCard"
                  className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400   hover:text-gray-100 text-sm items-center gap-x-4  focus:text-gray-100 `}
               >
                  <GiNotebook className={` h-10 text-2xl `} />
                  <span className={`${!openSider && "hidden"} origin-left duration-200 text-lg`}>
                     Qu???n l?? phi???u m?????n
                  </span>
                  {/* </NavLink> */}
               </NavLink>
               <NavLink activeClassName="active" to="/admin"
                  className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400   hover:text-gray-100 text-sm items-center gap-x-4  focus:text-gray-100 `}
               >
                  <RiAdminLine className={` h-10 text-2xl `} />
                  <span className={`${!openSider && "hidden"} origin-left duration-200 text-lg`}>
                     Qu???n l?? t??i kho???n
                  </span>
               </NavLink>

            </ul>
         </div>

      </div>
   );
};

export default Sider;