import { useEffect, useState } from 'react';
import userService from '../service/userService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddUser from '../form/addUser';
import EditBook from '../form/editBook';
import moment from 'moment';


const Admin = (props) => {
    document.title = "Management User";

    const [dataUser, setDataUser] = useState([]);
    const [dataRender, setDataRender] = useState([]);

    const handleChangeFilter = (newFilter, event) => {
        event.preventDefault();
        userService.findUserByCriteria(newFilter)
            .then(response => {
                let data = (response && response.data) ? response.data : [];
                setDataRender(data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const init = () => {
        userService.getUser()
            .then(response => {
                // setDataUser(response.data);
                setDataRender(response.data);
                // console.log("data render",dataRender);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        init();
    }, []);

    //  console.log("data render",dataRender);

    const handleDelete = (id) => {
        userService.deleteUser(id)
            .then(response => {
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className={`${props.openSider ? "ml-72" : "ml-20 "} content flex-1 p-7  "`}>
            <div className='headContent flex flex-row justify-between mb-7'>
                <AddUser />
                <SearchComponent handleChangeFilter={handleChangeFilter} />
            </div>

            <table className=''>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        {/* <th>Author</th> */}
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Roles:</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRender.length > 0 && dataRender.map((item, index) => {
                        var role = "";
                        item.roles.forEach(element => {
                            if (element.name === "ROLE_USER") role += `USER `;
                            if (element.name === "ROLE_ADMIN") role += `ADMIN `;
                            // role += `${element.name} `;
                        });


                        return (
                            < tr key={item.id}>
                                <td>{index + 1}</td>
                                {/* <td>{item.id}</td> */}
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                {/* <td>{item.released}</td> */}
                                <td>{role}</td>
                                <td>{moment(item.updatedAt).format("DD/MM/YYYY, hh:mm:ss")}</td>
                                <td>
                                    {/* <EditBook
                                        id={item.id} /> */}

                                    <button
                                        className={`text-white active:bg-red-600 
                                        text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                                        focus:outline-none  ease-linear transition-all duration-150
                                        inline-flex items-center bg-red-500  hover:bg-red-600 
                                        border-b-4 border-red-700 hover:border-red-500  min-w-fit
                                        lg:min-w-2`}
                                        onClick={() => {
                                            if (window.confirm('Delete the item?'))
                                                handleDelete(item.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })}

                    {dataRender.length === 0 &&
                        <tr>
                            <td colSpan={'8'} className='text-center'>NotResult...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    );
}

export default Admin;