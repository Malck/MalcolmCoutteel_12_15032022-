import React from "react";
  import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
  } from "recharts";

export default function RadarActivity() {

  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150
    }
  ];
  
    return (

      <RadarChart cy="50%" cx="50%"  width={260} height={260} data={data} outerRadius={70} >

        <PolarGrid />

        <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false}/>

        <Radar dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.8} />

      </RadarChart>

    );

}
// Radar datakey="value"



