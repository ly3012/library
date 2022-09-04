import  { useEffect, useState } from 'react';
import bookService from '../service/bookService';
import React from 'react';
// import { FaBook } from 'react-icons/fa'
import SearchComponent from '../layouts/searchComponent';
// import useFetch from '../customize/fetch';
// import moment from 'moment';
// import addBook from '../form/addBook';
// import LoginForm from '../form/login';
// import SaveBook from '../form/addBook';
import AddBook from '../form/addBook';
import EditBook from '../form/editBook';
// import { useState } from 'react';
// import  from '../services/employee.service';

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
    console.log('Printing id', id);
    bookService.deleteBook(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
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
            {/* {isLoading === false && dataBook && dataBook.length > 0 && dataBook.map((item) => { */}
            {dataBook.map((item) => {
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
                            {/* <Link className="bg-blue-500 py-1 px-3 m-1 btn" to={`/employees/edit/${item.idBook}`}>Update</Link> */}
                            <EditBook
                            id = {item.idBook}/>
                            <button className="bg-red-500 py-1 px-3 m-1 btn" onClick={() => {
                                handleDelete(item.idBook);
                            }}>Delete</button>
                        </td>
                       
                    </tr>
                )
            })}

            {/* {isLoading === true &&
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
  );
}

export default BookList;