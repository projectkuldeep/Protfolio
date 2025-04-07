import React from 'react'
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.png";


function About() {
  return (
    <div id="about" className='about'>
        <div className="about_title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="about img"/>
        </div>
        <div className="about_section">
            <div className="about_left">
                <img src={profile} alt="profile" />
            </div>
            <div className="about_right">
                <div className='about_para'>
                <p>I am a passionate Full-Stack Developer and Solution Engineer with hands-on experience in building and optimizing scalable web applications. Currently working at <strong>LambdaTest</strong>, a leading testing platform, I specialize in debugging code, enhancing automation processes, and implementing best practices using <strong>Playwright, Cypress, CI/CD, React.js, Redux, and the MERN stack</strong>.</p> <p>With expertise in <strong>front-end technologies</strong> like <strong>React.js, HTML, CSS</strong>, and strong proficiency in <strong>back-end frameworks</strong> such as <strong>Node.js, Express.js, Java, and MongoDB</strong>, I build dynamic, high-performance applications that focus on user experience. My development approach emphasizes scalability, efficiency, and performance.</p> <p>Driven by innovation and problem-solving, I continually explore new technologies to improve software solutions and automate workflows effectively.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
