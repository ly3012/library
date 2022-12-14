import { useEffect, useState } from 'react';
import readerService from '../service/readerService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddReader from '../form/addReader';
import EditReader from '../form/editReader';
import moment from 'moment';

const Reader = (props) => {
    document.title = "Management Reader";

    const [dataRender, setDataRender] = useState([]);

    const handleChangeFilter = (newFilter, event) => {
        event.preventDefault();
        readerService.findByCriteria(newFilter)
            .then(response => {
                let data = (response && response.data) ? response.data : [];
                setDataRender(data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const getDataReader = () => {
        readerService.getReader()
            .then(response => {
                setDataRender(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        getDataReader();
    }, []);

    const handleDelete = (id) => {
        readerService.deleteReader(id)
            .then(response => {
                getDataReader();

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const saveReader = (data) => {
        readerService.createReader(data)
            .then(response => {
                readerService.getReader()
                    .then(res => {
                        setDataRender(res.data);
                    })
            })
            .catch(error => {
                console.log('something went wroing', error);
            })


    }

    const editReader = (reader) => {
        console.log("reader", reader);
        readerService.updateReader(reader)
            .then(response => {
                readerService.getReader()
                    .then(res => {
                        setDataRender(res.data);
                    })
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
    }


    return (
        <div className={`${props.openSider ? "ml-72" : "ml-20 "} content flex-1 p-7  "`}>
            <div className='headContent flex flex-row justify-between mb-7'>
                <AddReader
                    saveReader={saveReader}
                />
                <SearchComponent handleChangeFilter={handleChangeFilter} />

            </div>

            <table className='mt-3'>
                <thead>
                    <tr>
                        <th>M??</th>
                        <th>T??n</th>
                        <th>?????a ch???</th>
                        <th>S??? ??i???n tho???i</th>
                        <th>Email</th>
                        {/* <th>Status</th> */}
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRender.map((item) => {
                        return (
                            < tr key={item.idReader}>

                                <td>{item.idReader}</td>
                                <td>{item.fullName}</td>
                                <td>{item.address}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.status}</td> */}
                                {/* <td>{item.updatedAt}</td> */}
                                <td>{moment(item.updatedAt).format("DD/MM/YYYY, hh:mm:ss")}</td>

                                <td>
                                    <EditReader
                                        id={item.idReader}
                                        editReader={editReader}
                                    />

                                    <button
                                        className={`text-white active:bg-red-600 
                                        text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                                        focus:outline-none  ease-linear transition-all duration-150
                                        inline-flex items-center bg-red-500  hover:bg-red-600 
                                        border-b-4 border-red-700 hover:border-red-500  min-w-fit`}
                                        onClick={() => {
                                            if (window.confirm('Delete the item?'))
                                                handleDelete(item.idReader);
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

export default Reader;