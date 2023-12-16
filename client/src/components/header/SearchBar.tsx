import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar: React.FC = () => {
  return <div className='search-bar'>
    <Link to={'/'}>
      <div className='amazon-logo'></div>
    </Link>
    <div className='deliver-to'>
      <div className="deliver-to__icon" />
      <div className="deliver-to__content">
        <span className="deliver-to__title">Deliver to</span>
        <span className="deliver-to__location">Israel</span>
      </div>
    </div>
    <div className="search-wrapper">
      <div className="select-wrapper">
        <span className="select-all">All▾</span>
        <div className='select-options-wrapper'>
          <select style={{ "display": `${true ? 'none' : ''}` }} name="search" id="">
            <option value="">All departments</option>
            <option value="saab">Computer</option>
            <option value="mercedes">Phones</option>
          </select>
        </div>
      </div>
      <input className='search-input' type="text" />
      <div className="search-button">
        <FontAwesomeIcon icon={faSearch} style={{ color: "#5f646d", height: "20px" }} />
      </div>
    </div>
    <div className="search-bar__right">
      <Link to={'/auth'} className="search-bar__right-item"><span>Hello, sign in</span><span className='bold'>Account & List</span></Link>
      <Link to={'/cart'} className="search-bar__right-item"><div className="shopping-cart">{ }</div></Link>
    </div>
  </div>;
};

export default SearchBar;