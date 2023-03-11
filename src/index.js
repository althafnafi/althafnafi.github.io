import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import SectionLanding from "./components/section/SectionLanding";
import NavbarHome from "./components/navbar/NavbarHome";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <NavbarHome />
      <SectionLanding />
      <Footer data-aos="ease-in" />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
