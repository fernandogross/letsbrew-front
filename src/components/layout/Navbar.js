import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper blue">
        <div className="container">
          <a href="#" className="brand-logo">Letsbrew</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/hops'}>Hops</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;