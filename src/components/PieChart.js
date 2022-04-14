//imports
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

//PieChart element function 
function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

export default PieChart;
