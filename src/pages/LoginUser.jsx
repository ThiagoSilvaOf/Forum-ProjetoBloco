import "../styles/register.css";
import Form from "../components/Form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";

const LoginUser = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = login(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="loginBox">
      <div>
        <img src="src\assets\Forum-Logo.png" alt="logo" title="Diálogos Diversos" />
      </div>

      <div className="loginForm">
        <div className="loginMessage">
          <p>Faça login para acessar todas as funcionalidades do fórum.</p>
        </div>

        <Form
          value={email}
          label={"Email"}
          type={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form
          value={password}
          label={"Senha"}
          type={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button action={"Entrar"} onClick={handleLogin} />

        <p>{error}</p>

        <p>
          Não tem conta? <Link to={"/register"}>Registre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
