import React from 'react'
import logo from "../meet-up.png"
import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
 function Login () {

  const logindata = {
    username: "qa-meet",
    password: "test123"
  }
  const [username,setUsername] = useState("")
  const [password, setPassword] =useState("")
  const navigate =useNavigate()
  
  const handleSubmit=(e) => {
    e.preventDefault();
    if(username === logindata.username && password === logindata.password) {
      // console.log("login done")
      navigate('/homepage')
    }
  } 
  return (  
    <section className="h-screen">
    <div className="px-6 h-full text-gray-800">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src={logo} className="w-full" alt="Sharents Logo" />
        </div>
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                cy-data="username"
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                
                placeholder="Username"
                value={username}
                onChange={e=>setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
               cy-data="password"
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label className="form-check-label inline-block text-gray-800">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-gray-800">
                Forgot password?
              </a>
            </div>
            <div className="text-center lg:text-left">
              <button
                cy-data="submit-btn"
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Login;
