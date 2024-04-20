import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/M-logo.jpg';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png'
import menu from  '../../assets/stack_14024626.png'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img  src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active'  to="skills" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active'  to="works"spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active'  to="clients" spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }}>
            <img src={ContactImg} alt='' className='desktopMenuImg'/>Contact Me</button>

            <img  src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active'  to="skills" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active'  to="works"spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active'  to="clients" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active'  to="contact" spy={true} smooth={true} offset={-100} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;
