import React from "react";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import CryptoCalculator from "./components/CryptoCalculator";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Signup />
            </>
          }
        />
        <Route path="/crypto-calculator" element={<CryptoCalculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
