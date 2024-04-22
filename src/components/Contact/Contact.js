import React from "react";
import "./Contact.css";
import LinkedIn from "../../assets/Linkedin.png";
import X from "../../assets/Twitter.png";
import Insta from "../../assets/Insta.png";
import Github from "../../assets/git.png";

const Contact = () => {
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
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="name" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.linkedin.com/in/mica-barasa">
              <img src={LinkedIn} className="link" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Barasa-Micah">
              <img src={Github} className="link" alt="Github" />
            </a>
            <a href="https://x.com/BarasaMicah5?t=2cfhuXIWPkRDuet8iS0EEg&s=09">
              <img src={X} className="link" alt="X" />
            </a>
            <a href="https://www.instagram.com/mica.codes?igsh=NXVmdzVkbzNkamJ6">
              <img src={Insta} className="link" alt="Insta" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
