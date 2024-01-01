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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart1 = ({ title, subTitle, labels, dataSet }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User End",
        data: dataSet,
        backgroundColor: "#B60909",
        borderColor: "#B60909",
        borderRadius: {
          topLeft: 5,
          topRight: 5
        },
        tension: 0.2
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
        max: 10,
        ticks: {
          stepSize: 1
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
        display: false
      },
      datalabels: {
        display: false
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-2 bg-white p-2 rounded-xl">
      <p className="font-mont text-xl font-bold">{title}</p>
      <p className="font-mont text-base text-center">{subTitle}</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart1;
