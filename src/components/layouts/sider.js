// import "antd/dist/antd.min.css";
import { Layout } from 'antd';
import React, { useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import avatar from "./img/sider/avatar.jpg"
import { RiContactsBook2Line } from "react-icons/ri";
import { RiBarChartBoxFill } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";





// const { Header, Footer, Sider, Content } = Layout;

const Sider = () => {

   const [open, setOpen] = useState(true);
   const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Accounts", src: "logoUser", gap: true },
      { title: "Schedule ", src: "Calendar" },
      { title: "Search", src: "Search" },
      { title: "Analytics", src: "Chart" },
      { title: "Files ", src: "Folder", gap: true },
      { title: "Setting", src: "Setting" },
   ];

   // if(window.innerWidth < 800) setOpen(false);
   return (
      <div className="flex">
         <div
            className={` ${open ? "w-72" : "w-20 "
               }   h-screen p-5  pt-8 relative duration-300`}
               style={{backgroundImage: `url("https://3.imimg.com/data3/FM/UD/MY-3597718/colored-handmade-paper-500x500.jpg")`}}
         >
            <div
               className={`absolute cursor-pointer -right-1 top-9 w-7 border-gray-700
           ${!open && "rotate-180"} text-lg text-yellow-50`}
               onClick={() => setOpen(!open)}
            >
               <FaChevronCircleLeft />
            </div>
            <div className="flex gap-x-4 items-center border-b-yellow-900 border-b-2 pb-3">
               <img
                  src={avatar}
                  className={`cursor-pointer rounded-full h-20 duration-500 ${!open && "rotate-[360deg] h-10"
                     }`}
               />
               <h1
                  className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                     }`}
               >
                  Designer
               </h1>
            </div>
            <ul className="pt-6">
               <a className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400  hover:bg-yellow-800 hover:text-gray-100 text-sm items-center gap-x-4 `}
               >
                  <RiBarChartBoxFill className={` h-10 text-2xl `} />
                  <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                     Dashboard
                  </span>
                  {/* </a> */}
               </a>
               <a className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400  hover:bg-yellow-800 hover:text-gray-100 text-sm items-center gap-x-4 `}
               >
                  <BiBook className={` h-10 text-2xl `} />
                  <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                     Quản lý sách
                  </span>
                  {/* </a> */}
               </a>
               <a className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400  hover:bg-yellow-800 hover:text-gray-100 text-sm items-center gap-x-4 `}
               >
                  <RiContactsBook2Line className={` h-10 text-2xl `} />
                  <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                     Quản lý thành viên
                  </span>
                  {/* </a> */}
               </a>
               <a className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400  hover:bg-yellow-800 hover:text-gray-100 text-sm items-center gap-x-4 `}
               >
                  <GiNotebook className={` h-10 text-2xl `} />
                  <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                     Quản lý phiếu mượn
                  </span>
                  {/* </a> */}
               </a>
               <a className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-400  hover:bg-yellow-800 hover:text-gray-100 text-sm items-center gap-x-4 `}
               >
                  <RiAdminLine className={` h-10 text-2xl `} />
                  <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                     Quản lý Admin
                  </span>
               </a>

            </ul>
         </div>

      </div>
   );
};

export default Sider;