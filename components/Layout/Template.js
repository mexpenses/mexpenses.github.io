import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Template = ({ viewModeApp = false, activeLinkNavbar, children }) => {
  return (
    <>
      {!viewModeApp && <Header/>}
      {children}
      {!viewModeApp && <Footer/>}
    </>
  );
};

export default Template;