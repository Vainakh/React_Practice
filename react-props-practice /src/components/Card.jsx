import React from 'react';
import Avatar from './Avatar'
import Detail from './Detail'


const Card = (props) => {
  console.log(props)

  return (<div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.image}/>
      </div>
      <div className="bottom">
      <Detail 
        phone={props.phone}
        email={props.email}
      />
      </div>
    </div>
  )
};



export default Card;