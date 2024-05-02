import React from "react";

const Form = (props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}:</label>
      <input
        type={props.type}
        name={props.label}
        id={props.label}
        onChange={props.onChange}
      />
    </>
  );
};

export default Form;
