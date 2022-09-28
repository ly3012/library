import { useEffect, useState } from 'react';
import bookService from '../service/bookService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddBook from '../form/addBook';
import EditBook from '../form/editBook';
import moment from 'moment';
import { useHistory } from 'react-router-dom';


const BookList = (props) => {
    document.title = "BookList";

    // let history = useHistory();
    // const [keyWord, setKeyWord] = useState('');
    const [dataRender, setDataRender] = useState([]);


    const handleChangeFilter = (newFilter, event) => {
        event.preventDefault();
        bookService.findBookByCriteria(newFilter)
            .then(response => {
                let data = (response && response.data) ? response.data : [];
                setDataRender(data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    const setDataBook = () => {
        bookService.getBook()
            .then(response => {
                setDataRender(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        setDataBook();
    }, []);

    const saveBook = (data) => {
        bookService.createBook(data);
        bookService.getBook()
            .then(response => {
                setDataRender(response.data);
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
    }

    const updateBook = (data) => {

        bookService.updateBook(data)
            .then(response => {
                bookService.getBook()
                    .then(res => {
                        setDataRender(res.data);
                    })
            })
            .catch(error => {
                console.log('something went wroing', error);
            })


    }

    const handleDelete = (id, index) => {
        bookService.deleteBook(id)
            .then(response => {
                const newDataRender = [...dataRender];
                newDataRender.splice(index, 1);
                setDataRender(newDataRender);
                // setDataBook();

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className={`${props.openSider ? "ml-72" : "ml-20 "} content flex-1 p-7  "`}>
            <div className='headContent flex flex-row justify-between mb-7'>
                <AddBook
                    saveBook={saveBook}
                />
                <SearchComponent
                    // keyWord={keyWord}
                    // setKeyWord={setKeyWord}
                    handleChangeFilter={handleChangeFilter} />
            </div>

            <table className=''>
                <thead>
                    <tr>
                        {/* <th>Stt</th> */}
                        <th>Mã sách </th>
                        <th>Tên sách</th>
                        <th>Tác giả</th>
                        <th>Số trang</th>
                        <th>Năm xuất bản</th>
                        <th>Số lượng</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRender.length > 0 && dataRender.map((item, index) => {
                        return (
                            < tr key={item.idBook}>
                                {/* <td>{index}</td> */}
                                <td>{item.idBook}</td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.numberOfPages}</td>
                                <td>{item.released}</td>
                                <td>{item.amount}</td>
                                <td>{moment(item.updatedAt).format("DD/MM/YYYY, hh:mm:ss")}</td>
                                <td>
                                    <EditBook
                                        book={item}
                                        updateBook={updateBook} />

                                    <button
                                        className={`text-white active:bg-red-600 
                                        text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                                        focus:outline-none  ease-linear transition-all duration-150
                                        inline-flex items-center bg-red-500  hover:bg-red-600 
                                        border-b-4 border-red-700 hover:border-red-500  min-w-fit
                                        lg:min-w-2`}
                                        onClick={() => {
                                            if (window.confirm('Delete the item?'))
                                                handleDelete(item.idBook, index);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        )
                    })}

                    {dataRender.length === 0 &&
                        // history.goBack &&
                        <tr>
                            <td colSpan={'8'} className='text-center'>Not Result...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >
    );
}

export default BookList;