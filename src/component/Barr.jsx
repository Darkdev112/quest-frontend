import React from 'react'
import "./Bar.scss";
import BarChart from "react-bar-chart";

export default function Barr() {
  const data = [
    { text: "facebook", value: 500 },
    { text: "whatsapp", value: 340 },
    { text: "skype", value: 100 },
    { text: "gmail", value: 140 }
  ];
  const color = { color: "blue" };
  const margin = { top: 10, right: 20, bottom: 30, left: 40 };
  const handleBarClick = (element) => {
    console.log(`The  ${element.text} with value ${element.value} was clicked`);
  };
  return (
    <div className="bar-graph">
      <div style={{ width: "100%" }}>
        <BarChart
          ylabel="Quantity"
          width={400}
          height={400}
          margin={margin}
          data={data}
          color={color}
          onBarClick={handleBarClick}
        />
      </div>
    </div>
  );
}
                      
