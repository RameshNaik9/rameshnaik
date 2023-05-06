import React from 'react'
import './Footer.css'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {FaSnapchatGhost} from 'react-icons/fa'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from 'react-icons/bs'


const getCurrentYear = () => {
  return new Date().getFullYear();
};


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAMESH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008861705507" target='_blank' title='facebook'><GrFacebook/></a>
        <a href="https://www.instagram.com/the__believer______/" target='_blank' title='instagram'><GrInstagram/></a>
        <a href="https://twitter.com/RamesH78926259?t=LgQwP8AFE1PRKHy7CpLwOg&s=09/" target='_blank' title='twitter'><BsTwitter/></a>
        <a href="https://www.snapchat.com/add/rameshlahori?share_id=QJck8man8FM&locale=en-IN/" target='_blank' title='snapchat'><FaSnapchatGhost/></a>
        <a href="https://www.linkedin.com/in/ramesh-lahori-a2799b200/" target='_blank' title='linkdin'><BsLinkedin/></a>
        <a href="https://github.com/RameshNaik9" target='_blank' title='github'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ramesh Naik . All Rights Reserved  {getCurrentYear()}</small>
      </div>

    </footer>
  )
}

export default Footer
