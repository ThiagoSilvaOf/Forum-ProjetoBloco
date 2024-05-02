import React, { useMemo } from "react";
import "../styles/card.css";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserMinus } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import Button from "./Button";

const Card = ({ publicacoes }) => {
  const userName = localStorage.getItem("userName");

  return (
    <section className="cardsContainer">
      {publicacoes.map((publicacao, index) => {
        const [likes, setLikes] = React.useState(publicacao.curtidas);
        const [hasLiked, setHasliked] = React.useState(false);
        const [comments, setComments] = React.useState(false);
        const [userComment, setUserComment] = React.useState("");

        console.log(userComment);

        const listaComentario = Object.values(publicacao.lista_comentarios);

        function handleClick() {
          if (!hasLiked) {
            setLikes(likes + 1);
            setHasliked(true);
          } else {
            setLikes(likes - 1);
            setHasliked(false);
          }
        }

        function handleComments() {
          setComments(!comments);
        }

        function handleSend(){
          console.log("Enviou");
        }

        return (
          <div key={index} className="cardContainer">
            <div className="cardUser">
              <FaUserAlt />
              <h1>{publicacao.username}</h1>
            </div>
            <div className="cardInfo">
              <p>{publicacao.data_publicacao}</p>
              <p>{publicacao.texto}</p>
            </div>

            <div className="cardFeedback noselect">
              <div className="cardLike" onClick={handleClick}>
                <AiOutlineLike className={hasLiked ? "liked" : ""} />
                <p>{likes} Curtidas</p>
              </div>

              <div className="cardComment" onClick={handleComments}>
                <GoComment className={comments ? "activeComments" : ""} />
                <p>{publicacao.comentarios} Comentários</p>
              </div>
            </div>

            <div className={comments ? "cardComments" : "cardNone"}>
              {listaComentario.map(({ comentario, usuario }) => (
                <p key={usuario}>
                  <span>
                    <FaUserMinus /> <strong>{usuario}:</strong>
                  </span>{" "}
                  {comentario}
                </p>
                
              
              ))}
              <div className="userComment">
                <input
                  type="text"
                  placeholder="Adicionar comentário..."
                  onChange={({target}) => setUserComment(target.value)}
                ></input>
                <Button action={<BiSend/>} onClick={handleSend} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Card;
