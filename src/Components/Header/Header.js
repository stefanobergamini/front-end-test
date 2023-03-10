import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/k2Logo.png'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div>
          <img src={logo} alt='' />
        </div>

        <div>
          <Link className='links' to='/'>Search</Link>
          <Link className='links' to='/Favorites'>Favorites</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;