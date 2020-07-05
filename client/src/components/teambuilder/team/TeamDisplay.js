import React from "react";
import { useSelector } from "react-redux";
import { mode, sum_mode } from "../variables";
import { TeamStatDropDown } from "./TeamStatDropDown";
import { RadarCharts } from "./RadarCharts";
import { TeamRadarChart } from "./TeamRadarChart";
import { testData } from "./helpers";
import { Row, Col } from "antd";
//css
import "../css/TeamDisplay.css";

export const TeamDisplay = () => {
  const { players } = useSelector((state) => {
    return {
      players: state.Team.teamPlayers,
    };
  });

  return (
    <div>
      <Row justify="center">
        <Col xs={16}>
          <div style={{ width: "100" }}>
            <TeamStatDropDown />
            <TeamRadarChart />
          </div>
        </Col>
      </Row>
      {/* <Row> */}
      {/*   <Col xs={16}> */}
      {/*     <div style={{ paddingTop: "5%" }}> */}
      {/*       {players.map((player) => { */}
      {/*         const { */}
      {/*           first_name, */}
      {/*           last_name, */}
      {/*           position, */}
      {/*           id, */}
      {/*           team: { abbreviation }, */}
      {/*         } = player[1]; */}

      {/*         const stats = testData(player, sum_mode, id); */}

      {/*         return ( */}
      {/*           <div> */}
      {/*             <div */}
      {/*               style={{ */}
      {/*                 display: "flex", */}
      {/*                 flexDirection: "row", */}
      {/*               }} */}
      {/*             > */}
      {/*               <h2> */}
      {/*                 {first_name} {last_name} */}
      {/*               </h2> */}

      {/*               <h5> */}
      {/*                 Position: {position} | Team: {abbreviation} */}
      {/*               </h5> */}
      {/*               <RadarCharts */}
      {/*                 style={{ marginLeft: "auto" }} */}
      {/*                 id={id} */}
      {/*                 stats={stats} */}
      {/*                 color={player[2]} */}
      {/*               ></RadarCharts> */}
      {/*             </div> */}

      {/*             {/1* <Row> *1/} */}
      {/*             {/1*   <Col xs={16}> *1/} */}
      {/*             {/1*     <table className="TeamDisplayTable"> *1/} */}
      {/*             {/1*       <thead> *1/} */}
      {/*             {/1*         <tr> *1/} */}
      {/*             {/1*           {Object.keys(mode).map((key) => { *1/} */}
      {/*             {/1*             if (key in player[0]) { *1/} */}
      {/*             {/1*               return ( *1/} */}
      {/*             {/1*                 <th *1/} */}
      {/*             {/1*                   style={{ *1/} */}
      {/*             {/1*                     textAlign: "center", *1/} */}
      {/*             {/1*                   }} *1/} */}
      {/*             {/1*                 > *1/} */}
      {/*             {/1*                   {mode[key]} *1/} */}
      {/*             {/1*                 </th> *1/} */}
      {/*             {/1*               ); *1/} */}
      {/*             {/1*             } *1/} */}
      {/*             {/1*           })} *1/} */}
      {/*             {/1*         </tr> *1/} */}
      {/*             {/1*       </thead> *1/} */}
      {/*             {/1*       <tbody> *1/} */}
      {/*             {/1*         <tr> *1/} */}
      {/*             {/1*           {Object.keys(mode).map((key) => { *1/} */}
      {/*             {/1*             if (key in player[0]) { *1/} */}
      {/*             {/1*               return ( *1/} */}
      {/*             {/1*                 <td *1/} */}
      {/*             {/1*                   style={{ *1/} */}
      {/*             {/1*                     textAlign: "center", *1/} */}
      {/*             {/1*                   }} *1/} */}
      {/*             {/1*                 > *1/} */}
      {/*             {/1*                   {player[0][key]} *1/} */}
      {/*             {/1*                 </td> *1/} */}
      {/*             {/1*               ); *1/} */}
      {/*             {/1*             } *1/} */}
      {/*             {/1*           })} *1/} */}
      {/*             {/1*         </tr> *1/} */}
      {/*             {/1*       </tbody> *1/} */}
      {/*             {/1*     </table> *1/} */}
      {/*             {/1*   </Col> *1/} */}
      {/*             {/1* </Row> *1/} */}
      {/*           </div> */}
      {/*         ); */}
      {/*       })} */}
      {/*     </div> */}
      {/*   </Col> */}
      {/* </Row> */}
    </div>
  );
};
