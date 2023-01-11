import './App.css';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx'
import SkillsBlock from './components/SkillsBlock';
import ProjectsBlock from './components/ProjectsBlock';
/*import Separator from './components/Separator';*/
import ContactBlock from './components/ContactBlock';
/*import g1 from './images/g2.png';
import g2 from './images/g3.png'*/


function App() {
  return (
    <div className="App">
     <Navbar />
     <Profile />
     <SkillsBlock />
     <ProjectsBlock />
     <ContactBlock />
    </div>
    
  );
}

export default App;