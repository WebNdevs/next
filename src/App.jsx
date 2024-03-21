import React from "react";
import './App.css'
import Navbar from "./component/Navbar";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css";
import Home from "./pages/Home";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      {/* <Home /> */}

      <Footer />
    </>
  )
}

export default App;