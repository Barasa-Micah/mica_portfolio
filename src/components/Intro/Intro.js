import React from 'react';
import './Intro.css';
import bg from '../../assets/profile1.jpg';

const Intro = () => {
  return (
    <section className='introSection'> 
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm <span className='introName'>Barasa</span> <br />Software Developer</span>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  );
}

export default Intro;
