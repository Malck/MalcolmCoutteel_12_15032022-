
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
    
      </text>
      <text x={cx} y={cy+25} dy={8} textAnchor="middle" fill={fill}>
        
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const data = [
  { name: "Group A", value: 30 },
  { name: "Group A", value: 70 },
];
const COLORS = ["#0088FE", "#FBFBFB"];

export default function App() {
  return (
    <PieChart width={260} height={260}>
      <Pie
        data={data}
        activeIndex={0}
        activeShape={renderActiveShape}
        cx="50%"
        cy="50%"
        startAngle={-270}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}















/*import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function Score(){

  const data = [
    { name: "Group A", value: 20 },
    { name: "Group A", value: 80 },
  ];
  const COLORS = ["#0088FE", "black"];

    return (
      <PieChart width={260} height={260}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={-270}
          innerRadius={60}
          outerRadius={80}
          fill="#FFF"
          dataKey="value"
        >
          
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
  
      </PieChart>
    );

}*/










/* Pie
return(
  <PieChart width={260} height={260}>
<Pie
  data={data01}
  dataKey="value"
  cx="50%"
  cy="50%"
  outerRadius={80}
  fill="#FFFFFF"
/>
<Pie
  data={data02}
  dataKey="value"
  cx="50%"
  cy="50%"
  innerRadius={80}
  outerRadius={90}
  fill="#E60000"
  label
/>
</PieChart>
) */