import React from 'react'
import { useNavigate } from 'react-router-dom';
import IconButton from '../components/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebookLogo from "../assets/Icons/facebookLogo.png";
const Login = () => {
  const navigate = useNavigate();
  const handleClickGoogle = () =>{
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <div className="flex w-full justify-center">
      

      <div className="flex justify-center items-center h-screen bg-indigo-600 w-full">
        <div className="w-auto sm:w-96 p-6 shadow-lg bg-white rounded-md ">
          <h1 className="text-3xl text-center block font-semibold">Login</h1>
          {/* <FontAwesomeIcon icon={"fa-solid fa-user"} /> */}
          <form>
            <div className="mt-3">
              {/* text-base is 16px*/}
              <label for="username" className="mb-2 block text-base">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 
              focus:border-gray-600"
                placeholder="Enter Username..."
              />
            </div>

            <div className="mt-3">
              <label for="username" className="mb-2 block text-base">
                Password
              </label>
              <input
                type="password"
                id="username"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 
              focus:border-gray-600"
                placeholder="Enter Password..."
              />
            </div>
            <div className="flex justify-between mt-3">
              <div>
                <input type="checkbox" className="mr-2" />
                <label className="text-base ">Remember me</label>
              </div>
              <div>
                <a href="#" className="text-blue-500 text-base items-center">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className="mt-5">
              {/* <button className='bg-indigo-700  hover:ring-indigo-700 hover:ring-1  hover:text-indigo-700 w-full p-1 text-white
              rounded-md hover:bg-transparent font-semibold active:ring'>Submit</button> */}
              <button className="w-full text-center font-semibold ring-1 ring-indigo-700 rounded-md p-1 hover:ring-2 active:ring">
                Login
              </button>
            </div>

            <div className="mt-10">
              <p className="text-center text-base">Or Login using</p>
              
            </div>

            <div className="mt-2">
              <IconButton />
            </div>
            <div className="mt-2">
              <IconButton text="Login with facebook" icon={facebookLogo} />
            </div>
            <div className="mt-10">
              <p className="text-center text-base">Or Sign up using</p>
              <p className="text-center">
                <a href="#" className="text-blue-500 text-base">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login