import React, { useMemo } from "react";
import "../styles/card.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { FaUserMinus } from "react-icons/fa";
import { GoComment } from "react-icons/go";

const Card = ({ publicacoes }) => {
  return (
    <section className="cardsContainer">
      {publicacoes.map((publicacao, index) => {
        const [likes, setLikes] = React.useState(publicacao.curtidas);
        const [hasLiked, setHasliked] = React.useState(false);
        const [comments, setComments] =  React.useState(false);

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

        function handleComments(){
          setComments(!comments)
        }

        return (
          <div key={index} className="cardContainer">
            <div className="cardUser">
              <FaRegUser />
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
                <p>{publicacao.comentarios} Comentarios</p>
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
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Card;
