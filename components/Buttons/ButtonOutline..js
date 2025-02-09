import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white outline-none rounded-l-full rounded-r-full hover:bg-blue-500 hover:text-white transition-all hover:shadow-lg ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
