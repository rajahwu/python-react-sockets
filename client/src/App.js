import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState({})

  useEffect(() => {
    fetch("/api")
    .then(res => res.json())
    .then(data => setText(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <h1>{text.text}</h1>
      </header>
    </div>
  );
}

export default App;
