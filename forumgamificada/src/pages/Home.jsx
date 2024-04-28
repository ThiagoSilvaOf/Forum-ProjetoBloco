import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const { desconectar } = useAuth();
  const navigate = useNavigate();

  const [publicacao, setPublicacao] = React.useState(null);

  const baseUrl =
    "https://dialogos-diversos-default-rtdb.asia-southeast1.firebasedatabase.app";

  React.useEffect(() => {
    fetch(`${baseUrl}/publicacoes.json`)
      .then(async (resp) => {
      const respPublicao = await resp.json();
      const publicacoesConvertidas = Object.values(respPublicao);
      console.log(publicacoesConvertidas);
      setPublicacao(publicacoesConvertidas);
    });
  }, []);
  
  return (
    <div>
      <h2>HOME</h2>
      <Button action={"Sair"} onClick={() => [desconectar(), navigate("/")]} />
    </div>
  );
};

export default Home;
