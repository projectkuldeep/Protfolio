
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects from './Project_data';
import { GrDeploy } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function Project() {
  return (
    <div id="projects" className='projects'>
      <div className="P_title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="about img"/>
      </div>
      <div className="project_container">
        {
            myprojects.map((projects,i)=>{
                return (
                    <div  className='project_item' key={i}>
                      <div>
                        <img src={projects.Project_img} alt={projects.Project_title}/>
                        <h3>{projects.Project_title}</h3>
                      </div>
                        <span className='links'>
                          <a href={projects.P_Git}><FaCode /></a>
                          <a href={projects.P_Deploy}><GrDeploy /> </a>
                        </span>
                       
                    </div>
                )
            })
        }
       
        </div>
        <a href="https://github.com/projectkuldeep?tab=repositories"> 
          <div className='sh_btn border_set'><span>Show more</span><span className="spans"><FaArrowRight /></span></div>
        </a>
    </div>
  )
}

export default Project;
 