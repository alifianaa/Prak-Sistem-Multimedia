import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/audio-merge" activeClassName="active">
            Audio Merge
          </NavLink>
        </li>
        <li>
          <NavLink to="/image-convert" activeClassName="active">
            Image Convert
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
