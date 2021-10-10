import React from "react";

const Service = () => {
  return (
    <div className="flex column ml-3 mr-3">
      <h5>Select a service</h5>
      <div className="flex row text-grey pb-3">
        <div className="mr-2 text-white cards bg-blue pl-1">
          <h5>Air Freight</h5>
        </div>
        <div className="mr-2 text-grey cards bg-white pl-1">
          <h5>Sea Freight</h5>
        </div>
        <div className="mr-2 text-grey cards bg-white pl-1">
          <h5>
            Inland
            <br />
            (Truck & Barge)
          </h5>
        </div>
        <div className="text-grey cards bg-white pl-1">
          <h5>
            Customs
            <br />
            Clearance
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Service;
