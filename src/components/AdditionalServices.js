import React from "react";

const AdditionalServices = () => {
  return (
    <div className="flex column ml-3 mr-3 pb-3 mt-3">
      <h5>Additional services</h5>
      <div className="flex row space">
        <div className="flex row">
          <div className="mt-3">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <div className="ml-3">
            <h5>Export Forwarding</h5>
            <h6 className="text-grey">
              We handle clearance and documentation.
            </h6>
          </div>
        </div>
        <div className="flex row">
          <div className="mt-3">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <div className="ml-3 ">
            <h5>Import Customs Clearance</h5>

            <h6 className="text-grey">
              We handle import customs and regulatory requirements.
            </h6>
          </div>
        </div>
      </div>
      <div className="mt-3 flex row space">
        <div className="flex row">
          <div className="mt-3">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <div className="ml-3">
            <h5>Cargo Insurance</h5>
            <h6 className="text-grey">
              Protect your cargo from logistics risks up to its full value.
            </h6>
          </div>
        </div>
        <div className="flex row">
          <div className="mt-3">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>

          <div className="ml-3">
            <h5>Transport/Delivery</h5>
            <h6 className="text-grey">
              We deliver the cargo to your door step from the ports.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
