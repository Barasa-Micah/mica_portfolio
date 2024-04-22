import React from 'react';
import './Intro.css';
import bg from '../../assets/profile2.jpg';
import resume from '../../assets/Micah-Barasa.pdf'

const Intro = () => {
  const handleDownloadResume = () => {
    const resumePDF = require('../../assets/Micah-Barasa.pdf');
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = {resume}; 
    link.click();
  };

  return (
    <section id='intro'> 
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introName'>Barasa</span> <br /> A Software Developer</span>
        <p className='introPara'>Explore a world where code creates creativity and <br/> dreams are just a line of code away, with me.</p>
        <button className='btn' onClick={handleDownloadResume}>View Resume</button>
      </div>
      <img src={bg} alt='profile' className='bg' />
    </section>
  );
}

export default Intro;
