import { useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoPage from './img/logoPage.png';
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from 'react-icons/fa';



const Nav = (props) => {
    const [open, setOpen] = useState(false);
    let history = useHistory();
    const Logout = () => {
        localStorage.removeItem("token")
        history.replace({ pathname: '/' })
    }

    return (

        <div className='topnav flex flex-row justify-between py-2 bg-orange-900 sticky top-0 h-16'
            style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQaY0r7xuVqLEO05ohT--a4bJLjzdjmI2DZMMdOOOG7O65_6CJEJ2u_xKUGeKa693WNM&usqp=CAU")` }}
        >
            <Link to={"/dashboard"} className="flex items-center pl-2">
                <img src={logoPage} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BOOK</span>
            </Link>
            <div className='dark show  flex-col flex items-center relative pr-10'>
                <a href="/#" className="flex-col flex items-center z-50 text-2xl dark:text-white"
                    onClick={(event) => {
                        event.preventDefault();
                        setOpen(!open)
                    }}
                >
                    <FaUser />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{localStorage.getItem("user_userName")}</span>
                </a>

                {open ?
                    (<div className={` text-gray-100 cursor-pointer  list-none  rounded shadow flex-col flex items-center  absolute top-16  mb-2 mr-10 bg-amber-900`} id="dropdown">
                        <div className="py-1 text-gray-100 " aria-labelledby="dropdown">
                            <li>
                                <p className="text-sm rounded font-bold hover:bg-yellow-800 text-gray-100 block px-4 py-2 min-w-10">
                                    {
                                        localStorage.getItem("user_name")}
                                </p>
                            </li>
                            <li>
                                <button
                                    onClick={Logout}
                                    className={` text-white font-bold  
                                    text-sm px-6 py-3 rounded shadow hover:shadow-sm outline-none 
                                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                                    inline-flex items-center bg-amber-900 hover:bg-yellow-800 
                                    border-b-4 border-yellow-900 hover:border-yellow-700  min-w-fit
                        `}
                                // className="text-sm hover:bg-yellow-700 text-gray-100  px-4 py-2 min-w-10 font-bold  inline-flex justify-around"
                                >
                                    <FaSignOutAlt />
                                    <div className='pl-1'>Log out</div>
                                </button>
                            </li>
                        </div>
                    </div>
                    ) : null}

                {/* <div className={` ${open ? "block" : "hidden "}text-gray-700 cursor-pointer  list-none  rounded shadow my-4 flex-col flex items-center  absolute top-16 m-3  bg-slate-100`} id="dropdown">
                    <div className='py-3 w-4 h-4 left-3 absolute mt-1 bg-white'></div>
                    <div className="py-1 text-gray-700 " aria-labelledby="dropdown">
                        <li>
                            <p className="text-sm hover:bg-gray-300 text-gray-700 block px-4 py-2 min-w-10">{props.userLogin.name}</p>
                        </li>
                        <li>
                            <a href="/#" className="text-sm hover:bg-gray-300 text-gray-700 block px-4 py-2">Sign out</a>
                        </li>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Nav;