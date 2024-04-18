import React from 'react'
import './Navbar.css'
import logo from '../../assets/M-logo.jpg'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img  src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>

        </div>
        <button className='desktopMenuBtn'>
            <img src='' alt='' className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar
