import { useEffect, useState } from 'react';
import bookService from '../service/bookService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddBook from '../form/addBook';
import EditBook from '../form/editBook';
import moment from 'moment';


const BookList = () => {

    const [dataBook, setDataBook] = useState([]);

    const init = () => {
        bookService.getBook()
            .then(response => {
                setDataBook(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        bookService.deleteBook(id)
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
                <AddBook />
                <SearchComponent />
            </div>

            <table className=''>
                <thead>
                    <tr>
                        <th>Id Book</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>PageNumber</th>
                        <th>Release</th>
                        <th>Amount</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataBook.map((item) => {
                        return (
                            < tr key={item.idBook}>

                                <td>{item.idBook}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.numberOfPages}</td>
                                <td>{item.released}</td>
                                <td>{item.amount}</td>
                                <td>{moment(item.updatedAt).format("DD/MM/YYYY, hh:mm:ss")}</td>
                                <td>
                                    <EditBook
                                        id={item.idBook} />

                                    <button
                                        className= {`text-white active:bg-red-600 
                                        text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                                        focus:outline-none  ease-linear transition-all duration-150
                                        inline-flex items-center bg-red-500  hover:bg-red-600 
                                        border-b-4 border-red-700 hover:border-red-500  min-w-fit`}
                                        onClick={() => {if(window.confirm('Delete the item?'))
                                            handleDelete(item.idBook);
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

export default BookList;