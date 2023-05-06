import React from 'react'
import './About.css';
import ME from '../../assets/me-about.jpg'
import {MdOutlineSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
               <MdOutlineSchool className='about__icon'/>
              <h5>Education</h5>
              <small>MORE</small>
            </article>

            <article className='about__card'>
               <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <small>MORE</small>
            </article>

            <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>MORE</small>
            </article>

          </div>
          <p className='about__intro'>
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
