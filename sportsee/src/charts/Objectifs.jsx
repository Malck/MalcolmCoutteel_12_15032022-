import React from "react";
import "../charts/charts.css"
import { useState,useEffect } from "react";
import {LineChart,Line,XAxis,Tooltip,Legend} from "recharts";
import { getAverageSession } from "../tools/Tools";

export default function ObjectifChart(props) {

  const [data, setData] = useState(null)


    useEffect(() => {

        async function getSession() {
            const response = await getAverageSession(props.id)
            setData(response)
        }

        getSession()

    }, []) 

    if (!data) return (
      <div>
          <h1>ERREUR !</h1>
      </div>
  )

  function CustomTooltip({ active, payload, label }) {
        
    if (active && payload[0].value !== null) {

        return (
            <div className="tooltip-objectifs">

              <h4>{ payload[0].value } min</h4>

            </div>
        )
    }

    return null
}


/*function xAxisTickFormatter(key,toto) {
  const domaineDate = ["L","M","M","J","V","S","D"];
  return domaineDate[toto] 
}*/


  return (
    <LineChart width={260} height={260} data={data.sessions}> 
      
      <XAxis dataKey="day" type={["L","M","M","J","V","S","D"]}  label={{ color: "white" }} tick={{stroke:"lightgrey"}} tickLine={false} /> 
     
      <Tooltip name="DAY" content={<CustomTooltip />} />

      <defs>
        <linearGradient id="lineID" x1="0" y1="0" x2="1" y2="0">
          <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.5}/>
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={10}/>
        </linearGradient>
      </defs>
    
      <Line type="monotone" dataKey="sessionLength" stroke="url(#lineID)" dot={false} strokeWidth={4} strokeOpacity={10} />

      <Legend />
      
    </LineChart>
  );
}

