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
      <div>
        <button className="bg-white pl-1 pr-1 pb-1 pt-1 text-blue button-border2">
          Total Dimensions
        </button>
        <button className="bg-grey pl-1 pr-1 pb-1 pt-1 text-grey button-border2">
          Package Details
        </button>
      </div>
      <div className="flex row mt-5">
        <input
          className="pt-1 pb-1 pl-1 pr-1 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="From City or port"
        />

        <input
          className="ml-2 pt-1 pb-1 pl-1 pr-1 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="From City or port"
        />
      </div>
    </div>
  );
};

export default CargoDetails;
