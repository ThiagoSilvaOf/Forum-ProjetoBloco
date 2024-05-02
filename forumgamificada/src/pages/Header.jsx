import React from 'react'
import "../styles/header.css";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Header = () => {
  const { desconectar } = useAuth();
  const navigate = useNavigate();

  const userName = localStorage.getItem("userName");

  return (
    <header className='boxHeader'>
      <div className='logoHeader'>
        <img src="src\assets\logoHeader.svg" alt="logo" />
        <p>Fórum Master</p>
      </div>
      <div className='navHeader'>
        <p><FaUserAlt /> {userName}</p>
      <Button action={"Sair"} onClick={() => [desconectar(), navigate("/")]} />
      </div>
    </header>
  )
}

export default Header