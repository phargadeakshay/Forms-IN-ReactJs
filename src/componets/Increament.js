import React, { useState, useEffect } from "react";
import "../style/Increaments.module.css";
export default function Increament() {
  const [Count, setCount] = useState(0);
  const addOne = () => {
    console.log("addone");
    setCount(Count + 1);
  };
  const minusOnde = () => {
    console.log("minusOnde");
    setCount(Count - 1);
  };
  const Reset = () => {
    console.log("Reset");
    setCount(0);
  };
  useEffect(() => {
    document.title = Count;
  }, [Count]); //use effect call onece after render the component. put in array if perticular
  return (
    <div className="main">
      <div className="body1">
        <h1>Hello World</h1>
        <h2>Count:{Count}</h2>
        <div className="btn">
          <button onClick={addOne}>PlusOne</button>
          <button onClick={minusOnde}>MinusOne</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
