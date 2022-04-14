//imports
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

//BarChart element
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

//export barchart element
export default BarChart;
