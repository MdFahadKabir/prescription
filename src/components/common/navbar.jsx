// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navItems, onNavItemClick }) => {
  const location = useLocation();

  return (
    <nav className="bg-white">
      <ul className="flex justify-evenly w-[970px] mx-auto bg-white">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link
              to={navItem.path}
              onClick={() => onNavItemClick(navItem.title)}
              className={`flex  ${
                location.pathname === navItem.path
                  ? "text-bg-color" // Change text color to bg-color if link is active
                  : ""
              } relative inline-block px-4 py-2 transition duration-300 ease-in-out hover:text-bg-color`}
            >
              <span
                className={`${
                  location.pathname === navItem.path
                    ? "fill-bg-color my-auto  mx-2" // Change icon color to bg-color if link is active
                    : "my-auto  mx-2"
                }`}
              >
                {navItem.icon} {/* Include the icon here */}
              </span>
              <p className="">{navItem.title}</p>
              {location.pathname === navItem.path && (
                <div className="absolute bottom-0 left-0 bg-bg-color h-1 w-full" /> // Add bg-color underline on active navlink
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
