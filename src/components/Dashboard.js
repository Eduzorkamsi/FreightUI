import React from "react";

const Dashboard = () => {
  return (
    <div className="flex row ml-5">
      <div className="pt-3">
        <i class="fa fa-arrow-left"></i>
      </div>
      <div className="ml-5">
        <h3>New Booking</h3>
        <h6 className="text-grey">
          Fill in the infomation below to get a quote or create a new booking
        </h6>
      </div>
    </div>
  );
};

export default Dashboard;
