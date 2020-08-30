import React from 'react';


const Confirm = (props) => {
  return (props.userIsRegistered) ? null :  <input type="password" placeholder="Confirm Password" />
}



export default Confirm; 