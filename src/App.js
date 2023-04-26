import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAdvice } from "./api";

function App() {
  const [numEntries, setNumEntries] = useState(5);
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetchAdvice(5).then((data) => setAdvice(data));
  }, []);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setNumEntries(value);
  };

  return (
    <div className="App">
      {advice.length > 0 ? (
        advice.map((adviceItem) => (
          <div key={adviceItem.id}>
            <p>Advice no.{adviceItem.id}</p>
            <p>{adviceItem.advice}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
