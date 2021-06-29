import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {

  return (
    <>
      <nav className='navbar2'>
        <div className='navbar-container2'>
          
          <ul className='nav-menu2'>
            <li className='nav-item2'>
              <Link
                to='/postjobs'
                className='nav-links2'
                >
                Active
              </Link>
            </li>
            <li>
              <Link
                to='/post/complete'
                className='nav-links2'
                >
                Completed
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;