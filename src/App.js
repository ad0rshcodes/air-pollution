import React, { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
// import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "White",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="main App flex flex-col h-screen justify-between md:px-52 px-4">
      <Navbar />
      <LandingPage />
      {/* <BarChart chartData={userData} /> */}
      <LineChart chartData={userData} />
      {/* <PieChart chartData={userData} /> */}
      <Footer />
    </div>
  );
}

export default App;
