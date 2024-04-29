import React from "react";
import "../styles/card.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";

const Card = ({ publicacoes }) => {
  return (
    <section className="cardsContainer">
      {publicacoes &&
        publicacoes.map((publicao, index) => {
          const [likes, setLikes] = React.useState(publicao.curtidas);
          const [hasLiked, setHasliked] = React.useState(false);

          function handleClick() {
            if (!hasLiked) {
              setLikes(likes + 1);
              setHasliked(true);
            } else {
              setLikes(likes - 1);
              setHasliked(false);
            }
          }

          return (
            <div key={index} className="cardContainer">
              <div className="cardUser">
                <FaRegUser />
                <h1>{publicao.username}</h1>
              </div>
              <div className="cardInfo">
                <p>{publicao.data_publicacao}</p>
                <p>{publicao.texto}</p>
              </div>

              <div className="cardFeedback">
                <div className="cardLike">
                  <AiOutlineLike className={hasLiked ? "liked" : ""} />
                  <p onClick={handleClick}>{likes} Curtidas</p>
                </div>

                <div className="cardComment">
                  <GoComment />
                  <p>{publicao.comentarios} Comentarios</p>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Card;
