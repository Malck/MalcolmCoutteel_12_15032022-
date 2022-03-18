import Stats from "../components/Stats";

import "../styles/user.css";
import calories from "../assets/calories.svg";
import proteines from "../assets/proteines.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";

import WeightActivity from "../charts/WeightActivity";
import RadarActivity from "../charts/Radar";

export default function User() {
  
  return (
    <div className="userpage">
      <div className="user-infos">
        <h1>
          Bonjour <span>"User"</span>{" "}
        </h1>
        <h2>Félicitation! Vous avez explosé vos objectifs hier 👏 </h2>
      </div>

      <div className="user-graphics">

        <div className="user-weight">
          <WeightActivity />
        </div>

        <div className="user-radar">

          <RadarActivity />
        
        </div>

        </div>

      <div className="user-symbols">
        <Stats name="Calories" value={"1,930kCal"} img={calories} />
        <Stats name="Proteines" value="155g" img={proteines} />
        <Stats name="Glucides" value="290g" img={glucides} />
        <Stats name="Lipides" value="50g" img={lipides} />
      </div>
    </div>
  );
}
