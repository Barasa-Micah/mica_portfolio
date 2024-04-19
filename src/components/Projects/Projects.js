import React from 'react'
import './Projects.css'
import project1 from '../../assets/Project1.png';
import pro from '../../assets/pro.jpg'
import project4 from '../../assets/project4.png'


const Projects = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>In my portfolio, each project embodies my sense of ownership and commitment to excellence. From inception to deployment, I've taken full responsibility for their success, ensuring every aspect aligns with the  project's goals</span>
        <div className='worksImgs'>
            <img src={project1} alt='' className='worksImg'/>
            <img src='' alt='' className='worksImg'/>
            <img src={pro} alt='' className='worksImg'/>
            <img src={project4} alt='' className='worksImg'/>
            <img src='' alt='' className='worksImg'/>
            <img src='' alt='' className='worksImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Projects
 