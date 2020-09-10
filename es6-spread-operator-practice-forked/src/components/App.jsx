import React, {useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleItems = () => {
    setItems ((prevItems) => {
      return [...prevItems, inputText ];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange}/>
        <button onClick={handleItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => <li>{item}</li>)};
        </ul>
      </div>
    </div>
  );
}

export default App;
