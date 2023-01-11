import React from "react";
import '../styles/SkillsBlock.css';
import SkillsContainer from "./SkillsContainer";

function SkillsBlock(){
  return <div className="skillsBlock" id='skills'>
           <h2>Skills</h2>
           <SkillsContainer />
         </div>
}

export default SkillsBlock;