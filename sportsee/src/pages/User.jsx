//import { useEffect, useState } from "react"
import "../styles/user.css";
import calories from "../assets/calories.svg";
import proteines from "../assets/proteines.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";

import WeightChart from "../charts/Weight";
import RadarActivity from "../charts/Radar";
import ObjectifChart from "../charts/Objectifs";
import ScoreChart from "../charts/Score";
import Stats from "../components/Stats";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findID } from "../tools/Tools";

export default function User() {

  const {id} = useParams()
  console.log(id)

  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
        const response = await findID(id)
        setUser(response)
    }
    getUser()
    
  }, [] )


  return (
    <div className="userpage">
      <div className="user-infos">

        {user &&
        <h1>
          Bonjour <span>{user.userInfos.firstName}</span>
        </h1>
        }
        <h2>Félicitation! Vous avez explosé vos objectifs hier 👏 </h2>
      </div>

      <div className="user-graphics">

        {user &&

        <div className="user-charts">

          <div className="user-weight">
            <WeightChart />
          </div>

          <div className="user-objectif">
            <ObjectifChart id={user.id}/>
          </div>

          <div className="user-radar">
            <RadarActivity />
          </div>

          <div className="user-score">
            <ScoreChart />
          </div>
          
          <div className="user-symbols">
            <Stats name="Calories" value={`${String(user.keyData.calorieCount).replace(/(.)(?=(\d{3})+$)/g,'$1,')}kCal`} img={calories} />
            <Stats name="Proteines" value={`${user.keyData.proteinCount}g`} img={proteines} />
            <Stats name="Glucides" value={`${user.keyData.carbohydrateCount}g`} img={glucides} />
            <Stats name="Lipides" value={`${user.keyData.lipidCount}g`} img={lipides} />
          </div>

        </div>

        }


          


      </div>

    </div>
  );
}
