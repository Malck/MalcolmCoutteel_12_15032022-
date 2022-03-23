import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

export default function WeightChart() {
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
    

      <BarChart width={840} height={320} data={data} barGap={10}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}>

        <CartesianGrid strokeDasharray="3 3" vertical={false}/>

        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingBottom: "20px" }}
        />

        <XAxis dataKey="name" tickLine={false} />

        <YAxis orientation='right'/>

        <Tooltip  wrapperStyle={{ backgroundColor: '#E60000', color: 'white', padding: "6px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} />

        <Bar barSize={10} dataKey="pv" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} />
        <Bar barSize={10} dataKey="uv" fill="#E60000" name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} />

      </BarChart>

    
  );
}

//Xaxis datakey="???????" correspond a 1 2  3  4 5  6 ...
//Bar datakey="kilogram"
//Bar datakey="calories"