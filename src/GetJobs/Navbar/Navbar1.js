import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';

function Navbar1() {

  return (
    <>
      <nav className='navbar1'>
        <div className='navbar-container1'>
          
          <ul className='nav-menu1'>
            <li className='nav-item1'>
              <Link
                to='/getjobs'
                className='nav-links1'
                >
                New Jobs
              </Link>
            </li>
            <li className='nav-item1'>
              <Link
                to='/get/activejobs'
                className='nav-links1'
                >
                Active
              </Link>
            </li>
            <li>
              <Link
                to='/get/complete'
                className='nav-links1'
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

export default Navbar1;