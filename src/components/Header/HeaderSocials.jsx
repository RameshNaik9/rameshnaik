import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/ramesh-lahori-a2799b200/" title='linkdein' target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RameshNaik9" target="_blank" title='github'><BsGithub/></a>
      </div>
    </div>
  )
}

export default HeaderSocials
