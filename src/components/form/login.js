import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  document.title = "Login";

  let history = useHistory();

  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });


  const handleEventOnChange = (event) => {
    const newData = { ...dataLogin };
    newData[event.target.id] = event.target.value;
    setDataLogin(newData)
  }

  const sendLoginRequest = (event) => {
    event.preventDefault();
    var axios = require('axios');
    var data = JSON.stringify({
      "username": dataLogin.username,
      "password": dataLogin.password
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_name", response.data.user.name);
          localStorage.setItem("user_userName", response.data.user.username);
          props.setIsLogin(true);

          history.replace({ pathname: '/dashboard' })
          return response.data.JSON;
        }
        throw Error("Sai tên đăng nhập hoặc mật khẩu")
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });

  }

  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={sendLoginRequest}>
                <div
                  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p className="text-center font-semibold mx-4 mb-0">Sign in</p>
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="peer ... form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="username"
                    value={dataLogin.username}
                    onChange={(event) => handleEventOnChange(event)}
                    // className="md:min-w-20 flex-1 py-1 bg-gray-50 border border-gray-300" required=""
                    placeholder="Username"
                  />
                  {/* <p className="invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                  </p> */}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    value={dataLogin.password}
                    onChange={(event) => handleEventOnChange(event)}
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input  h-4 w-4 border border-gray-400 rounded-sm bg-white checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                    >Remember me</label
                    >
                  </div>
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>

                  {/* <button
                    className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => sendLoginRequest()}
                  >
                    Save Changes
                  </button> */}

                  {/* <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >Register</a
                    >
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login;