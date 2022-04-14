//imports
import React, { useState } from "react";
import { UserData } from "../Data";
import LineChart from "./LineChart";

//Co2 Graph Element
export default function Co2Graph() {
  //graph datasets
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "CO2 (parts per million)",
        data: UserData.map((data) => data.average),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "Yellow",
        borderWidth: 3,
      },
    ],
  });
  //return component
  return (
    <>
      <div className="l-cont-c ">
        <div className="l-cont-g">
          <LineChart chartData={userData} />
        </div>
        <div className='l-cont-p'>
        Air pollution is an issue that has been plaguing the world for a long
          time now and its detrimental effects urge us to find ways to predict
          and prevent further damage. According to WHO, ambient air pollution
          accounts for an estimated 4.2 million deaths per year due to stroke,
          heart disease, lung cancer, and chronic respiratory diseases. Such
          statistical data can prove to be of great significance in the process
        </div>
      </div>
    </>
  );
}

