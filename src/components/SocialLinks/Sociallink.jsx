import React from 'react';
import { FaLinkedin ,FaGithub} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import "./Sociallink.css";

function Sociallink() {
  return (
    <div className='sociallink'>
      <ul className='sociallink_list'>
        <li className='sociallink_item'>
            <a href='https://www.linkedin.com/in/kuldeep-singh-4518b61b4/
            // ' className='sociallink_link'><>LinkedIn<span className="icon"><FaLinkedin size={25}/></span></></a>
        </li>
        <li className='sociallink_item'>
            <a href='https://github.com/projectkuldeep' className='sociallink_link'><>Github<span className="icon"><FaGithub size={25}/></span></></a>
        </li>
        <li className='sociallink_item'>
            <a href='https://leetcode.com/u/Kuldeep_singh1/' className='sociallink_link'><>Leetcode<span className="icon"><SiLeetcode  size={25}/></span></></a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sociallink
