import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue flex row space text-white ">
      <div className="flex row align-center ml-1">
        <h3 className="mr-4">Send FREIGHT</h3>
        <div class="search-container">
          <form style={{ color: "white" }}>
            <input
              className="bg-bar"
              type="text"
              placeholder="Search.."
              name="search"
            />
            <i class="fa fa-search icon"></i>
          </form>
        </div>
      </div>
      <div className="flex align-center  mr-1">
        <button className="mr-1 pl-1 pr-1 pt-1 pb-1 bg-trans button-border text-white">
          Request Quote
        </button>
        <button className="pl-1 pr-1 pt-1 pb-1 bg-green no-border text-white">
          Book Shipment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
