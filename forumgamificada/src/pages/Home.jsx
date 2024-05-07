import React from "react";
import Header from "./Header";
import Card from "../components/Card";
import UserPublication from "./UserPublication";


const Home = () => {
 

  const [publicacao, setPublicacao] = React.useState([]);

  const baseUrl =
    "https://dialogos-diversos-default-rtdb.asia-southeast1.firebasedatabase.app";

  React.useEffect(() => {
    fetch(`${baseUrl}/publicacoes.json`)
      .then(async (resp) => {
      const respPublicao = await resp.json();
      const publicacoesConvertidas = Object.values(respPublicao);
      setPublicacao(publicacoesConvertidas);
    });
  }, []);
  
  return (
    <div>
      <Header />
      <UserPublication />
      <Card publicacoes={publicacao} />
    </div>
  );
};

export default Home;
