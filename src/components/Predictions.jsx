//imports
import React, { useState } from "react";
import BarChart from "./BarChart";

//Predictions for year 2007 to 2030.
export default function Predictions() {
  let years = [];
  let predictions = [];

  for (let i = 2007; i <= 2030; i++) {
    years.push(i);
    let pred = (2 / 3) * (i - 2016) + 16.4;
    predictions.push(pred);
  }
  console.log(years);
  console.log(predictions);
  //graph datasets
  const [userData, setUserData] = useState({
    labels: years,
    datasets: [
      {
        label: "% of people effected (Globally)",
        data: predictions,
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
  return (
    <div>
      <div className="leadMagnet my-14 sm:px-2">
        <div className="leadMagnet-text mb-4">
          Wanna know how many people will be effected by Air Pollution?
        </div>
        <div className="text-lg">
          Based on the dataset given in the problem statement, we can deduce
          that the no of people affected by air pollution is growing linearly
          with year.
        </div>
        <div className="initialTable flex justify-center my-5">
          <table className="table-fixed text-lg">
            <thead>
              <tr className="yellow">
                <th className="px-5">Years</th>
                <th className="px-5">% of people effected (Globally)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>2010</td>
                <td>12.4</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>15</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>16.4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-4/5 mx-auto graphs">
          <BarChart chartData={userData} />
        </div>
        <div className="initialTable flex justify-center my-5">
          {/* 1st Table Starts */}
          <table className="table-fixed text-lg">
            <thead>
              <tr className="yellow">
                <th className="px-5">Years</th>
                <th className="px-5">% of people effected (Globally)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{years[0]}</td>
                <td>10.4</td>
              </tr>
              <tr>
                <td>{years[1]}</td>
                <td>11.06</td>
              </tr>
              <tr>
                <td>{years[2]}</td>
                <td>11.73</td>
              </tr>
              <tr>
                <td>{years[3]}</td>
                <td>12.4</td>
              </tr>
              <tr>
                <td>{years[4]}</td>
                <td>13.06</td>
              </tr>
              <tr>
                <td>{years[5]}</td>
                <td>13.73</td>
              </tr>
              <tr>
                <td>{years[6]}</td>
                <td>14.4</td>
              </tr>
              <tr>
                <td>{years[7]}</td>
                <td>15.06</td>
              </tr>
              <tr>
                <td>{years[8]}</td>
                <td>15.73</td>
              </tr>
              <tr>
                <td>{years[9]}</td>
                <td>16.4</td>
              </tr>
              <tr>
                <td>{years[10]}</td>
                <td>17.06</td>
              </tr>
              <tr>
                <td>{years[11]}</td>
                <td>17.73</td>
              </tr>
            </tbody>
          </table>
          {/* 1st table ends */}

          {/* 2nd tabel starts*/}
          <table className="table-fixed text-lg">
            <thead>
              <tr className="yellow">
                <th className="px-5">Years</th>
                <th className="px-5">% of people effected (Globally)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{years[12]}</td>
                <td>18.4</td>
              </tr>
              <tr>
                <td>{years[13]}</td>
                <td>19.06</td>
              </tr>
              <tr>
                <td>{years[14]}</td>
                <td>19.73</td>
              </tr>
              <tr>
                <td>{years[15]}</td>
                <td>20.4</td>
              </tr>
              <tr>
                <td>{years[16]}</td>
                <td>21.06</td>
              </tr>
              <tr>
                <td>{years[17]}</td>
                <td>21.73</td>
              </tr>
              <tr>
                <td>{years[18]}</td>
                <td>22.4</td>
              </tr>
              <tr>
                <td>{years[19]}</td>
                <td>23.06</td>
              </tr>
              <tr>
                <td>{years[20]}</td>
                <td>23.73</td>
              </tr>
              <tr>
                <td>{years[21]}</td>
                <td>24.4</td>
              </tr>
              <tr>
                <td>{years[22]}</td>
                <td>25.06</td>
              </tr>
              <tr>
                <td>{years[23]}</td>
                <td>25.73</td>
              </tr>
            </tbody>
          </table>
          {/* 2nd Table ends */}
        </div>
      </div>
    </div>
  );
}
