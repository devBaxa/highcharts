import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsSankey from "highcharts/modules/sankey";

import "./Chart1.pcss";

HighchartsSankey(Highcharts);

class Chart1 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = this.highchartsOptions();
    this.chart = Highcharts.chart("sankey-chart", options);
  }

  highchartsOptions() {
    const options = {
      chart: {
        type: "sankey",
        margin: [30, 20, 30, 20],
        backgroundColor: "#242427",
      },

      title: {
        text: null,
      },

      plotOptions: {
        variablepie: {
            startAngle: 159,
        },
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
          },
          showInLegend: false,
        },
      },

      series: [
        {
          dataLabels: {
            useHTML: true,
            style: {
              strokeWidth: 0,
              color: "#FFFFFF",
              textOutline: "transparent",
              fontSize: "24px",
            },
          },
          colors: ["#979797",  "#8B75BA",  "#DDAFD3", "#7EB8BF", "#77954D"],       
          data: [
          {
            color: {
            linearGradient: [0, 0, 960, 0],
            stops: [
              [0, "#868587"],
              [1, "#7C69A3"]
            ]}, 
            from: "Медведи <i>65%</i>", 
            to: "Мёд <i>50%</i>", 
            weight: 10,
          },
          {
            color: {
              linearGradient: [0, 0, 960, 0],
              stops: [
                [0, "#868587"],
                [1, "#C19AB9"]
              ]}, 
            from: "Медведи <i>65%</i>", 
            to: "<span class='span-text-right'>Малина <i>20%</i></span>", 
            weight: 4,
          },
          {
            color: {
              linearGradient: [0, 0, 960, 0],
              stops: [
                [0, "#868587"],
                [1, "#70A0A5"]
              ]}, 
            from: "Медведи <i>65%</i>", 
            to: "<span class='span-text-right'>Яблоки <i>30%</i></span>", 
            weight: 4,
          },
          {
            color: {
              linearGradient: [0, 0, 960, 0],
              stops: [
                [0, "#6A8347"],
                [1, "#7C69A3"]
              ]}, 
            from: "Ежи <i>35%</i>", 
            to: "Мёд <i>50%</i>", 
            weight: 4,
          },
          {
            color: {
              linearGradient: [0, 0, 960, 0],
              stops: [
                [0, "#6A8347"],
                [1, "#C19AB9"]
              ]}, 
            from: "Ежи <i>35%</i>", 
            to: "<span class='span-text-right'>Малина <i>20%</i></span>", 
            weight: 4,
          },
          {
            color: {
              linearGradient: [0, 0, 960, 0],
              stops: [
                [0, "#6A8347"],
                [1, "#70A0A5"]
              ]}, 
            from: "Ежи <i>35%</i>", 
            to: "<span class='span-text-right'>Яблоки <i>30%</i></span>", 
            weight: 6,
          }
          ],
          type: "sankey",
          name: "",
        }
      ]
    };
    return options;
  }

  render() {
    return <div className="chart-1" id="sankey-chart" />;
  }
}

export default Chart1;