import React from 'react';
import { FaBook } from 'react-icons/fa'
import { useState } from 'react';
import {axios} from 'axios';
const LoginForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const url = "http://localhost:8080/book/add";
    const [data, setData] = useState({
        nameBook: '',
        author: '',
        pageNumber: null,
        release: null,
        amount: null
    });

    const handleEventOnChange =(event)=>{
        const newData = {...data};
        newData[event.target.id] = event.target.value;
        setData(newData);
        console.log(newData);
    }

    // const handleEventOnSubmit =(event)=>{
    //     event.preventDefault();

    // }
    const handleEventOnSubmit = async() => {
      const FormData = new FormData();
      FormData.append("nameBook", data.nameBook)
      FormData.append("author", data.author)
      FormData.append("pageNumber", data.pageNumber)
      FormData.append("release", data.release)
      FormData.append("amount", data.amount)
      try {
        await axios({
          method: "post",
          url: url,
          data: FormData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(function (response) {
          //handle success
          console.log(response);
        });;
      } catch(error) {
        console.log(error)
      }
    }
    
  return (
    <>
      <button
        className={` text-white active:bg-blue-600 font-bold  
                    text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                    inline-flex items-center bg-blue-500  hover:bg-blue-600 
                    border-b-4 border-blue-700 hover:border-blue-500  min-w-fit
        `}
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaBook />
        <div className='m-0 pl-1'>Add</div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-medium uppercase text-green-700 text-center pb-5">
                    Thêm một cuốn sách
                  </h3>
                  <button
                    className="p-1 px-2 bg-slate-100 ml-auto text-center border-0 text-gray-500  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                    {/* <span className=" text-black text-center h-6 w-6 text-2xl block ">
                      x
                    </span> */}
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className=' p-5' onSubmit={(event) => handleEventOnSubmit(event)}>
                    <div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="nameBook" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tên sách:</label>
                        <input type="text" id="nameBook" onChange={(event) => handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="author" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Tác giả:</label>
                        <input type="text" id="author" onChange={(event) => handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="pageNumber" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số trang:</label>
                        <input type="number" id="pageNumber" onChange={(event) => handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="release" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Năm xuất bản:</label>
                        <input type="text" id="release" onChange={(event) => handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="amount" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Số lượng:</label>
                        <input type="number" id="amount" onChange={(event) => handleEventOnChange(event)} className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required="" />
                      </div>

                    </div>

                    {/* <input type="submit" className="p-2 m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" /> */}
                    {/* <input type="reset" className="p-2 m-2 text-white bg-orange-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" /> */}
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
                    onClick={() => handleEventOnSubmit()}
                  >
                    Save Changes
                  </button>
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

export default LoginForm;
