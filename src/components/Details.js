import React from "react";

const Details = () => {
  return (
    <div className="flex column ml-3 mr-3 pb-3 mt-3">
      <div className="mt-3 mb-2">
        <i class="material-icons">error_outline</i>
      </div>

      <div className="flex row">
        <div className="flex row">
          <button className="bg-white pt-1 pb-1 pl-1 pr-1 button-border2">
            Import
          </button>
          <button className="bg-white pt-1 pb-1 pl-1 pr-1 button-border2">
            Export
          </button>
        </div>

        <input
          className="ml-2 pt-1 pb-1 pl-1 pr-1 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="From City or port"
        />
        <br />

        <input
          className="ml-2 pt-1 pb-1 pl-1 pr-1 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="From City or port"
        />
        <br />
      </div>
      <div className="flex row mt-3">
        <input
          className="pt-1 pb-1 pl-1 pr-1 ml-2 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="Ready Date"
        />
        <br />
        <input
          className="pt-1 pb-1 pl-1 pr-1 ml-2 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="Incoterms"
        />
        <br />
        <input
          className="pt-1 pb-1 pl-1 pr-1 ml-2 input-bg input-border"
          type="text"
          id="fname"
          name="fname"
          value="Total Cargo Value"
        />
        <br />
      </div>
    </div>
  );
};

export default Details;
