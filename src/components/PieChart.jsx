import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    datasets: [
      {
        data: [30, 15, 20, 35], // Percentages for each segment
        backgroundColor: [
          "#2C2F4F", // Navy for Entertainment
          "#FFA500", // Orange for Bill Expense
          "#FF00FF", // Magenta for Investment
          "#0000FF", // Blue for Others
        ],
        borderWidth: 0, // Remove segment borders
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: "#FFFFFF", // Text color (white)
        font: {
          weight: "bold",
          size: 14, // Font size
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`; // Percentage and label
        },
      },
    },
    cutout: "30%", // Creates the donut/pie chart effect
  };

  return (
    <div className="w-[300px] mx-auto bg-[#F7FAFF] p-5 rounded-[10px] h-[350px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
