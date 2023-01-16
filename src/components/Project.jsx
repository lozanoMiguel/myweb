import React from "react";
import '../styles/Project.css';



function Project(props){
  return <div className="projectCard">
           <h3>{props.title}</h3>
           <p className="description">{props.description}</p>
           <img src={props.img} alt="Once ideal" />
           <p className="language">{props.languages}</p>
           <div className="bottonBox">
            <button className="btnSource"><a href={props.urlGit}>Git</a></button>
            <button className="btnWeb"><a href={props.urlWeb}>Play</a></button>
            </div>
          </div>
}

export default Project;