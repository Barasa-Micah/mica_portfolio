import React from 'react'
import './Navbar.css'
import logo from '../../assets/M-logo.jpg'
import {link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img  src={logo} alt='logo' className='logo' width='130px'/>
        <div className='desktopMenu'>
            <link className='desktopMenuListItem'></link>
            <link className='desktopMenuListItem'></link>
            <link className='desktopMenuListItem'></link>
            <link className='desktopMenuListItem'></link>
        </div>
        <button className='desktopMenuBtn'>
            <img src='' alt='' className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar
