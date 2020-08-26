import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  console.log(props);
  
  return <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
    <p>{props.rating}</p>
  </div>
}

ReactDOM.render(
  <div>
    <div>
      <h1>My Contacts</h1>
      <Card name="Beyonce" 
            img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            tel="+123 456 789"
            email="b@beyonce.com"
            />
      <input id="fName"/>
  
      <Card name="Chuck Norris" 
            img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
            tel="+987 654 321"
            email="jack@nowhere.com"
            rating="5 stars"
            />
      <input id="fName"/>
    </div>
  </div>,
  document.getElementById("root")
);


