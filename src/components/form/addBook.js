
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const AddBook = () => {
    const url = "";
    const [data, setData] = useState({
        
    });

    const handleEventOnChange =(event)=>{
        const newData = {...data};
        newData[event.target.id] = event.target.value;
        setData(newData);
        console.log(newData);
    }

    const handleEventOnSubmit =(event)=>{
        event.preventDefault();

        axios.post(url,{

        })

    }

    return (
        <div className=" h-screen flex-1 p-7 ">
            <div className='m-7'>
                <form className='border-2 border-green-900 p-7' onSubmit={(event)=>handleEventOnSubmit(event)}>
                    <h1 className='uppercase text-green-700  font-bold text-lg pb-5'>Thêm một cuốn sách:</h1>
                    <div>
                        <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                            <label htmlFor="nameBook" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tên sách:</label>
                            <input type="text" id="nameBook" onChange={(event)=>handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300"  required="" />
                        </div>
                        <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                            <label htmlFor="author" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tác giả:</label>
                            <input type="text" id="author" onChange={(event)=>handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300"  required="" />
                        </div>
                        <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                            <label htmlFor="pageNumber" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số trang:</label>
                            <input type="number" id="pageNumber" onChange={(event)=>handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                        </div>
                        <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                            <label htmlFor="release" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Năm xuất bản:</label>
                            <input type="text" id="release" onChange={(event)=>handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                        </div>
                        <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                            <label htmlFor="amount" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số lượng:</label>
                            <input type="number" id="amount" onChange={(event)=>handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                        </div>
                        
                    </div>

                    <input type="submit" className="p-2 m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                    <input type="reset" className="p-2 m-2 text-white bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                </form>


            </div>
        </div>
    );


}

export default AddBook;