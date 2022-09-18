import React from "react";
import {useState} from "react";

const SearchComponent = (props) => {

    const [keyWord, setKeyWord] = useState('');
    
    const handleEventOnChange =(event)=>{
        setKeyWord(event.target.value)
    }


    return (
        <div className="flex items-center">
            <form
             className="flex  rounded"
             onSubmit = {(event)=>props.handleChangeFilter(keyWord, event)
                            // ()=>setKeyWord("")
            }
             >
                
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-yellow-700 bg-white border border-yellow-600 rounded-md focus:border-yellow-700 focus:ring-yellow-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    value={keyWord}
                    onChange={(event) => handleEventOnChange(event)}
                    onClick= {()=>setKeyWord("")}

                />
                <button className="px-4 text-white bg-yellow-700 border-l rounded hover:bg-yellow-800"
                //  onClick= {()=>setKeyWord("")}
                    // onClick={()=>(props.handleChangeFilter(keyWord)                    )}
                >
                    Search
                </button>
            </form>
        </div>
    );
}
export default SearchComponent;