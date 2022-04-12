import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="main App flex flex-col h-screen justify-between md:px-52 px-4">
      <Navbar />
      <LandingPage />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
