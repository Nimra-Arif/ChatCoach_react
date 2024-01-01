import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Donut = ({ dataSet, labels, color, title, subTitle, radius }) => {
  const data = {
    datasets: [
      {
        data: dataSet,
        backgroundColor: color,
        borderColor: color
      }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: labels
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    hoverOffSet: 5,
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
            size: "12px",
            color: "black"
          }
        }
      },
      datalabels: {
        color: "#ffffff",
        font: {
          weight: "bold",
          size: "12px"
        },
        formatter: (value) => {
          return value + "%";
        },
        anchor: "center",
        align: "center",
        offset: 0
      }
    },
    cutout: radius
  };
  return (
    <div className="flex flex-col items-center justify-start w-full gap-2 bg-white p-2 rounded-xl">
      <p className="font-mont text-xl font-bold">{title}</p>
      <p className="font-mont text-base text-center">{subTitle}</p>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default Donut;
