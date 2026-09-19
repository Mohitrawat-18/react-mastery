import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>React Mastery</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
