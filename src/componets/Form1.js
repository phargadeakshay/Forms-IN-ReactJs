import React, { useState } from "react";
import "../style/FormStyle.module.css";

export default function Form1() {
  const [name, setName] = useState("");
  const [myname, setMyname] = useState("");
  const inputEvent = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const fullData = () => {
    setMyname(name);
  };
  return (
    <div>
      <div className="formm">
        <h1>{myname}</h1>
        <input onChange={inputEvent} value={name} className="in1" type="text" />
        <button className="btn" onClick={fullData}>
          Submit
        </button>
      </div>
    </div>
  );
}
