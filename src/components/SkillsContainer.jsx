import React from "react";
import '../styles/SkillsContainer.css'
import Skill from './Skill';

function SkillsContainer(){
  return <div className="skillsContainer">
            <Skill
              name = {'HTML5'} />
            <Skill 
              name = {'Css'}/>
            <Skill
              name = {'javaScript'} />
            <Skill
              name = {'React'} />
            <Skill
              name = {'NodeJS'} />
            <Skill
              name = {'Git'} />
         </div>
}

export default SkillsContainer;