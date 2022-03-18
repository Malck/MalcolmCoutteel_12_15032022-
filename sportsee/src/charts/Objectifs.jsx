import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Objectif() {
  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "9",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "10",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <div className="activity-chart-container">
      <div className="header-barChart">
        <h3>Activité quotidienne</h3>

        <div className="legend">
          <div id="poids">
            <span className="point"></span>

            <h4>Poids (kg)</h4>
          </div>

          <div id="calories">
            <span className="point"></span>
            <h4>Calories brûlées (kCal)</h4>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%">
        <BarChart
          className="barChart"
          margin={{
            top: 20,
            right: 0,
            bottom: 30,
            left: 0,
          }}
          legendType="circle"
          data={data}
          barGap={8}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dy={20}
            dataKey="day"
            tick={{ fontSize: 18, fill: "#74798c" }}
            tickLine={false}
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tick={{ fontSize: 18, fill: "#74798c", strokeWidth: 6 }}
            tickLine={false}
            dx={20}
            interval="number"
            allowDecimals={false}
            dataKey="kilogram"
            domain={[0, "auto"]}
            yAxisId="kg"
          />
          <YAxis
            orientation="right"
            tick={{ fontSize: 18, fill: "#74798c", strokeWidth: 6 }}
            tickLine={false}
            dataKey="calories"
            domain={[0, "auto"]}
            yAxisId="kCal"
            hide={true}
          />

          <Tooltip
            cursor={{ fill: "#C4C4C4", opacity: "0.5" }}
            content={<CustomTooltip />}
          />
          <Bar
            dataKey="calories"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={9}
            yAxisId="kCal"
          />
          <Bar
            yAxisId="kg" // Link data to the proper YAxis
            dataKey="kilogram"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={9}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label">{`${payload[1].value} kg`}</p>
        <p className="label">{`${payload[0].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};
