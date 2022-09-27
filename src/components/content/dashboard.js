import React from 'react';
import bookService from '../service/bookService';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import userService from '../service/userService';
import callCardService from '../service/callCardService';
import readerService from '../service/readerService';


const Dashboard = (props) => {
    const [dataBook, setDataBook] = useState([]);
    const [dataReader, setDataReader] = useState([]);
    const [callCard, setCallCard] = useState([]);
    const [user, setUser] = useState([]);
    const getDataBook = () => {
        bookService.getBook()
            .then(response => {
                setDataBook(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        getDataBook();
    }, []);

    const getDataReader = () => {
        readerService.getReader()
            .then(response => {
                setDataReader(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        getDataReader();
    }, []);

    const getDataCallCard = () => {
        callCardService.getCallCard()
            .then(response => {
                setCallCard(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        getDataCallCard();
    }, []);

    const getDataUser = () => {
        userService.getUser()
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        getDataUser();
    }, []);




    return (

        <div className={`${props.openSider ? "ml-72" : "ml-20 "} content flex-1 "`}>
            <div
                className='grid gap-4 grid-cols-4 p-6 '>
                <div
                    className='block p-6 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-green-800 dark:border-gray-500'
                >
                    <h5 className="mb-2 text-2xl font-bold text-gray-300">Tổng số sách</h5>
                    <div className="text-5xl font-bold text-gray-200 p-6 mb-4">
                        {dataBook.length}
                    </div>
                    <Link
                        className='text-gray-400 btn border rounded-md border-gray-500 bg-green-900 hover:bg-green-700 shadow-sm p-1 px-16 w-full'
                        to={'/book'}
                    >
                        Chi tiết
                    </Link>
                </div>
                <div
                    className='block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-yellow-800 dark:border-gray-500'
                >
                    <h5 className="mb-2 text-2xl font-bold text-gray-300">Số bạn đọc</h5>
                    <div className="text-5xl font-bold text-gray-200 p-6 mb-4">
                        {dataReader.length}
                    </div>
                    <Link
                        className='text-gray-400 btn border rounded-md border-gray-500 bg-yellow-900 hover:bg-yellow-700 shadow-sm p-1 px-16 w-full'
                        to={'/reader'}
                    >
                        Chi tiết
                    </Link>
                </div>
                <div
                    className='block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-blue-900 dark:border-gray-500'
                >
                    <h5 className="mb-2 text-2xl font-bold text-gray-300">Số lượt mượn</h5>
                    <div className="text-5xl font-bold text-gray-200 p-6 mb-4">
                        {callCard.length}
                    </div>
                    <Link
                        className='text-gray-400 btn border rounded-md border-gray-500 bg-blue-900 hover:bg-blue-700 shadow-sm p-1 px-16 w-full'
                        to={'/callCard'}
                    >
                        Chi tiết
                    </Link>
                </div>
                <div
                    className='block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-500'
                >
                    <h5 className="mb-2 text-2xl font-bold text-gray-300">Số thủ thư</h5>
                    <div className="text-5xl font-bold text-gray-200 p-6 mb-4">
                        {user.length}
                    </div>
                    <Link
                        className='text-gray-400 btn border rounded-md border-gray-500 bg-gray-900 hover:bg-gray-700 shadow-sm p-1 px-16 w-full'
                        to={'/admin'}
                    >
                        Chi tiết
                    </Link>
                </div>




            </div>

        </div >
    );
}


export default Dashboard;