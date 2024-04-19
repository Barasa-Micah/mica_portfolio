import React from 'react';
import './Intro.css';
import bg from '../../assets/profile2.jpg';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'> 
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introName'>Barasa</span> <br /> A Software Developer</span>
        <p className='introPara'>Explore a world where code creates creativity and <br/> dreams are just a line of code away, with me.</p>
        <Link><button className='btn'>Hire Me</button></Link>
    </div>
    <img src={bg} alt='profile' className='bg' />
</section>

  );
}

export default Intro;