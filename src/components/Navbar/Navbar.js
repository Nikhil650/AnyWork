import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            AnyWorkD
            <i class='fab fa-typo3' />
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link
                to='/why'
                className='nav-links'
                >
                Why AnyWorkDigital??
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/how'
                className='nav-links'
                >
                How it Works??
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                >
                Sign Up/In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;