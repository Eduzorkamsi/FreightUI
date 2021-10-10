import React from "react";

const Details = () => {
  return (
    <div className="flex column ml-3 mr-3 pb-3 mt-3">
      <h5>Details</h5>
      <div className="flex row">
        <div className="flex row">
          <button>Import</button>
          <button>Export</button>
        </div>
        <input
          className="ml-2"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />
        <br />
        <input
          className="ml-2"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />
        <br />
      </div>
      <div className="flex row mt-3">
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <input
          className="ml-2"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />
        <br />
        <input
          className="ml-2"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />
        <br />
      </div>
    </div>
  );
};

export default Details;
