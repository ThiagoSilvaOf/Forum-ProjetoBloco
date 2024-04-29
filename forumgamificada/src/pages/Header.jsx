import React from 'react'
import "../styles/header.css";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const Header = () => {
  const { desconectar } = useAuth();
  const navigate = useNavigate();

  return (
    <header className='boxHeader'>
      <div className='logoHeader'>
        <img src="src\assets\logoHeader.svg" alt="logo" />
        <p>Fórum Master</p>
      </div>
      <div className='navHeader'>
        <p>Teste</p>
        <p>Teste</p>
      <Button action={"Sair"} onClick={() => [desconectar(), navigate("/")]} />
      </div>
    </header>
  )
}

export default Header