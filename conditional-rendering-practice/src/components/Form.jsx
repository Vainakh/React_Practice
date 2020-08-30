import React from "react";
import Confirm from './Confirm';

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Confirm 
        userIsRegistered = {props.userIsRegistered}
      />
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
