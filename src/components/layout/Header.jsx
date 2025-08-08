import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-10 bg-gray-400">
        <NavLink to="/">Rajan Shrestha</NavLink>
        <ul className="flex gap-x-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad">FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/rq">FetchRQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
