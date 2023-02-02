import React, { useState } from "react";

const districts = {
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nashik",
    "Thane",
    "Aurangabad",
  ],
};

const subDistricts = {
  Mumbai: [
    "Andheri",
    "Borivali",
    "Dadar",
    "Kurla",
    "Malad",
  ],
  Pune: [
    "Hadapsar",
    "Kharadi",
    "Viman Nagar",
    "Wanowrie",
    "Yerwada",
  ],
};

function DropDownList() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {Object.keys(districts).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">Select District</option>
          {districts[selectedState].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      )}

      {selectedDistrict && (
        <select>
          <option value="">Select Sub-District</option>
          {subDistricts[selectedDistrict].map((subDistrict) => (
            <option key={subDistrict} value={subDistrict}>
              {subDistrict}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default DropDownList;
