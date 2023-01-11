import React from "react";
import '../styles/ProjectsBlock.css';
import ProjectsContainer from "./ProjectsContainer";

function ProjectsBlock(){
  return <div className="projectsBlock" id='projects'>
           <h2>projects</h2>
           <ProjectsContainer />
         </div>
}

export default ProjectsBlock;