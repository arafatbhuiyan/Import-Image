import { useState } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/product" element={<Product />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
