import React from "react";
import Header from "./Header";
import Card from "../components/Card";
import UserPublication from "./UserPublication";
import Navigations from "./Navigations";

const Home = () => {
  const [publicacao, setPublicacao] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const baseUrl =
    "https://dialogos-diversos-default-rtdb.asia-southeast1.firebasedatabase.app";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/publicacoes.json`).then(async (resp) => {
      const respPublicao = await resp.json();
      const publicacoesConvertidas = Object.values(respPublicao);
      setPublicacao(publicacoesConvertidas);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <Header />
      <Navigations />
      <UserPublication />

      {isLoading ? (
        <img
          style={{ display: "block", margin: "0 auto", width: "80px" }}
          src="../src/assets/spinner.svg"
          alt="Carregando"
        />
      ) : (
        <Card publicacoes={publicacao} />
      )}
    </div>
  );
};

export default Home;
