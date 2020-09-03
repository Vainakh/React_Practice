import React, {useState} from "react";

const App = () => {

  const [headingText, setHeadingText] = useState("Hello world!");
  const [isMousedOver, setMousedOver] = useState(false); 
  

  
 
  const handleClick = () => {
    setHeadingText("Submitted!");
  };

  const handleMousedOver = () => {
    setMousedOver(true);
  };

  const handleMousedOut = () => {
    setMousedOver(false);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} 
      style={{ backgroundColor: isMousedOver ? "black" : "white"}}
      onMouseOver={handleMousedOver}
      onMouseOut={handleMousedOut}
      >Submit</button>
    </div>
  );
}

export default App;
