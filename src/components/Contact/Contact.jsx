import React, { useState } from 'react'
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg"


function Contact() {
    const [inputValue,setInputvalue]=useState()

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a8492824-dd00-4c1b-8fcb-e68b9f16c813");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
        
        if (res.success) {
          alert(res.message);
          
        }
        setInputvalue('');
      };

  return (
    <div id="contact" className='contact'>
        <div className="contact_title">
            <h1>Contect Me</h1>
            <img src={theme_pattern} alt="contact img"/>
        </div>
        <div className="contact_section">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about your an idea or trying to make any idea into reality </p>
                <div className="contact_details">
                    <div className="contact_detail">
                        <img src={mail_icon} alt='mail_icon'/><p>kuldeepsingh701103@gmail.com</p>
                    </div>
                    <div className="contact_detail">
                        <img src={call_icon} alt='call_icon'/><p>+91 7011037697</p>
                    </div>
                    <div className="contact_detail">
                        <img src={location_icon} alt='location_icon'/><p>Gokulpuri Delhi-93, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact_right">
                <label htmlFor=''>Your Name</label>
                <input name='name' type='text'  value={inputValue} placeholder='Enter Your name'/>
                <label htmlFor=''>Your Email</label>
                <input name='email' type='email'  value={inputValue} placeholder='Enter Your email'/>
                <label htmlFor=''>Your Message</label>
                <textarea name='message' rows="8"  value={inputValue} placeholder='Enter Your message here'/>
                <button type='submit' className='contact_sub'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;
