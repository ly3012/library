// import "antd/dist/antd.min.css";
// import { Layout } from 'antd';
import { useState } from 'react';
// import { Menu } from "antd";
// import './style/nav.css';
import logoPage from './img/logoPage.png';
import { FaUser } from "react-icons/fa";

// const { Header, Footer, Sider, Content } = Layout;


const Nav = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='topnav flex flex-row justify-between py-2 bg-orange-900'  
        style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQaY0r7xuVqLEO05ohT--a4bJLjzdjmI2DZMMdOOOG7O65_6CJEJ2u_xKUGeKa693WNM&usqp=CAU")`}}
        >
         {/* style={{backgroundImage: `url("")`}}> */}
            <a href="/#" className="flex items-center pl-2">
                <img src={logoPage} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Library</span>
            </a> 
            <div className='dark show  flex-col flex items-center relative mr-6'>
                <a href="/#" className="flex-col flex items-center z-50 text-2xl dark:text-white" onMouseMove= {() => setOpen(true)} onMouseOut= {() => setOpen(false)}>
                    <FaUser />
                    {/* <p className="mr-3 h-6 sm:h-9"><IconName icon="fa-light fa-user" /></p> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Admin</span>
                </a>
                {/* <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown"> */}



                <div className={` ${open ? "block" : "hidden "}text-gray-700 cursor-pointer  list-none  rounded shadow my-4 flex-col flex items-center  absolute top-16 m-3  bg-slate-100`} id="dropdown">
                    {/* <div className='py-3 w-4 h-4 left-3 absolute mt-1 bg-white'></div> */}
                    <div className="py-1 text-gray-700 " aria-labelledby="dropdown">
                        <li>
                            <a href="/#" className="text-sm hover:bg-gray-300 text-gray-700 block px-4 py-2">Dashboard</a>
                        </li>
                        <li>
                            <a href="/#" className="text-sm hover:bg-gray-300 text-gray-700 block px-4 py-2">Sign out</a>
                        </li>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav;