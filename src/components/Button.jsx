import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gray-300 text-gray-700 font-bold border rounded-lg md:shadow-lg font-poppins py-2 px-6 rounded md:ml-1 mr-5 hover:bg-indigo-400 hover:text-white">
      {props.children}
    </button>
  );
};

export default Button;
