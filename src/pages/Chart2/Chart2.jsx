import React from "react";
import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
import "./Chart2.pcss";

variablePie(Highcharts);

class Chart2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = this.highchartsOptions();
    this.chart = Highcharts.chart("pie-chart", options);
  }

  highchartsOptions() {
    const options = {
      chart: {
        type: "variablepie",
        margin: [0, 0, 0, 0],
        backgroundColor: "#4e4e4e",
        events: {
          load: function() {
            this.renderer
              .label(
                `
                <span class="first-line">215</span>
                <span class="second-line">133 (+74)<br/>82</span>
                `,"","","","","",true,"","pie-label"
              )
              .add();
          }
        }
      },
      colors: ["#77954D", "#979797"],

      title: {
        text: null
      },

      tooltip: {
        enabled: false
      },

      legend: {
        align: "center",
        verticalAlign: "bottom",
        layout: "horizontal",
        x: 0,
        y: 25,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
          font: "18px Arial",
          color: "#FFFFFF"
        }
      },
      plotOptions: {
        variablepie: {
            startAngle: 158
        },
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: true,
            useHTML: true,
            style: {
              strokeWidth: 0,
              color: "#FFFFFF",
              textOutline: "transparent",
              fontSize: "24px",
            },
          },
          borderWidth: 0,
          showInLegend: true,
          size: 300
        }
      },

      series: [
        {
          minPointSize: 10,
          innerSize: "80%",
          zMin: 0,
          name: "Data",
          data: [
            {
              name: "<span class='label-legend'>Зашифровано</span><i>62%</i>",
              shadow: false,
              y: 62,
              z: 10
            },
            {
              name: "<span class='label-legend'>Незашифровано</span><i>38%</i>",
              y: 38,
              z: 10
            }
          ]
        }
      ]
    };
    return options;
  }

  render() {
    return <div className="chart-2" id="pie-chart" />;
  }
}

export default Chart2;