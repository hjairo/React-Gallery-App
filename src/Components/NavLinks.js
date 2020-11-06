import React from 'react';
import {NavLink} from 'react-router-dom';

// Navigation links class that renders the required navigation links on the site
const NavLinks = ({loadingImages}) => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="/search/pepper" onClick={loadingImages}>
          Pepper
        </NavLink>
      </li>
      <li>
        <NavLink to="/search/oni" onClick={loadingImages}>
          Oni
        </NavLink>
      </li>
      <li>
        <NavLink to="/search/pizza" onClick={loadingImages}>
          Pizza
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavLinks;