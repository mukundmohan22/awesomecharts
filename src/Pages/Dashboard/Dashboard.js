import React from "react";
import "./Dashboard.scss";

import { managerData, yearLabels, nationalAverageData } from "../../mockData";
import ChartWrapper from "../../Components/ChartWrapper/ChartWrapper";

const Dashboard = () => {
  const isMobileDevice = () => {
    return window.innerWidth < 500;
  };
  const barData = {
    labels: yearLabels,
    datasets: [
      {
        label: "Sales",
        data: managerData,
        backgroundColor: "rgba(255, 99, 132,0.8)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        borderRadius: 8,
        datalabels: {
          anchor: "end",
          align: "start",
        },
      },
      {
        label: "National Average",
        data: nationalAverageData,
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
        borderRadius: 8,
        datalabels: {
          anchor: "end",
          align: "start",
        },
      },
    ],
  };

  const pieData = {
    labels: yearLabels,
    datasets: [
      {
        label: "Sales",
        data: managerData,
        backgroundColor: [
          "rgba(255, 99, 132,0.8)",
          "rgba(54, 162, 235,0.8)",
          "rgba(255, 206, 86,0.8)",
          "rgba(75, 192, 192,0.8)",
          "rgba(153, 102, 255,0.8)",
        ],
        borderWidth: 2,
        datalabels: {
          anchor: "center",
          align: "start",
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="container__box">
        <div className="charts__container">
          <div className="charts__container__title">Bar Chart</div>
          <div className="charts__container__content">
            <ChartWrapper
              data={barData}
              id="bar-chart"
              type="bar"
              showDataLabels={true}
              legendPosition="bottom"
              delayedAnimation={true}
              maintainAspectRatio={!isMobileDevice()}
            />
          </div>
        </div>
      </div>

      <div className="container__box">
        <div className="charts__container">
          <div className="charts__container__title">Line Chart</div>
          <div className="charts__container__content">
            <ChartWrapper
              data={barData}
              id="line-chart"
              type="line"
              showDataLabels={true}
              legendPosition="bottom"
              delayedAnimation={true}
              maintainAspectRatio={!isMobileDevice()}
            />
          </div>
        </div>
      </div>
      <div className="container__box">
        <div className="charts__container">
          <div className="charts__container__title">Pie Chart</div>
          <div className="charts__container__content">
            <ChartWrapper
              data={pieData}
              id="pie-chart"
              type="pie"
              showDataLabels={true}
              legendPosition="bottom"
              aspectRatio={1.6}
              delayedAnimation={true}
              maintainAspectRatio={!isMobileDevice()}
            />
          </div>
        </div>
      </div>
      <div className="container__box">
        <div className="charts__container">
          <div className="charts__container__title">Polar Area Chart</div>
          <div className="charts__container__content">
            <ChartWrapper
              data={pieData}
              id="polarArea-chart"
              type="polarArea"
              showDataLabels={true}
              legendPosition="bottom"
              maintainAspectRatio={!isMobileDevice()}
              aspectRatio={1.6}
              delayedAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
