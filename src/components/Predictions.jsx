//imports
import React from "react";

//Predictions for year 2007 to 2030.
export default function Predictions() {
  return (
    <div>
      <div className="leadMagnet content-center my-14 sm:px-2">
        <div className="leadMagnet-text mb-4">
          Wanna know how many people will be effected by Air Pollution?
        </div>
        <div className="text-lg">
          Based on the dataset given in the problem statement, we can deduce
          that the no of people affected by air pollution is growing linearly
          with year.
        </div>
        <div className="initialTable flex justify-center my-5">
          <table class="table-fixed text-lg">
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
      </div>
    </div>
  );
}
