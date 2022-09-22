import { useEffect, useState } from 'react';
import callCardService from '../service/callCardService';
import React from 'react';
import SearchComponent from '../layouts/searchComponent';
import AddCallCard from '../form/addCallCard';
import moment from 'moment';
import SetStatus from '../form/editCallCard';

const CallCard = (props) => {

    const [dataRender, setDataRender] = useState([]);
    //  const [state, setstate] = useState(false);


    const handleChangeFilter = (newFilter, event) => {
        event.preventDefault();
        callCardService.findByCriteria(newFilter)
            .then(response => {
                let data = (response && response.data) ? response.data : [];
                setDataRender(data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const init = () => {
        callCardService.getCallCard()
            .then(response => {
                setDataRender(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    useEffect(() => {
        init();
    }, []);

    console.log("dataRender", dataRender);
    const handleDelete = (id) => {
        callCardService.deleteCallCard(id)
            .then(response => {
                init();

            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className={`${props.openSider ? "ml-72" : "ml-20 "} h-screen flex-1 p-7  `}>
            <div className='headContent flex flex-row justify-between'>
                <AddCallCard />
                <SearchComponent handleChangeFilter={handleChangeFilter} />

            </div>

            <table className='mt-3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Admin</th>
                        <th>Reader</th>
                        <th>Books</th>
                        <th>Status</th>
                        <th>Update At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRender.map((item) => {
                        return (
                            < tr key={item.idCallSlip}>

                                <td>{item.idCallSlip}</td>
                                <td>{item.user.id + ". "}{item.user.name}</td>

                                <td>{item.reader.idReader + ". "} {item.reader.fullName}</td>
                                {/*                                 
                                <td>{item.books.map=(book)=>{
                                    return (
                                        <span>
                                            {book.name}
                                            <br/>
                                            </span>
                                    )

                                }}
                                </td> */}
                                <td>{item.books.reduce((prev, item, index) => {
                                    return(` ${prev} ${(index + 1)}. ${item.name}
                                    \r\n`)}, "")
                                    // return (
                                        // <li> { prev + (index + 1) + ". " + item.name}</li>)
                                        // <span>
                                        //     { prev + (index + 1) + ". " + item.name}
                                        //     <br/>
                                        // </span>)
                                // }, "")
                                }
                                </td>


                                <td>{item.status ? "Đã trả" : "Chưa trả"}</td>

                                {/* <td>{item.books}</td> */}
                                <td>{moment(item.created).format("DD/MM/YYYY, hh:mm:ss")}</td>

                                <td>
                                    <SetStatus
                                        id={item.idCallSlip}
                                        status={item.status} />
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

                            // <div>Not Data</div>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
}

export default CallCard;
