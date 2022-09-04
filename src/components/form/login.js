import React from 'react';
import { useState } from 'react';

const Login = () => {
  const sendLoginRequest = () => {
    console.log("reqquesst login");
  }

  const [dataLog, setDataLog] = useState({});
  const handleEventOnChange = (event) => {
    setDataLog({[event.target.id]: event.target.value})
    console.log("newData",dataLog);
  }
  return (
    <>

      <div className='bg-slate-400 border-spacing-1 m-5 p-5'>
        <form>
          <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
            <label htmlFor="username" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Địa chỉ:</label>
            <input
              type="text"
              id="username"
              // value={reader.username}
              onChange={(event) => handleEventOnChange(event)}
              className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
            />
          </div>
          <div className="mb-6 flex flex-row sm:flex-wrap md:flex-wrap">
            <label htmlFor="password" className="min-w-10 text-left  ml-0 pr-2 py-1 justify-self-start">Địa chỉ:</label>
            <input
              type="password"
              id="password"
              // value={reader.password}
              onChange={(event) => handleEventOnChange(event)}
              className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
            />
          </div>
          <div>
            <button
              className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={() => sendLoginRequest()}
            >
              Save Changes
            </button>

          </div>
        </form>

      </div>
    </>
  )
}

export default Login;