import "./App.css";
import { useState } from "react";

function App() {
  const [array, setArray] = useState([10, 20, 30, 40, 50, 2]);

  const Increment = (index) => {
    console.log("Increment");

    setArray(array.map((items, ind) => (ind === index ? items+1 : items)));
  };

  const Decrement = (index) => {
    console.log("Decrement");
  

    setArray(array.map((items, ind) => (ind === index ? items-1 : items)));
  };

  return (
    <div className="App">
      {
        <ul>
          {array.map((i, index) => (
            <li key={i} style={{ listStyleType: "none" }}>
              <button onClick={() => Increment(index)}>+</button>
              {i} <button onClick={()=>Decrement(index)}>-</button>
            </li>
          ))}
        </ul>
      }

      <h1>ADD One by one</h1>
    </div>
  );
}

export default App;
