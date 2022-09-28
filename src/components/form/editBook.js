import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bookService from '../service/bookService';
// import createHistory from 'history/createBrowserHistory'

const EditBook = (props) => {
  // let history = useHistory();
  const updateBook = props.updateBook;
  const [showModal, setShowModal] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  // const [book, setBook] = useState({
  //   idBook: '',
  //   name: '',
  //   author: '',
  //   numberOfPages: null,
  //   released: null,
  //   amount: null
  // });

  const [book, setBook] = useState(props.book);
  const handleEventOnChange = (event) => {
    const newData = { ...book };
    newData[event.target.id] = event.target.value;
    setBook(newData);

  }

  const handleSubmit = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
    setTimeout(() => {
      setShowAlert(false);
    }, 1600);

    updateBook(book);
  }


  return (
    <>
      <button
        className={` text-white active:bg-blue-600 
                    text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none  ease-linear transition-all duration-150
                    inline-flex items-center bg-blue-500  hover:bg-blue-600 
                    border-b-4 border-blue-700 hover:border-blue-500  min-w-fit
                    lg:w-16
        `}
        type="button"
        onClick={() =>
        (
          setShowModal(true),
          bookService.getBookById(props.id)
            .then(response => {
              console.log('Printing book data', response.data);
              setBook(response.data);
            })
            .catch(error => {
              console.log('Something went wrong', error);
            }))
          // console.log("get book by id",bookService.getBookById(props.id)))
        }

      >

        <div className='m-0 pl-1'>Edit</div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto  mx-auto max-w-3xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-4 px-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold uppercase text-green-700 text-center pb-3">
                    Sửa thông tin sách
                  </h3>
                  <button
                    className="p-1 px-2 bg-slate-100 ml-auto text-center border-0 text-gray-500  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <form className=' p-5' onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="idBook" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Id book:</label>
                        <input
                          type="text"
                          id="idBook"
                          value={book.idBook}
                          //   onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="name" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tên sách:</label>
                        <input
                          type="text"
                          id="name"
                          value={book.name}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="author" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tác giả:</label>
                        <input
                          type="text"
                          id="author"
                          value={book.author}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">

                        <label htmlFor="numberOfPages" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số trang:</label>
                        <input
                          type="text"
                          id="numberOfPages"
                          value={book.numberOfPages}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="released" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Năm xuất bản:</label>
                        <input
                          type="text"
                          id="released"
                          value={book.released}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-4 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="amount" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số lượng:</label>
                        <input
                          type="text"
                          id="amount"
                          value={book.amount}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>

                    </div>

                  </form>
                </div>
                {/*footer*/}
                <div className="relative flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => handleSubmit()}

                  >
                    Save Changes
                  </button>
                  {showAlert ? (
                    <div
                      class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 fixed top-0 bottom-2/3 left-1/3 right-1/3 "
                      role="alert"
                    >
                      <h4 class="text-2xl font-medium leading-tight mb-2">Success!</h4>
                      <p class="mb-4">

                      </p>
                      <hr class="border-green-600 opacity-30" />
                      <p class="mt-4 mb-0">
                        Sửa sách thành công
                      </p>
                      <button
                        to="/book"
                        class="font-bold btn border-spacing-2 bg-green-700
                        text-white active:bg-green-800 
                        text-sm py-2 px-4 m-1 rounded shadow hover:shadow-lg outline-none 
                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                        inline-flex items-center  hover:bg-green-800 
                        border-b-4 border-green-800 hover:border-green-800  min-w-fit
                        absolute bottom-4 right-10"
                        onClick={() => (setShowAlert(false),
                          setShowModal(false))}
                      >
                        OK
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default EditBook;
