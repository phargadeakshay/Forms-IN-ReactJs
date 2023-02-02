
import React, { useState } from "react";
import Form2 from "./Form2";
import PrintData from "./PrintData"
const UseCallBackFunc = () => {
    const [FormdataInapp, setFormdataInapp] = useState([]);
    const storedata = (data1) => {
      setFormdataInapp(data1);
      console.log(data1, "all data", FormdataInapp);
    };
  return (
    <div className="grid grid-cols-2">
    <Form2 reciveFormData={storedata} />
    <div className=" flex h-screen bg-red-400 justify-center overflow-scroll">
      <PrintData sendforprint={FormdataInapp} />
    </div>
  </div>
  )
}

export default UseCallBackFunc