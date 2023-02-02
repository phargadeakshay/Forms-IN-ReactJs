import React, { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const cleanedValue = event.target.value.replace(/\s{2,}/g, " ");
    setInputValue(cleanedValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default InputField;
