import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const PercentageCard = () => {
  const data = [
    { label: "72.3% of the media for #sunrise are photos.", value: 60 },
    { label: "Remaining", value: 40 },
  ];

  return (
    <div>
      <div style={{ position: "relative", height: 200 }}>
        <PieChart
          series={[
            {
              innerRadius: 60,
              outerRadius: "50%",
              data: data,
            },
          ]}
          slotProps={{
            legend: { hidden: true },
          }}
          colors={["#AE68FA", "black"]}
        />
      </div>
    </div>
  );
};

export default PercentageCard;
