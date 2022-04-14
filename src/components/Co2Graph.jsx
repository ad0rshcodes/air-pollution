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
      <div className="l-cont-c mt-14">
        <div className="l-cont-g">
          <LineChart chartData={userData} />
        </div>
        <div className="l-cont-p text-lg">
          Carbon dioxide pollution, better known as CO2 emissions, primarily
          comes from the
          <span className="red font-semibold"> burning of fossil fuels. </span>
          Two great examples of this are the consumption of gasoline in
          gas-powered vehicles and the production of electricity by power
          plants. Researchers estimate that nearly
          <span className="red font-semibold"> 30%</span> of greenhouse gas
          emissions come from transportation, while another
          <span className="red font-semibold"> 25%</span> comes from the
          production of electricity,
          <span className="red font-semibold"> 23% </span> from industrial
          production, <span className="red font-semibold"> 13% </span>from
          commercial and residential sources and
          <span className="red font-semibold"> 10% </span> from agriculture.
          Carbon dioxide accounts for approximately
          <span className="red font-semibold"> three-quarters </span>of global
          greenhouse gas emissions.
        </div>
      </div>
    </>
  );
}
