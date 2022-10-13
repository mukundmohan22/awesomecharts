import React, { PureComponent } from "react";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels, ...registerables);

class ChartWrapper extends PureComponent {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.myChart.data = this.props.data;
    this.myChart.update();
  }

  buildChart = () => {
    if (typeof this.myChart !== "undefined") this.myChart.destroy();

    const {
      data,
      type,
      showDataLabels,
      chartOptions,
      legendPosition,
      maintainAspectRatio,
      delayedAnimation,
    } = this.props;
    let delayed;
    const delay = delayedAnimation
      ? {
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        }
      : {};

    const options = {
      responsive: true,
      maintainAspectRatio,
      layout: {
        padding: 10,
      },
      plugins: {
        datalabels: {
          color: "white",
          display: showDataLabels,
          font: {
            weight: "bolder",
          },
          formatter: Math.round,
        },
        legend: {
          position: legendPosition,
          labels: {
            color: "black",
          },
        },
      },
    };

    const myChartRef = this.chartRef.current.getContext("2d");

    this.myChart = new Chart(myChartRef, {
      type,
      data,
      options: Object.assign(options, chartOptions, delay),
    });
  };
  render() {
    return <canvas id={this.props.id} ref={this.chartRef} />;
  }
}
ChartWrapper.defaultProps = {
  data: {},
  type: "bar",
  showDataLabels: false,
  chartOptions: {},
  legendPosition: "bottom",
  maintainAspectRatio: true,
  id: Math.random(),
  delayedAnimation: false,
};

export default ChartWrapper;
