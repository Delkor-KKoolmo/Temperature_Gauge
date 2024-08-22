var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

const gaugeData = [
  {
    value: 250,
    name: "",
    title: {
      show: true,
      fontSize: 30,
      fontWeight: "bold",
      offsetCenter: ["0%", "55%"],
      color: "#777777",
    },
    detail: {
      //Current Value Label
      show: true,
      fontSize: 80,
      offsetCenter: ["0%", "-140%"],
      valueAnimation: true,
      formatter: function (value) {
        return value + " " + String.fromCharCode(176) + "F";
      },
      color: "#000", // Set a specific color for the detail text
    },
  },
];

option = {
  series: [
    {
      name: "Main Gauge",
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      center: ["50%", "90%"],
      radius: "100%",
      min: 0,
      max: 500,
      z: 1,
      splitNumber: 0,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0.5, "#0a152f26"],
            [0.75, "#0a152f26"], //"#777777"],
            [1.0, "#0a152f26"],
          ],
          width: 60, // Width of the axis line
        },
      },
      progress: {
        //gray bar
        show: false,
      },
      pointer: {
        // black needle
        show: true, // Ensure the pointer is visible
        icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
        length: "65%", // Length of the pointer
        width: "10%", // Width of the pointer
        offsetCenter: [0, 0],
        itemStyle: {
          color: "#000", // Black pointer color
        },
      },
      axisTick: {
        show: false, // Show the axis ticks
        lineStyle: {
          width: 2, // Width of the ticks
          color: "auto", // Color of the axis ticks
          dashOffset: 40,
        },
      },
      axisLabel: {
        //labels for tick values
        show: false,
      },
      data: gaugeData,
    },
    {
      name: "Highlight Portion",
      type: "gauge",
      startAngle: 90,
      endAngle: 45,
      center: ["50%", "90%"],
      radius: "100%",
      min: 250,
      max: 375,
      z: 2,
      splitNumber: 1,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[1.0, "#777777"]],
          width: 60, // Width of the axis line
        },
      },
      progress: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize: 28,
        distance: -60,
        padding: [-10, -50, 0, -40],
        formatter: "{value} ", // + String.fromCharCode(176) + "F",
      },
    },
    {
      name: "Gauge Marks",
      type: "gauge",
      startAngle: 144,
      endAngle: 36,
      center: ["50%", "90%"],
      radius: "100%",
      min: 100,
      max: 400,
      z: 3,
      splitNumber: 3,
      splitLine: {
        show: true,
        length: 40,
        distance: 0,
        lineStyle: {
          width: 8, // Width of the split lines
          color: "#000", // Color of the split lines
          cap: "round",
        },
      },
      axisLine: {
        show: false,
      },
      progress: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
};

setInterval(function () {
  gaugeData[0].value = Math.trunc(+(Math.random() * 400));
  myChart.setOption({
    series: [
      {
        data: gaugeData,
      },
    ],
  });
}, 2000);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
