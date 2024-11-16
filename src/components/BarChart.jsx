import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"], // X-axis labels
    datasets: [
      {
        label: "Deposit",
        data: [200, 150, 300, 400, 200, 350, 300], // Deposit data
        backgroundColor: "rgba(0, 200, 200, 1)", // Cyan color for Deposit bars
        borderRadius: 5, // Rounded bar edges
      },
      {
        label: "Withdraw",
        data: [400, 300, 200, 450, 100, 400, 350], // Withdraw data
        backgroundColor: "rgba(0, 0, 255, 1)", // Blue color for Withdraw bars
        borderRadius: 5, // Rounded bar edges
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Adjust legend font size
          },
        },
      },
      title: {
        display: false, // Disable the chart title
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12, // Adjust X-axis label font size
          },
        },
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        ticks: {
          font: {
            size: 12, // Adjust Y-axis label font size
          },
          stepSize: 100, // Define Y-axis steps
        },
        grid: {
          borderDash: [5, 5], // Dashed grid lines for Y-axis
        },
      },
    },
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f7faff", borderRadius: "10px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
