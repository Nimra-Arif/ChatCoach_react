import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ title, subTitle, labels, userData, botData }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User End",
        data: userData,
        fill: true,
        backgroundColor: "#024176",
        borderColor: "#024176",
        borderRadius: {
          topLeft: 5,
          topRight: 5
        }
      },
      {
        label: "Bot End",
        data: botData,
        fill: true,
        backgroundColor: "#FFE500",
        borderColor: "#FFE500",
        borderRadius: {
          topLeft: 5,
          topRight: 5
        }
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    hoverOffSet: 5,
    scales: {
      y: {
        min: 0,
        max: 40,
        ticks: {
          stepSize: 5
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 12,
          boxHeight: 3,
          padding: 10,
          font: {
            weight: "normal",
            size: "12px"
          }
        }
      },
      datalabels: {
        display: false
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-2 bg-white p-2 rounded-xl">
      <p className="font-mont text-sm font-bold">{title}</p>
      <p className="font-mont text-[10px] text-center">{subTitle}</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
