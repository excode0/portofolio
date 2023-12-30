import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <About />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;