import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import bookService from '../service/bookService';
import callCardService from '../service/callCardService';
// import createHistory from 'history/createBrowserHistory'

const SetStatus = (props) => {
    let history = useHistory();

    const handleSubmit = ()=>{
        // event.preventDefault();
        callCardService.setStatus(props.id).then(function (response) {
            console.log(JSON.stringify(response.data));
            // props.setStatus(true);
            history.go(0);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <button
                // {props.status} ? disable : null 
                // disabled = {props.status?true:false}
                className={` ${props.status?
                    `text-white  text-sm py-1 px-3 m-1 rounded shadow  
                    inline-flex items-center bg-gray-400 cursor-text
                     `
                    :`
                 text-white active:bg-blue-600 
                    text-sm py-1 px-3 m-1 rounded shadow hover:shadow-lg outline-none 
                    focus:outline-none  ease-linear transition-all duration-150
                    inline-flex items-center bg-blue-500  hover:bg-blue-600 
                    border-b-4 border-blue-700 hover:border-blue-500  min-w-fit
                    lg:w-16"
        `}`}
                type="button"
                onClick={() => {handleSubmit()}
                }

            >
                <div className='m-0 pl-1'>Status</div>
            </button>
        </>
    );
}

export default SetStatus;
