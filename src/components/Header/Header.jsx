import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h2>Ramesh Naik</h2>
          <h5 className="text-light">Fullstack Developer</h5>
          
          <CTA/>

          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a> 

        </div>
      </header>
    </div>
  )
}

export default Header
