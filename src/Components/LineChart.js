import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { AiOutlineArrowRight } from "react-icons/ai";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ title, subTitle, labels, userData, botData }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User End",
        data: userData,
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
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      y: {
        min: 0,
        // max: 40,
        ticks: {
          stepSize: 10
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
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
        display: true,
        align: "top",
        anchor: "end",
        color: "#000"
      },
      title: {
        display: true,
        text: "Time", // Add the title for the x-axis representing time
        font: {
          size: 10,
          weight: "normal"
        },
        color: "#000", // Set the color for the title
        position: "top"
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start max-w-full gap-2 bg-white p-2 rounded-xl">
      <p className="font-mont text-xl font-bold">{title}</p>
      <p className="font-mont text-base text-center">{subTitle}</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
