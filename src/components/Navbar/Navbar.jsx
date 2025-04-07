import React, { useRef, useState } from "react";
import "./Navbar.css";

import P_logo from "../../assets/P_logo.jpg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import day from "../../assets/day.png";
import night from "../../assets/night.png";
import menu_open_dark from "../../assets/menu_open_dark.svg"

function Navbar({theme,setTheme}) {
  const toggle_mode=()=>{
    theme==="dark"?setTheme("light"):setTheme("dark")
  }
  const [menu, setMenu] = useState("home");
  const menuref=useRef();
  const openMenu=()=>{
    menuref.current.style.right="0";
  }
  const closeMenu=()=>{
    menuref.current.style.right="-280px";
  }

  return (
    <div className="navbar">
     <img className="logos" src={P_logo} alt="logo" />
     <img src={theme==='dark'?menu_open:menu_open_dark} onClick={openMenu} alt="menu" className="nav-mob-open nav_img"/>
      <ul ref={menuref} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="menu" className="nav-mob-close nav_img"/>
        <li>
          <AnchorLink className="anchor_link" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>
          {menu === "home" ? <img src={underline} alt="home" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor_link" offset={50} href="#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink>
          {menu === "about" ? <img src={underline} alt="about" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor_link" offset={50} href="#skills"><p onClick={() => setMenu("skills")}>Skills</p></AnchorLink>
          {menu === "skills" ? <img src={underline} alt="skill" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor_link" offset={50} href="#projects"><p onClick={() => setMenu("projects")}>Projects</p></AnchorLink>
          {menu === "projects" ? <img src={underline} alt="project" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor_link" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>
          {menu === "contact" ? <img src={underline} alt="contact" /> : <></>}
        </li>
      </ul>
      <div className="nav-ch"> <img onClick={()=>{toggle_mode()}} src={theme==="dark"?day:night} alt="bg change"></img></div>
    </div>
  );
}

export default Navbar;
