import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import BarChart from "./components/BarChart";
// import PieChart from "./components/PieChart";
import Co2Graph from "./components/Co2Graph";

function App() {
  return (
    <div className="main App flex flex-col h-screen justify-between px-8">
      <Navbar />
      <LandingPage />
      {/* <BarChart chartData={userData} /> */}
      <Co2Graph />
      {/* <PieChart chartData={userData} /> */}
      <Footer />
    </div>
  );
}

export default App;
