import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleClickGoogle = () =>{
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Login page</h1>
      <button className='bg-blue-500 rounded-lg p-2 font-sans font-medium text-white 
      hover:bg-blue-600 active:bg-blue-800' onClick={handleClickGoogle}>Login with google</button>
    </div>
  );
}

export default Login