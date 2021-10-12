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
          <h5>Dangerous Cargo (ex. Chemicals, Battery)</h5>
        </div>
      </div>
      <div className="mt-1 mb-1">
        <button className="bg-white pl-1 pr-1 pb-1 pt-1 text-blue button-border2">
          Total Dimensions
        </button>
        <button className="bg-grey pl-1 pr-1 pb-1 pt-1 text-grey button-border2">
          Package Details
        </button>
      </div>
      <div className="flex row mt-5 mb-5">
        <div className="flex column">
          <label className="total">Total Volume</label>

          <input
            className=" pt-1 pb-1 pl-1 bg-white pr-1 input-border val"
            type="text"
            id="fname"
            name="fname"
            placeholder="cbm"
          />
        </div>
        <div className="ml-2 flex column relative">
          <label className="total">Total Weight</label>
          <input
            className=" pt-1 pb-1 pl-1 pr-1 bg-white input-border val absolute"
            type="text"
            id="fname"
            name="fname"
            placeholder="kg"
          />
        </div>
      </div>
    </div>
  );
};

export default CargoDetails;
