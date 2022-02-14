import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Pavan");

  const increment = () => {
    setCounter(counter + 1);
  };

  let onChane = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="box">
      <h2>Use State</h2>
      {counter}
      <button onClick={increment}>Increment</button>
      <br />
      <input placeholder="enter something.." onChange={onChane} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
