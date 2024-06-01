import React, { useState } from "react";
import "../styles/register.css";
import Form from "../components/Form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";

const RegisterUser = () => {
  const { cadastrar } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(name);

  const handleCadastro = () => {
    if (!email | !password | !name) {
      setError("Preencha todos os campos");
      return;
    }

    const res = cadastrar(email, password);

    if (res) {
      setError(res);
      return;
    }
    toastConfig({ theme: "success" });
    toast("Usuário cadastrado com sucesso!");
    localStorage.setItem("userName", name);

    navigate("/login");
  };

  return (
    <div className="loginBox">
      <div>
        <img
          src="src\assets\Forum-Logo.png"
          alt="logo"
          title="Diálogos Diversos"
        />
      </div>

      <div className="loginForm">
        <div className="loginMessage">
          <p>Crie uma conta para acessar todas as funcionalidades do fórum.</p>
        </div>

        <Form
          value={name}
          label={"Nome"}
          type={"Text"}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />

        <Form
          value={email}
          label={"Email"}
          type={"Email"}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Form
          value={password}
          label={"Senha"}
          type={"Password"}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />

        <Button action={"Cadastre-se"} onClick={handleCadastro} />

        <p>{error}</p>

        <p>
          Já possui conta? <Link to={"/login"}>Faça Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterUser;
