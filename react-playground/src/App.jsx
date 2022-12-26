import "./App.css";
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  
  function handleChange() {
    setCounter(previousCounter => previousCounter + 1);
    setCounter(previousCounter => previousCounter + 1);
    //counter will be increased twice
  }
  

  return (
    <div className="App">
      <h1>Simple counter</h1>
      <div className="card">
        <button onClick={() => setCounter(counter + 1)}>
          count is {counter}
        </button>
      </div>
    </div>
  );
}
export default App;
