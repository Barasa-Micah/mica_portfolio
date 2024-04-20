import React, { useRef } from "react";
import "./Contact.css";
import LinkedIn from "../../assets/Linkedin.png";
import Instagram from "../../assets/Insta.png";
import X from "../../assets/Twitter.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bk2ngos", "template_9nyrigo", form.current, {
        publicKey: "Y7EkqiNrEGOI6IYYaBFxL",
      })
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email sent !');
      }, (error) => {
        console.log(error.text)
      });
  }  
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a different group of
          companies. Here are the notable companies
        </p>
        <div className="clientImgs">
          <img src="" alt="" className="clientImg" />
          <img src="" alt="" className="clientImg" />
          <img src="" alt="" className="clientImg" />
          <img src="" alt="" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name"/>
          <input type="email" className="email" placeholder="Your Email" name="your_email"/>
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={LinkedIn} alt="Linkedin" className="link" />
            <img src={Instagram} alt="Instagram" className="link" />
            <img src={X} alt="X" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
