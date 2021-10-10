import React from "react";
import AdditionalServices from "./AdditionalServices";
import CargoDetails from "./CargoDetails";
import Details from "./Details";
import Service from "./Service";

const Content = () => {
  return (
    <div className="ml-5 mr-5 pb-5">
      <div className="ml-5 mr-5 bg-white">
        <Service />
      </div>
      <div className="ml-5 mr-5 bg-white">
        <Details />
      </div>
      <div className="ml-5 mr-5 bg-white">
        <CargoDetails />
      </div>
      <div className="ml-5 mr-5 bg-white">
        <AdditionalServices />
      </div>
    </div>
  );
};

export default Content;
