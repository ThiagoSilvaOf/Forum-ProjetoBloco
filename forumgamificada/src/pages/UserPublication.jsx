import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import Form from "../components/Form";
import Button from "../components/Button";

import "../styles/userPublication.css";

const UserPublication = () => {
  const userName = localStorage.getItem("userName");
  const [userPost, setUserPost] = React.useState("");
  console.log(userPost);

  return (
    <section className="containerUserPublication">
      <div className="profileUserPublication">
        <FaUserAlt />
        <h1>{userName}</h1>
      </div>
      <div className="sendUserPost">
        <input
          type="text"
          placeholder={`No que você está pensando hoje, ${userName}?`}
          onChange={({ target }) => setUserPost(target.value)}
        ></input>
        <Button action={<BiSend />} />
      </div>
    </section>
  );
};

export default UserPublication;
