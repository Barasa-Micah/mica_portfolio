import React from 'react'
import './skills.css'
import frontend from '../../assets/frontend.png';
import backend from '../../assets/icons8-backend-development-64.png'
import mpesa from '../../assets/icons8-mpesa-48.png'
const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Expertise</span>
        <span className='skillDesc'>I'm a highly skilled software developer with a very strong background in HTML, CSS, JavaScript, Reactjs, PHP, Python, SQL, Flask and Django. My expertise lies in creating dynamic and responsive web applications that deliver exceptional user experiences</span>
        <div  className='skillBars'>
            <div className='skillBar'>
                <img src={frontend} alt='frontdevelopment' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Frontend Development</h2>
                    <p>I specialize in creating visually appealing and user friendly interfaces using HTML, CSS, JavaScript. <br/> I have expertise in modern frontend frameworks like React, enabling to build dynamic and responsive web applications.</p>
                </div>
            </div>
        </div>
        <div  className='skillBars'>
            <div className='skillBar'>
                <img src={backend} alt='backenddevelopment' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development</h2>
                    <p>I specialize in building robust and scalable systems using Python, SQL, Flask and Django. <br/> My focus is on creating efficient and secure solutions that meet the needs of modern web applications</p>
                </div>
            </div>
        </div>
        <div  className='skillBars'>
            <div className='skillBar'>
                <img src={mpesa} alt='mpesa integration' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Payment Integration</h2>
                    <p>I specialize in integrating Mpesa payments into web and mobile applications, leveraging the Mpesa API to facilitate seamless and secure transactions. <br/>My expertise in backend development allows me to implement Mpesa payment functionality effectively, ensuring a smooth experience</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills
