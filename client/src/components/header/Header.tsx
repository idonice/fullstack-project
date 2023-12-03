import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './Navbar';
import './Header.css';

const Header: React.FC = () => {
  return <div className='header'>
    <SearchBar />
    <NavBar />
  </div>;
};

export default Header;