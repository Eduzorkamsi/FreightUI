import React from "react";

const CargoDetails = () => {
  return (
    <div className="flex column ml-3 mr-3 pb-3 mt-3">
      <div className="flex row space">
        <h5>Cargo Details</h5>
        <div className="flex row align-center">
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
          <h5 className="ml-1">Dangerous Cargo (ex. Chemicals, Battery)</h5>
        </div>
      </div>
      <div className="flex row"></div>
      <div className="flex row"></div>
    </div>
  );
};

export default CargoDetails;
