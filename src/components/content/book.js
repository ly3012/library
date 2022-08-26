import React from 'react';
import { FaBook } from 'react-icons/fa'
import SearchComponent from '../layouts/searchComponent';
import useFetch from '../customize/fetch';
import moment from 'moment';
// import { useState } from 'react';

const Book = () => {
    //const [url, setUrl] = useState('');
    //setUrl('https://topup-mama-project.herokuapp.com/apis/v1/books');
    // const today = moment().startOf('day').toISOString(true);;
    // const priorDate = moment().startOf('day').subtract(31, 'days').toISOString(true);

    const { data: dataCovid, isLoading, isError }
        = useFetch(`http://localhost:8080/students/list`, true)
    // console.log(dataBook);
    return (
        <div className=" h-screen flex-1 p-7  ">
            <div className='headContent flex flex-row justify-between'>
                <button
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded min-w-fit">
                    <FaBook />
                    <div className='m-0 pl-1'>Add</div>
                </button>
                <SearchComponent />

            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Address</th>
                        <th>Create At</th>
                        <th>Status</th>
                        <th></th>


                    </tr>
                </thead>
                <tbody>
                    {/* {isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item) => {
                    return (
                        < tr key={item.ID}>
                            <td>{item.Date}</td>
                            <td>{item.Active}</td>
                            <td>{item.Confirmed}</td>
                            <td>{item.Deaths}</td>
                        </tr>
                    )
                })} */}

                    {
                        <tr>
                            <td>1</td>
                            <td>Lý</td>
                            <td>01234</td>
                            <td>Phú Thọ</td>
                            <td>1/2/3</td>
                            <td>Hoạt động</td>
                            <td>
                                <button className='bg-blue-500 py-1 px-3 m-1 btn'>Edit</button>
                                <button className='bg-red-500 py-1 px-3 m-1 btn'>Delete</button>

                            </td>
                        </tr>
                    }
                    {/* 
                {isLoading === true &&
                    <tr>
                        <td colSpan={'7'} className='text-center'>Loading...</td>
                    </tr>
                }

                {isError === true
                    && <tr >
                        <td colSpan='7' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                    </tr>
                } */}

                </tbody>
            </table>
        </div >
    )
}

export default Book;
