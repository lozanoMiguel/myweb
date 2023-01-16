import React from "react";
import '../styles/ProjectsContainer.css';
import Project from './Project';
import p1 from '../images/p1.png';
import p2 from '../images/g5.png';
import p3 from '../images/g6.png';

function ProjectsContainer(){
  return <div className="projectsContainer">
    <Project 
      title={'Mi once ideal'}
      description={'web diseñada para armar tu once ideal de la seleccion argentina de fútbol'}
      languages={'HTML5, Css Y JavaScript'}
      img={p1}
      urlWeb={""}
      urlGit={""}
      />
    <Project
      title={'Libro de novedades'}
      description={'Web diseñada para comunicar ordenadores de casa de ropa y facilitar la comunicacion'}
      languages={'HTML5, Css, JavaScript, NodeJs y MySQL'}
      img={ p2 }
      urlWeb={""}
      urlGit={""}
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