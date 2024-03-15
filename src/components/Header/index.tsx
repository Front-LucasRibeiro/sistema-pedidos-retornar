
import React from 'react';
import logo from './assets/icon-logo.jpg';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header: React.FC = () => {

  return (
    <header className='header'>
      <div className="header__top">
        <div className="header__wrap">
          <div className="header__logo">
            <a href={`/`}>
              <img src={logo} alt="peça açaí" />
              peça açaí
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;