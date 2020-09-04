import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleClick = () => {
   setHeading(name);
  };

  
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
