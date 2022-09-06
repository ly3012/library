import React from "react";
import {useState} from "react";

const SearchComponent = (props) => {

    const [keyWord, setKeyWord] = useState('');
    
    const handleEventOnChange =(event)=>{
        setKeyWord(event.target.value)
    }


    return (
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-700 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={keyWord}
                    onChange={(event) => handleEventOnChange(event)}

                />
                <button className="px-4 text-white bg-yellow-700 border-l rounded hover:bg-yellow-800"
                    onClick={()=>(props.handleChangeFilter(keyWord),
                    setKeyWord(""))}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
export default SearchComponent;