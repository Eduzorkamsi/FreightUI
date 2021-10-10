import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue flex row space text-white ">
      <div className="flex row align-center ml-1">
        <h3 className="mr-4">Send FREIGHT</h3>
        <div class="search-container">
          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="flex align-center  mr-1">
        <button className="mr-1">Request Quote</button>
        <button>Book Shipment</button>
      </div>
    </nav>
  );
};

export default Navbar;
