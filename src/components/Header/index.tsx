
import React from 'react';
import './styles.scss';
import logo from './assets/icon-logo.jpg';
import ProductInfo from '../ProductInfo';
import BannerTop from '../BannerTop';

const Header: React.FC = () => {

  return (
    <header className='header'>
      <div className="header__top">
        <div className="header__wrap">
          <div className="header__logo">
            <img src={logo} alt="peça açaí" />
            peça açaí
          </div>
        </div>
      </div>
    </header>
  ) 
}

export default Header;