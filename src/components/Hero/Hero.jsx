
import './Hero.css'
import profile from "../../assets/profile.png"
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className='hero'>
        <div className='hero2'>
        <h2>Hi,</h2>
        <h1><span>I’m Kuldeep Singh</span></h1>
        <p>Software Developer | Solution Engineer</p>
        <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor_link" offset={50} href="#contact">Connect here</AnchorLink></div>
        <div className="hero-resume border_set"><a href="https://drive.google.com/file/d/1Gct8DI65A4OefnDSiM6bjdSp5UFHfB6n/view?usp=drive_link"><span >My Resume</span></a></div>
        </div>
        </div>
        <img src={profile} alt='profile' className='img-profile'/>
    </div>
  )
}

export default Hero
