import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import toast, { toastConfig } from "react-simple-toasts";
import Button from "../components/Button";

import "../styles/userPublication.css";
import Card from "../components/Card";

const UserPublication = () => {
  const userName = localStorage.getItem("userName");
  const [userPost, setUserPost] = React.useState("");
  const [publicacao, setPublicacao] = React.useState([]);

  const inputRef = React.useRef();

  let data = new Date();
  let dia = ("0" + data.getDate()).slice(-2);
  let mes = ("0" + (data.getMonth() + 1)).slice(-2);
  let ano = data.getFullYear();
  let horas = ("0" + data.getHours()).slice(-2);
  let minutos = ("0" + data.getMinutes()).slice(-2);

  let dataFormatada = `${dia}/${mes}/${ano} ás ${horas}:${minutos}`;

  function handleClick() {
    if (userPost) {
      const novaPublicacao = {
        comentarios: 1,
        curtidas: 0,
        data_publicacao: `${dataFormatada}`,
        texto: `${userPost}`,
        username: `${userName}`,
        lista_comentarios: {
          comentario1: {
            comentario: "Concordo com você.",
            usuario: "dan789",
          },
        },
      };

      setPublicacao((prevPublicacoes) => [...prevPublicacoes, novaPublicacao]);
      setUserPost("");
      inputRef.current.value = "";
      toastConfig({ theme: "success" });
      toast("Publicação enviada com sucesso!");
    }
  }

  React.useEffect(() => {
    const convertPublication = JSON.stringify(publicacao);
    localStorage.setItem("userPublication", convertPublication);
  }, [publicacao]);

  return (
    <section className="containerUserPublication">
      <div className="profileUserPublication">
        <FaUserAlt />
        <h1>{userName}</h1>
      </div>
      <div className="sendUserPost">
        <input
          ref={inputRef}
          type="text"
          placeholder={`No que você está pensando hoje, ${userName}?`}
          onChange={({ target }) => setUserPost(target.value)}
        ></input>
        <Button action={<BiSend />} onClick={handleClick} />
      </div>
      {publicacao && <Card publicacoes={publicacao} />}
    </section>
  );
};

export default UserPublication;
