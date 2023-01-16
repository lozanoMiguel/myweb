import React from "react";
import '../styles/Project.css';



function Project(props){
  return <div className="projectCard">
           <h3>{props.title}</h3>
           <p className="description">{props.description}</p>
           <img src={props.img} alt="Once ideal" />
           <p className="language">{props.languages}</p>
           <div className="bottonBox">
            <a href="#">
              <button className="btnSource">Git</button>
            </a>
            <a href={ props.url }>
              <button className="btnWeb"></button>
            </a>
            </div>
          </div>
}

export default Project;