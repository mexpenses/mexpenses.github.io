import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Template = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Template;