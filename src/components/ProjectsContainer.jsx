import React from "react";
import '../styles/ProjectsContainer.css';
import Project from './Project';
import p1 from '../images/p1.png';
import p2 from '../images/g5.png';
import p3 from '../images/g6.png';
import p4 from '../images/g7.png';

function ProjectsContainer(){
  return <div className="projectsContainer">
    <Project 
      title={'My web'}
      description={'Web diseñada para mi porfolio'}
      languages={'React y Css'}
      img={p4}
      urlWeb={"http://lozanoMiguel.github.io/myweb"}
      urlGit={"https://github.com/lozanoMiguel/myweb.git"}
      />
    <Project
      title={'Notas web'}
      description={'Aplicacion web de notas donde, puedes arrastrar las notas y ubicarlas donde quieras, como tambien eliminarlas'}
      languages={'React y Css'}
      img={ p3 }
      urlWeb={"http://lozanoMiguel.github.io/notes"}
      urlGit={"https://github.com/lozanoMiguel/notes.git"}
      />  
    
    
  </div>
}

export default ProjectsContainer;