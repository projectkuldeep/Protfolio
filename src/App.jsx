import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Skill from "./components/Skills/Skills";
import { useState,useEffect } from "react";
import Sociallink from "./components/SocialLinks/Sociallink";


function App() {
  const curr_theme=localStorage.getItem("curr_theme");
  const [theme,setTheme]=useState(curr_theme?curr_theme:"dark");
  useEffect(() => {
    localStorage.setItem("curr_theme",theme);
    document.documentElement.setAttribute("theme", theme);
    
  }, [theme]);
  return (
    <div className={`mode_ch ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Sociallink/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
