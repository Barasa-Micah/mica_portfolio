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
            <Link to="home" smooth={true} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link to="about" smooth={true} duration={500} className='desktopMenuListItem'>About</Link>
            <Link to="portfolio" smooth={true} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link to="clients" smooth={true} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={ContactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  );
};

export default Navbar;
