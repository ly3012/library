import { useEffect, useState } from 'react';
import readerService from '../service/readerService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddReader from '../form/addReader';
import EditReader from '../form/editReader';
import moment from 'moment';

const Reader = () => {

    const [dataReader, setDataReader] = useState([]);

    const init = () => {
        readerService.getReader()
            .then(response => {
                setDataReader(response.data); 
                console.log("data reader:", dataReader);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        readerService.deleteReader(id)
            .then(response => {
                init();

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className=" h-screen flex-1 p-7  ">
            <div className='headContent flex flex-row justify-between'>
                <AddReader />
                <SearchComponent />
            </div>

            <table className='mt-3'>
                <thead>
                    <tr>
                        <th>Id Reader</th>
                        <th>Name</th>
                        <th>Add</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataReader.map((item) => {
                        return (
                            < tr key={item.idReader}>

                                <td>{item.idReader}</td>
                                <td>{item.fullName}</td>
                                <td>{item.address}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                <td>{item.status}</td>
                                {/* <td>{item.updatedAt}</td> */}
                                <td>{moment(item.updatedAt).format("DD/MM/YYYY, hh:mm:ss")}</td>

                                <td>
                                    <EditReader
                                        id={item.idReader} />

                                    <button
                                        className= {`text-white active:bg-red-600 
                                        text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                                        focus:outline-none  ease-linear transition-all duration-150
                                        inline-flex items-center bg-red-500  hover:bg-red-600 
                                        border-b-4 border-red-700 hover:border-red-500  min-w-fit`}
                                        onClick={() => {if(window.confirm('Delete the item?'))
                                            handleDelete(item.idReader);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
}

export default Reader;