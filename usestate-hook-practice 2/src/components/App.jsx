import React, {useState} from "react";

function App() {

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  const update = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(update, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
