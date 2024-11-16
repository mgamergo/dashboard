import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";   


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);

  const   
 getGradient = (chart) => {
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.chartArea.bottom);
    gradient.addColorStop(0, "rgba(75, 192, 192, 0.5)");
    gradient.addColorStop(1, "rgba(75, 192, 192, 0)");
    return gradient;
  };

  // Custom plugin to apply gradient after chart layout
  ChartJS.register({
    id: 'gradientFill',
    afterLayout: (chart) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const datasets = chart.data.datasets;

      datasets.forEach((dataset) => {
        if (dataset.backgroundColor) {
          ctx.fillStyle = getGradient(chart);
          ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
        }
      });
    }
  });

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Performance",
        data: [300, 250, 450, 400, 800, 600, 700],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: true,
        tension: 0.5,
        backgroundColor: (context) => {
          const chart = context.chart;
          if (!chart.chartArea) {
            return null; // Wait until chart is fully initialized
          }
          return getGradient(chart);
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart with Gradient Background",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return (
    <div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;