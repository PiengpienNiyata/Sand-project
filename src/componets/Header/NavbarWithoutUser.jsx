import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarWithoutUser() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div>
      <header
        className={`fixed z-50 w-full flex items-center py-4 transition duration-500 ease-in-out ${show && "bg-black transition duration-500 ease-in-out"
          }`}
      >
        <div className="w-9/12 md:w-11/12">
          <img
            className="h-8 sm:h-10 sm:w-18 ml-8 cursor-pointer"
            src="https://i.ibb.co/n8gCxyK/cdbd6b3d5ce53506505c02d7173ccc14-1.png"
            alt="SAND"
          />
        </div>

        <div className="flex space-x-4 mr-8">
          <Link to="/signin">
            <button
              style={{ backgroundColor: '#2A6354' }}
              className="px-8 rounded-sm py-2 text-white text-base font-bold"
            >
              Login
            </button>
          </Link>

          <Link to="/AdminSignIn">
            <button
              style={{ backgroundColor: '#2A6354' }}
              className="px-8 rounded-sm py-2 text-white text-base font-bold"
            >
              Admin
            </button>
          </Link>
        </div>
      </header>
    </div>
  );

}

export default NavbarWithoutUser;
