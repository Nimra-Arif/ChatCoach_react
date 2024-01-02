import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Donut from "./Donut";
import LineChart from "./LineChart";
import LineChart1 from "./LineChart1";

import { dataEmotionsDougnut } from "../Data/ChartData";
import { dataEngagementBarLine } from "../Data/ChartData";
import { dataEngagementLine } from "../Data/ChartData";

/**
 * ChatRight Component - Renders different charts based on the selected tab.
 * @returns {JSX.Element} JSX element representing the ChatRight component.
 */
const ChatRight = () => {
  const tab = useSelector((state) => state.chat.value);
  const userEmotion = useSelector((state) => state.msg.userEmotion);
  const systemEmotion = useSelector((state) => state.msg.systemEmotion);
  const overallEmotion = useSelector((state) => state.msg.overallEmotion);
  const userLineData = useSelector((state) => state.chart.userLineData);
  const botLineData = useSelector((state) => state.chart.botLineData);
  const flow = useSelector((state) => state.msg.flow);
  const time = useSelector((state) => state.msg.time);
  const flowLoading = useSelector((state) => state.msg.flowLoading);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!(tab === "Flow" || tab === "Accuracy")) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [tab]);

  const userTotalSum = Object.values(userEmotion).reduce(
    (acc, value) => acc + value,
    0
  );

  // Convert values to percentages and round off to 0 decimal
  const userPercentages = Object.fromEntries(
    Object.entries(userEmotion).map(([key, value]) => [
      key,
      Math.round((value / userTotalSum) * 100)
    ])
  );

  const systemTotalSum = Object.values(systemEmotion).reduce(
    (acc, value) => acc + value,
    0
  );

  // Convert values to percentages and round off to 0 decimal
  const systemPercentages = Object.fromEntries(
    Object.entries(systemEmotion).map(([key, value]) => [
      key,
      Math.round((value / systemTotalSum) * 100)
    ])
  );

  const overallTotalSum = Object.values(overallEmotion).reduce(
    (acc, value) => acc + value,
    0
  );

  // Convert values to percentages and round off to 0 decimal
  const overallPercentages = Object.fromEntries(
    Object.entries(overallEmotion).map(([key, value]) => [
      key,
      Math.round((value / overallTotalSum) * 100)
    ])
  );

  const data = [
    0,
    Object.values(overallPercentages),
    Object.values(systemPercentages),
    Object.values(userPercentages)
  ];

  return (
    <>
      {loading && tab === "Emotions" && (
        <div className="flex flex-col items-center justify-center w-full h-[400px]">
          <div className="w-20 h-20 border-4 border-white rounded-full animate-spin" />
          <p className="text-white font-mont text-base font-bold mt-4">
            Loading...
          </p>
        </div>
      )}
      {loading &&
        tab === "Engagement" &&
        (localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4") && (
          <div className="flex flex-col items-center justify-center w-full h-[400px]">
            <div className="w-20 h-20 border-4 border-white rounded-full animate-spin" />
            <p className="text-white font-mont text-base font-bold mt-4">
              Loading...
            </p>
          </div>
        )}
      {flowLoading &&
        (tab === "Flow" || tab === "Accuracy") &&
        (localStorage.getItem("plan") === "2" ||
          localStorage.getItem("plan") === "4") && (
          <div className="flex flex-col items-center justify-center w-full h-[400px]">
            <div className="w-20 h-20 border-4 border-white rounded-full animate-spin" />
            <p className="text-white font-mont text-base font-bold mt-4">
              Loading...
            </p>
          </div>
        )}
      <div className="max-w-full h-full rounded-md flex flex-col items-center justify-start overflow-y-scroll no-scrollbar -mx-2">
        <div className="lg:flex hidden flex-col items-center justify-center gap-2 max-w-full">
          {!loading &&
            tab === "Emotions" &&
            dataEmotionsDougnut.map((index, i = -2) => {
              i++;
              return (
                <Donut
                  dataSet={data[i]}
                  labels={index.labels}
                  color={index.color}
                  title={index.title}
                  subTitle={index.subTitle}
                  radius={70}
                  key={index.title}
                />
              );
            })}
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center gap-2">
          {!loading &&
            tab === "Emotions" &&
            dataEmotionsDougnut.map((index, i = -1) => {
              i++;
              return (
                <Donut
                  dataSet={data[i]}
                  labels={index.labels}
                  color={index.color}
                  title={index.title}
                  subTitle={index.subTitle}
                  radius={95}
                  key={index.title}
                />
              );
            })}
        </div>
        {tab === "Engagement" &&
          (localStorage.getItem("plan") === "2" ||
            localStorage.getItem("plan") === "4") &&
          !loading && (
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <LineChart
                title={dataEngagementBarLine.title}
                subTitle={dataEngagementBarLine.subTitle}
                labels={time}
                userData={userLineData}
                botData={botLineData}
              />
              <LineChart1
                title={dataEngagementLine.title}
                subTitle={dataEngagementLine.subTitle}
                dataSet={dataEngagementLine.dataSet}
                labels={dataEngagementLine.labels}
              />
            </div>
          )}
        {!flowLoading &&
          tab === "Accuracy" &&
          (localStorage.getItem("plan") === "2" ||
            localStorage.getItem("plan") === "4") && (
            <div className="flex flex-col items-center justify-start w-full gap-2 bg-white p-2 rounded-xl">
              <p className="font-mont text-xl font-bold">List of Errors</p>
              <p className="font-mont text-base text-center">
                This section lists errors that may impact user engagement with
                the chatbot.
              </p>
              <p className="font-mont text-sm font-medium text-center">
                {Object.values(flow)[3]}
              </p>
            </div>
          )}
        {!flowLoading &&
          tab === "Flow" &&
          (localStorage.getItem("plan") === "2" ||
            localStorage.getItem("plan") === "4") && (
            <div className="flex flex-col items-center justify-start w-full gap-2 bg-white p-2 rounded-xl">
              <p className="font-mont text-xl font-bold">Tips</p>
              <ul className="list-disc list-inside">
                {Object.values(flow)
                  .slice(0, 3)
                  .map((index, i) => {
                    return (
                      <li className="font-mont text-base" key={i}>
                        {index}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
      </div>
    </>
  );
};

export default ChatRight;
