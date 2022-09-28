import React from 'react';
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import Select from "react-select";
import callCardService from '../service/callCardService';
import bookService from '../service/bookService';

import { useHistory } from 'react-router-dom';

// import callCardService from '../service/callCardService';

const AddCallCard = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);


    const [input, setInput] = useState({
        idReader: '',
        idAdmin: '',
        books: ""
    });
    const [books, setBooks] = useState([]);
    const getBooks = () => {
        bookService.getBook()
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        getBooks();
    }, []);
    const handleEventOnChange = (event) => {
        const newData = { ...input };
        newData[event.target.id] = event.target.value;
        setInput(newData);
    }


    const history = useHistory();
    const saveCallCard = (event) => {
        event.preventDefault();
        const callCard = {
            idReader: input.idReader,
            idUser: input.idAdmin,
            idbooks: selectedOptions.map(item => item.id)
        };
        callCardService.createCallCard(callCard)
            .then(response => {
                setShowAlert(true);
                history.go(0)
                // history.replace({pathname: "/callCard"})

            })
            .catch(error => {
                console.log('something went wrong', error);
            })


    }

    const styles = {
        multiValue: styles => {
            return {
                ...styles,
                backgroundColor: "rgba(0, 128, 43, 0.5)"
            };
        }
    };

    const options = books.map((item, index) => ({

        value: item.name,
        id: item.idBook,
        label: item.idBook + ". " + item.name
    }
    ))
    const handleSelectOptions = (event) => {

        setSelectedOptions(event);
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
                <FaUser />
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
                                        Tạo phiếu mượn
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
                                    <form className=' p-5'
                                    // onSubmit={(event) => saveCallCard(event)}
                                    >
                                        <div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="idReader" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Mã người mượn:</label>
                                                <input
                                                    type="text"
                                                    id="idReader"
                                                    value={input.idReader}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>
                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="idAdmin" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Mã Nhân viên:</label>
                                                <input
                                                    type="text"
                                                    id="idAdmin"
                                                    value={input.idAdmin}
                                                    onChange={(event) => handleEventOnChange(event)}
                                                    className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                                                />
                                            </div>

                                            <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
                                                <label htmlFor="idBook" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Mã sách:</label>
                                                <Select
                                                    styles={styles}
                                                    className="basic-multi-select border border-gray-300 md:min-w-20  bg-gray-50 max-w-sm cursor-pointer" required=""
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    options={
                                                        options
                                                    }
                                                    // defaultValue={options[0]}
                                                    onChange={event => handleSelectOptions(event)}
                                                />

                                            </div>
                                        </div>

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
                                        onClick={(event) => saveCallCard(event)}
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
                                                Thêm phiếu mượn thành công
                                            </p>
                                            <button
                                                to="/callCard"
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

export default AddCallCard;
