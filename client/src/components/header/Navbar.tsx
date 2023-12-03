import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

const NavBar: React.FC = () => {
  return <div className='navbar'>
   
    <Link to={'/'} className='nav-a'> <FontAwesomeIcon icon={faBars} style={{color: "white", marginRight: "3px"}} />All</Link>
    <Link to={'/'} className='nav-a'>Today's Deals</Link>
    <Link to={'/'} className='nav-a'>Registry</Link>
    <Link to={'/'} className='nav-a'>Customer Service</Link>
    <Link to={'/'} className='nav-a'>Gift Cards</Link>
    <Link to={'/'} className='nav-a'>Sell</Link>
  </div>;
};

export default NavBar;