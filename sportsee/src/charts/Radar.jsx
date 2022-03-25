import React from "react";
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts";

import { useState,useEffect } from "react";
import { getPerf } from "../tools/Tools";

export default function RadarActivity({id}) {

  const[data,setData] = useState()

  useEffect(() => {
    async function getRadar(){

      const response = await getPerf(id)

      const newData = []

      if (!response) {
        return "erreur"
      }

      response.data.map(x => {
          newData.push(
              {
                  value: x.value,
                  name: response.kind[x.kind]
              }
          )
      })
      setData(newData)
      
      console.log(newData)

    }
    getRadar();

  },[])

  
    return (

      <RadarChart cy="50%" cx="50%"  width={260} height={260} data={data} outerRadius={70}  >

        <PolarGrid />

        <PolarAngleAxis dataKey="name" stroke="white" tickLine={false} y="120"/>

        <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.8} />

      </RadarChart>

    );

}




