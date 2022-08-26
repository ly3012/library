import React from 'react';
// import useFetch from '../customize/fetch';
import { useState } from 'react';
// import { Input } from 'antd';
// import FormItemLabel from 'antd/lib/form/FormItemLabel';
// import {SearchComponent} from '../layouts/searchComponent';
import SearchComponent from '../layouts/searchComponent'
import { FaUserPlus } from 'react-icons/fa'

const Member = () => {

    // const { data: dataCovid, isLoading, isError }
    //     = useFetch(``, false);

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const handleEventClick = (event) => {
        setName2(name1);
        // console.log("Click rồi nhé",event.target.value);
    }
    const handleEventOnChange = (event) => {
        setName1(event.target.value);
        // console.log("Click rồi nhé",event.target.value);
    }
    return (

        <div className=" h-screen flex-1 p-7  ">
            <div className='headContent flex flex-row justify-between'>
                <button
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded min-w-fit">

                    <FaUserPlus />
                    <div className='m-0 pl-1'>Add</div>


                </button>
                <SearchComponent />

            </div>

            <input type={'text'} value={name1} onChange={(event) => handleEventOnChange(event)} />
            <h1>Tôi tên là: {name2}</h1>
            <button type='button' className='bg-fuchsia-400 ' onClick={() => handleEventClick()}>Clickme!</button>
            <h1>Member management:</h1>

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

export default Member;