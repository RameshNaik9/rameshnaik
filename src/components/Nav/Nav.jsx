import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {SlRefresh} from 'react-icons/sl'




const Nav = () => {
  const[activeNav,setActiveNav]=useState("#")
  return (
    <div>
      <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : '' }><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : '' } ><AiOutlineUser/></a>
        <a href="#experiences" onClick={()=> setActiveNav('#experiences')} className={activeNav==='#experiences' ? 'active' : '' } ><BiBookBookmark/></a>
        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#services' ? 'active' : '' } ><RiServiceFill/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : '' } ><BiMessageSquareDetail/></a>
        <a href="#" onClick={() => window.location.reload(false)} ><SlRefresh/></a>
      </nav>
    </div>
  )
}

export default Nav
