import React from 'react';
import { useState } from 'react';
import readerService from '../service/readerService';
import { useHistory } from 'react-router-dom';

const EditReader = (props) => {
  const editReader = props.editReader;
  let history = useHistory();
  const [showModal, setShowModal] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const url = "http://localhost:8080/admin/readers";

  const [reader, setReader] = useState({
    idReader: '',
    fullName: '',
    phoneNumber: '',
    address: null,
    email: null,
    amount: null
  });

  const handleEventOnChange = (event) => {
    const newData = { ...reader };
    newData[event.target.id] = event.target.value;
    setReader(newData);
  }

  const handleSubmit = () => {
    // console.log("reader", reader);
    setShowAlert(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
    setTimeout(() => {
      setShowAlert(false);
    }, 1600);

    editReader(reader);
  }



  return (
    <>
      <button
        className={` text-white active:bg-blue-600 
                    text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none  ease-linear transition-all duration-150
                    inline-flex items-center bg-blue-500  hover:bg-blue-600 
                    border-b-4 border-blue-700 hover:border-blue-500  min-w-fit
                    lg: w-16
        `}
        type="button"
        onClick={() =>
        (
          setShowModal(true),
          readerService.getReaderById(props.id)
            .then(response => {
              // console.log('Printing reader data', response.data);
              setReader(response.data);
            })
            .catch(error => {
              console.log('Something went wrong', error);
            }))
        }

      >

        <div className='m-0 pl-1'>Edit</div>
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
                    S???a th??ng b???n ?????c
                  </h3>
                  <button
                    className="p-1 px-2 bg-slate-100 ml-auto text-center border-0 text-gray-500  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className=' p-5' onSubmit={() => handleSubmit()}>
                    <div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="fullName" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Id b???n ?????c:</label>
                        <input
                          type="text"
                          id="idReader"
                          value={reader.idReader}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="fullName" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">T??n b???n ?????c:</label>
                        <input
                          type="text"
                          id="fullName"
                          value={reader.fullName}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="phoneNumber" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">S??? ??i???n tho???i:</label>
                        <input
                          type="text"
                          id="phoneNumber"
                          value={reader.phoneNumber}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                        <label htmlFor="email" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Email:</label>
                        <input
                          type="email"
                          id="email"
                          value={reader.email}
                          onChange={(event) => handleEventOnChange(event)}
                          className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                        />
                      </div>
                      <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">

                        <label htmlFor="address" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">?????a ch???:</label>
                        <input
                          type="text"
                          id="address"
                          value={reader.address}
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
                      className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 fixed top-0 bottom-2/3 left-1/3 right-1/3 "
                      role="alert"
                    >
                      <h4 className="text-2xl font-medium leading-tight mb-2">Well done!</h4>
                      <p className="mb-4">

                      </p>
                      <hr className="border-green-600 opacity-30" />
                      <p className="mt-4 mb-0">S???a th??nh c??ng
                      </p>
                      <button
                        to="/reader"
                        className="font-bold btn border-spacing-2 bg-green-700
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

export default EditReader;
