import React, { Component } from "react";
import Chart from "chart.js";
import fetchData from "./../common/fetchData"

class MinMaxPieChart extends Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  async arrangeData() {

    let facilities = [];
    let minMaxCounter = [];
    let data = await fetchData(this.props);
    //console.log(data.keys);
    

    data.forEach(element => {
        facilities.push(element["Facility"]);
    });

    //Find total minimum and maximum counts for each sub district

    console.log(facilities);

    facilities = [...new Set(facilities)];
    console.log(facilities);

    minMaxCounter = Array(2).fill().map(() => Array(facilities.length).fill(0));

    console.log(minMaxCounter);

    data.forEach((element) => {
      for(let i = 0; i < facilities.length; i++)
      {
        if (facilities[i] == element["Facility"])
        {
          if (element["Performance"] == "Maximum")
          {
            minMaxCounter[0][i] += 1;
          }
          else if (element["Performance"] == "Minimum")
          {
            minMaxCounter[1][i] += 1;
          }
        }
      }
    });
     this.loadChart(facilities, minMaxCounter);
    
  }
  componentDidUpdate() {
    this.arrangeData();
  }
loadChart(l, data) {
 /* var options = {
    layout: {
      padding: {
        top: 5,
      },
    },
    scales: {
      yAxes: [
        {
          display: true,
          barPercentage: 0.4,
          ticks: {
            fontSize: 12,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            callback: function (t, i) {
              return t < 0 ? Math.abs(t) : t;
            },
          },
        },
      ],
    },
    responsive: true,
    //maintainAspectRatio: false,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  this.chart = new Chart(this.pieChart, {
    type: "horizontalBar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Minimum performing facilities",
          data: data[0],
          backgroundColor: "#2196F3",
          hoverBackgroundColor: "#2196F3",
        },
        {
          label: "Maximum performing facilities",
          data: data[1],
          backgroundColor: "#E91E63",
          hoverBackgroundColor: "#E91E63",
        },
      ],
    },
    options:{
    title: {
      text: 'Number of facilities per indicator',
      display: true,
      fontSize: 16,
      position: 'top',
  },
  maintainAspectRatio: true,
  responsive: true
  },
  });*/
  
  this.chart = new Chart(this.pieChart, {
          type: 'doughnut',
          data: {
              labels: l,
              datasets: [{
                  label: '',
                  data: data[0],
                  backgroundColor: this.colourArrayGenerator(l.length),
                  borderWidth: 1
              }]
          },
          options: {
            title: {
              text: 'Maximum performance per facility',
              display: true,
              fontSize: 16,
              position: 'top',
          },
          maintainAspectRatio: true,
          responsive: true
          }
      });

}
randomRGBA() {
  let o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

colourArrayGenerator(num) {
  let c = [];
  while(num > 0)
  {
      c.push(this.randomRGBA());
      num--;
  }
  return c;
}
  componentDidMount() {
    //age group gets location
    //male data total mx
    //female data total min
    this.arrangeData();

    console.log("in pie")
   }

  render() {
    return (
      <canvas
        className="chart-canvas-common pie-chart"
        ref={(r) => {
          this.pieChart = r;
        }}
      />
    );
  }
}
export default MinMaxPieChart;
