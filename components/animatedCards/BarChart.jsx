import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

const generateRandomData = () => {
  return months.map(() => ({
    followers: Math.floor(Math.random() * 7600), // Generate random number of followers
  }));
};

const formatNumber = (value) => {
  if (value >= 1000) {
    const formatted = (value / 1000).toFixed(1);
    return formatted.endsWith(".0")
      ? formatted.slice(0, -2) + "k"
      : formatted + "k";
  }
  return value.toString();
};

const BarChart = () => {
  const chartRef = useRef(null);
  const data = generateRandomData();

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: months,
          datasets: [
            {
              data: data.map((item) => item.followers),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,

              ticks: {
                callback: function (value, index, values) {
                  return formatNumber(value);
                },
              },
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
