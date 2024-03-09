import React from "react";
import googleIcon from "../assets/Icons/googleIcon.png";


const IconButton = (props) => {
  const { text, color1, color2, color3, icon } = props;
  
  //color 1 : bg-green-400, bg-green-500, bg-green-700
  return (
    <button
      className={`${color1} rounded-md ring-1
   hover:${color2} active:${color3} active:ring hover:ring-2 w-full ring-indigo-700`}
    >
      <div className="flex items-center justify-center">
        <img src={icon ? icon: googleIcon  } className="w-8 h-8" alt="google icon" />
        <p className="pl-2 text-base font-semibold">
          {text ?? "Login with Google"}
        </p>
      </div>
    </button>
  );
};

export default IconButton;
