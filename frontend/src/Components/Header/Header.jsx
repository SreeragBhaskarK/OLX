import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Container } from 'react-bootstrap'
import {Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerParentDiv">
      <Container>
        <div className="headerChildDiv">
          <Link to='/' className="brandName">
            <OlxLogo></OlxLogo>
          </Link>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" />
            <Arrow></Arrow>
          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              />
            </div>
            <div className="searchAction">
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <Link to='/login' className="loginPage">
            <span> Login </span>
            <hr />
          </Link>

          <Link to='/post' className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Header;
