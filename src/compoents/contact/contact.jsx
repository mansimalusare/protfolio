import "./contact.css"
import phone from "../../image/Phone.png"
import Email from "../../image/email.png"
import Address from "../../image/1076323.png"
import { useRef } from "react"
import emailjs from 'emailjs-com'
import { useState } from "react"
import React, { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () =>{
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode= theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_vax52gq', 'template_i5t08of', formRef.current, 'juFGZQVtWCqSkTx81')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div className="c">  
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact me </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" className="c-icon" />
                        +91 7249769142
            </div>
            <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        mansimalusare2224@gmail.com
                        </div>
                        <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Dhankwadi, Balajinagar,Pune
                        </div></div>
            </div>
            <div className="c-right">
                <div className="c-desc">
                    <form ref={formRef }onSubmit={handleSubmit}>
                      
                        <input style={{backgroundColor:darkMode && "black"}} type= "text" placeholder="Name" name="user_name"></input>
                        <input style={{backgroundColor:darkMode && "black"}} type= "text" placeholder="Email" name="user_email"></input>
                        <textarea style={{backgroundColor : darkMode && "black"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
                                    

                
                
                </div>
        </div>
        </div>
    )
}

export default Contact;