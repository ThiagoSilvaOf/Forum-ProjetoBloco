import React from "react";
import Header from "./Header";
import Card from "../components/Card";


const Home = () => {
 

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
      <Header />
      <Card publicacoes={publicacao} />
    </div>
  );
};

export default Home;
