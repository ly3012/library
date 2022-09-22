import React from 'react';
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import roleService from '../service/roleService';
import userService from '../service/userService';
import { useHistory } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import Select from "react-select";

const AddUser = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [user, setUser] = useState({
        name: null,
        username: null,
        password: null,
        email: null,
        phoneNumber: null,
    });

    const [roles, setRoles] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const getRole = () => {
        roleService.getRoles()
            .then(response => {
                setRoles(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        getRole();
    }, []);


    const options = roles.map((item, index) => ({
        value: item.name,
        label: item.name
    }
    ))


    const handleEventOnChange = (event) => {
        const newData = { ...user };
        newData[event.target.id] = event.target.value;
        setUser(newData);
    }

   
    const handleSelectOptions = (event) => {
        console.log("event",event);

        setSelectedOptions(event);
        console.log("selectedOptions",selectedOptions);
    }
    

    const userCreate = {
            name: user.name,
            username: user.username,
            password: user.password,
            email: user.email,
            phoneNumber: user.phoneNumber,
            roles: selectedOptions.map((item)=>{
                return item.value;
            })
        
    }
    let history = useHistory();
    const saveUser = (event) => {
        userService.createUser(userCreate)
            .then(response => {
                console.log("employee added successfully", response.data);
                setShowAlert(true);
                history.go("/admin")

                // history.replace({pathname: "/admin"})
            })
            .catch(error => {
                alert("Vui lòng điền đúng thông tin");
                console.log('something went wroing', error);
            })


    }
    const styles = {
        multiValue: styles => {
            return {
                ...styles,
                backgroundColor: "rgba(0, 128, 43, 0.5)"
            };
        }
    };

    return (
        <>
            <button
                className={` text-white active:bg-blue-600 font-bold  
                    text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                    inline-flex items-center bg-blue-500  hover:bg-blue-600 
                    border-b-4 border-blue-700 hover:border-blue-500  min-w-fit
        `}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <FaUser />
                <div className='m-0 pl-1'>Add</div>
            </button>
            {showModal ? (
                <>
                    <div
                        className=" max-h-fit top-0 left-0 right-0 bottom-2 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-3 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between px-5 pt-5 pb-0 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-medium uppercase text-green-700 text-center pb-5">
                                        Tạo tài khoản
                                    </h3>
                                    <button
                                        className="p-1 px-2 bg-slate-100 ml-auto text-center border-0 text-gray-500  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-5 px-3 flex-auto">
                                    <form className=' p-5' onSubmit={(event) => saveUser(event)}>
                                        <div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="name" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tên người dùng:</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={user.name}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="username" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tên đăng nhập:</label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    value={user.username}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">

                                                <label htmlFor="password" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Mật khẩu:</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    value={user.password}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="email" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Email:</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={user.email}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="phoneNumber" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số điện thoại:</label>
                                                <input
                                                    type="text"
                                                    id="phoneNumber"
                                                    value={user.phoneNumber}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>

                                            <div className=" flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="roles" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Roles:</label>
                                                <Select
                                                    styles={styles}
                                                    className="basic-multi-select border border-gray-300 md:min-w-20  bg-gray-50 max-w-20 cursor-pointer" required=""
                                                
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    options={
                                                        options
                                                    }
                                                    // defaultValue={options[0]}

                                                    onChange={event => handleSelectOptions(event)}
                                                />

                                            </div>
                                        </div>

                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={() => saveUser()}
                                    >
                                        Save Changes
                                    </button>
                                    {showAlert ? (
                                        <div
                                            class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 fixed top-0 bottom-2/3 left-1/3 right-1/3 "
                                            role="alert"
                                        >
                                            <h4 class="text-2xl font-medium leading-tight mb-2">Well done!</h4>
                                            <p class="mb-4">

                                            </p>
                                            <hr class="border-green-600 opacity-30" />
                                            <p class="mt-4 mb-0">
                                                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                            </p>
                                            <button
                                                to="/user"
                                                class="font-bold btn border-spacing-2 bg-green-700
                        text-white active:bg-green-800 
                        text-sm py-2 px-4 m-1 rounded shadow hover:shadow-lg outline-none 
                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                        inline-flex items-center  hover:bg-green-800 
                        border-b-4 border-green-800 hover:border-green-800  min-w-fit
                        absolute bottom-4 right-10"
                                                onClick={() => (setShowAlert(false),
                                                    setShowModal(false))}
                                            >
                                                OK
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );


}

export default AddUser;
