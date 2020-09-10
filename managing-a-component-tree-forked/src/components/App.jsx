import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const addItem = () => {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, idx) => {
          return idx !== id
        }
      )
    });
  };
 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, idx) => (
            <ToDoItem
              key={idx}
              id={idx}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
