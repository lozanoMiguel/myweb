import React, { useRef, useState } from "react";
import '../styles/ContactBlock.css'
import emailjs from '@emailjs/browser';
import Modal from './Modal';

function ContactBlock(){

  const [isOpen, setIsOpen] = useState(false);
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      setName("");
      setEmail("");
      setMessage("");
    emailjs.sendForm('service_g5z9kgk', 'template_t8jsknk', form.current, 'ScsUZ2kpLPhqAF9Cq')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return <div className="contactBlock" id='contact'>
          <h2>contact</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_section">
              <label htmlFor="#">Name</label>
              <input type="text" name="user_name" value={user_name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form_section">
              <label htmlFor="#">Email</label>
              <input required type="email" name="user_email" value={user_email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form_section">
              <label htmlFor="#">Message</label>
              <textarea required name="message" value={message} onChange={(e)=>setMessage(e.target.value)} id="" cols="21" rows="10"></textarea>
            </div>
            <div className="form_section_button">
              <button className="sendBtn" onClick={()=> setIsOpen(true)} type="submit" value="Send">Send</button>
              <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
                Mensaje enviado
              </Modal>
            </div>
            
          </form>
         </div>
}

export default ContactBlock;