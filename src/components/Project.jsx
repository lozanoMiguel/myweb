import React from "react";
import '../styles/Project.css';



function Project(props){
  return <div className="projectCard">
           <h3>{props.title}</h3>
           <p className="description">{props.description}</p>
           <img src={props.img} alt="Once ideal" />
           <p className="language">{props.languages}</p>
           <div className="bottonBox">
            <button className="btnSource">Git</button>
            <button className="btnWeb">Play</button>
           </div>
          </div>
}

export default Project;