import React from 'react';
import './Navbar.css';
import logo from '../../assets/M-logo.jpg';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img  src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to="Home" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active'  to="about" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>About</Link>
            <Link activeClass='active'  to="portfolio"spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active'  to="clients" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={ContactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  );
};

export default Navbar;
