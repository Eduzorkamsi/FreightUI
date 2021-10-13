import React from "react";

const Details = () => {
  return (
    <div className="flex column ml-3 mr-3 pb-3 mt-3">
      <div className="mt-3 mb-2">
        <i class="material-icons">error_outline</i>
      </div>

      <div className="flex row">
        <div className="flex row ">
          <button className="bg-white pt-1 pb-1 pl-1 pr-1 button-border2">
            Import
          </button>
          <button className="bg-white pt-1 pb-1 pl-1 pr-1 button-border2">
            Export
          </button>
        </div>
        <div className="flex row">
          <div className="ml-2 mr-2">
            <i
              class="material-icons absolute ml-2 mt-1"
              style={{ fontSize: "16px" }}
            >
              location_on
            </i>
            <input
              className="ml-1 pl-3 w-full mr-5 pt-1 pb-1 pl-1 pr-1 input-bg input-border relative"
              type="text"
              id="fname"
              name="fname"
              value="From City or port"
            />
          </div>

          <div className="ml-5">
            <i
              class="material-icons absolute ml-2 mt-1"
              style={{ fontSize: "16px" }}
            >
              location_on
            </i>
            <input
              className="ml-1 pl-3 w-full mr-5 pt-1 pb-1  pr-1 input-bg input-border relative"
              type="text"
              id="fname"
              name="fname"
              value="From City or port"
            />
          </div>
        </div>
      </div>
      <div className="flex row mt-3">
        <div className="mr-5">
          <i
            class="material-icons absolute ml-1 mt-1"
            style={{ fontSize: "16px" }}
          >
            date_range
          </i>
          <input
            className="pt-1 pb-1 pl-3 pr-1 w-full input-bg input-border relative"
            type="text"
            id="fname"
            name="fname"
            value="Ready Date"
          />
        </div>
        <div className="mr-5">
          <i
            class="material-icons absolute  mt-1 ml-15"
            style={{ fontSize: "16px" }}
          >
            arrow_drop_down
          </i>
          <input
            className="pt-1 pb-1 pl-1 w-full pr-1 ml-2 input-bg input-border relative"
            type="text"
            id="fname"
            name="fname"
            value="Incoterms"
          />
        </div>

        <div>
          <input
            className="pt-1 pb-1 pl-1 w-full pr-1 ml-2 input-bg input-border"
            type="text"
            id="fname"
            name="fname"
            value="Total Cargo Value"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
