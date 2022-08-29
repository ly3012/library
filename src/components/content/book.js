import React from 'react';
// import { FaBook } from 'react-icons/fa'
import SearchComponent from '../layouts/searchComponent';
// import useFetch from '../customize/fetch';
// import moment from 'moment';
// import addBook from '../form/addBook';
import LoginForm from '../form/login';
// import { useState } from 'react';
import useFetchDataBook from '../service/fetchDataBook';
import bookService from '../service/bookService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Book = () => {


    const { data: dataBook, isLoading, isError } = useFetchDataBook('http://localhost:8080/admin/books');
    console.log(console.log(">>>>>dataBook", dataBook));

    // const [books, setBooks] = useState([]);
    // const [employees, setEmployees] = useState([]);

//   const init = () => {
//     bookService.getAll()
//       .then(response => {
//         console.log('Printing employees data', response.data);
//         setBooks(response.data);
//       })
//       .catch(error => {
//         console.log('Something went wrong', error);
//       }) 
//   }

//   useEffect(() => {
//     init();
//   }, []);

    // const handleDelete = (id) => {
    //     console.log('Printing id', id);
    //     bookService.remove(id)
    //         .then(response => {
    //             console.log('book deleted successfully', response.data);
    //             init();
    //         })
    //         .catch(error => {
    //             console.log('Something went wrong', error);
    //         })
    // }

    return (
        <div className=" h-screen flex-1 p-7  ">
            <div className='headContent flex flex-row justify-between'>
                <LoginForm />
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
                    {isLoading === false && dataBook && dataBook.length > 0 && dataBook.map((item) => {
                        return (
                            < tr key={item.idBook}>

                                <td>{item.idBook}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.numberOfPages}</td>
                                <td>{item.released}</td>
                                <td>{item.amount}</td>
                                <td>{item.updatedAt}</td>
                                <td>
                                    {/* <Link className="btn btn-info" to={`/employees/edit/${books.idBook}`}>Update</Link> */}
{/* 
                                    <button className="btn btn-danger ml-2" onClick={() => {
                                        handleDelete(book.idBook);
                                    }}>Delete</button> */}
                                </td>
                                {/* <td>
                                    <button className='bg-blue-500 py-1 px-3 m-1 btn'>Edit</button>
                                    <button className='bg-red-500 py-1 px-3 m-1 btn'>Delete</button>
                                </td> */}
                            </tr>
                        )
                    })}

                    {isLoading === true &&
                        <tr>
                            <td colSpan={'7'} className='text-center'>Loading...</td>
                        </tr>
                    }

                    {isError === true
                        && <tr >
                            <td colSpan='7' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div >
    )
}

export default Book;
