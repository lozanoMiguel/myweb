import React from "react";
import '../styles/Skill.css'

function Skill(props){
    return <div className="skillBall">
                {props.name}
           </div>
}

export default Skill;