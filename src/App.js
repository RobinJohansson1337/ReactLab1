import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [text, setText] = useState("test")
  console.log("start", text);
  
  const handleSubmit = () => {
    setText();
  }

  React.useEffect(() => {
    console.log("useEffect", text)
  }, [text]);

  return (
    <div className="App">
      <Labb1 name="Teachers" />
      <button onClick={EventAlert}>Click me</button>
      <FormHeader />
      
      <form onSubmit={handleSubmit}>
      <label>
        Text
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );

  function FormHeader() {
    return <h1>Formfield</h1>
  }

  function EventAlert() {
    alert("Just fooling around with some basic react");
  }

  function Labb1(props) {
    return <h1>Hello, {props.name}</h1>;
  }
}