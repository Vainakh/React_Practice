import React, {useState} from 'react';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headingFText, setFHeading] = useState("");
  const [headingLText, setLHeading] = useState("");


  const handleFChange = (event) => { 
    setFirstName(event.target.value);
  };

  const handleLChange = (event) => {
    setLastName(event.target.value);
  }


  const handleClick = (event) => {
    setFHeading(firstName);
    setLHeading(lastName);
    event.preventDefault();
  };


  return (
    <div className="container">
      <h1>Hello {headingFText} {" "} {headingLText}</h1>
      <form>
        <input 
        onChange={handleFChange} 
        name="fName" 
        placeholder="First Name" 
        value={firstName}
        />
        <input 
        onChange={handleLChange}
        name="lName" 
        placeholder="Last Name" 
        value={lastName}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
