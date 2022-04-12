import React, { Component } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main App flex flex-col h-screen justify-between md:px-52 px-4">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Air Pollution</h1>
      <Footer />
    </div>
  );
}

export default App;
