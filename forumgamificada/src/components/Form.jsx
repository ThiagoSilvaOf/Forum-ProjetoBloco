import React from "react";

const Form = (props) => {
  return (
    <>
      {props.nome ? (
        <>
          <label htmlFor="Nome">Nome:</label>
          <input type="text" name="Nome" id="Nome" onChange={props.onChange} />
        </>
      ) : (
        ""
      )}

      <label htmlFor={props.label}>{props.label}:</label>
      <input
        type={props.type}
        name={props.label}
        id={props.label}
        onChange={props.onChange}
      />


      {props.termos ? (
        <div className="termosCheckbox">
          <input type="checkbox" id="termos" name="termos" />
          <label htmlFor="termos">
            Eu li e concordo com os termos e condições
          </label>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
