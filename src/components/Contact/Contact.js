import React from "react";
import "./Contact.css";
import LinkedInIcon from "../../assets/Linkedin.png";
import InstagramIcon from "../../assets/Insta.png";
import TwitterIcon from "../../assets/Twitter.png";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/mica-barasa", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/mica.codes?igsh=NXVmdzVkbzNkamJ6", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/BarasaMicah5?t=2cfhuXIWPkRDuet8iS0EEg&s=09", "_blank");
  };

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
          <input type="email" className="email" placeholder="Your Email" />
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
            <img
              src={LinkedInIcon}
              alt="Linkedin"
              className="link"
              onClick={handleLinkedInClick}
            />
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="link"
              onClick={handleInstagramClick}
            />
            <img
              src={TwitterIcon}
              alt="Twitter"
              className="link"
              onClick={handleTwitterClick}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
