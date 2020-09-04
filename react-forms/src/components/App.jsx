import React from "react";

function App() {


  const handleChange = () => {
    console.log("Changed!");
  };
  
  return (
    <div className="container">
      <h1>Hello </h1>
      <input onChange={} type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
