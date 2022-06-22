import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Search from './Search';
import Login from './Login';
import { categories, countries, seriesMovie, years } from '../../data';
import logo from '../../img/logo.png';

function Header(props) {
  return (
    <header className="fixed mb-[100px] z-10 right-[0] top-[0] items-center left-[0] flex justify-between header h-[56px]">
      <div className="items-center mr-[10px] flex">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-[50%]" />
        </Link>
        <NavBar categories={categories} countries={countries} seriesMovie={seriesMovie} years={years} />
      </div>
      <div className="items-center mr-[10px] flex">
        <Search />
        <Login />
      </div>
    </header>
  );
}
Header.propTypes = {};
export default Header;
