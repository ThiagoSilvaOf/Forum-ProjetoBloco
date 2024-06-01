import React from 'react'
import {NavLink } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { MdLocalPostOffice } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import "../styles/navigations.css";


const Navigations = () => {
  return (
    <nav className='navContainer'>
      <NavLink to="/home"> <IoHome /> Home</NavLink>
      <NavLink to="/nada"> <MdLocalPostOffice /> Meus Posts</NavLink>
      <NavLink to="/scoreUser"> <MdWorkspacePremium /> Pontuação</NavLink>
    </nav>
  )
}

export default Navigations