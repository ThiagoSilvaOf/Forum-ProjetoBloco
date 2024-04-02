import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const { desconectar } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h2>HOME</h2>
      <Button action={"Sair"} onClick={() => [desconectar(), navigate("/")]} />
    </div>
  );
};

export default Home;
