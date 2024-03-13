import React from 'react';
import './styles.scss';
import bannerTop from './assets/banner-top.jpg';

const BannerTop:React.FC = () => {
  return (
    <div className="container">
      <div className="header__banner">
        <span className='header__voltar'></span>
        <img src={bannerTop} alt="açaí no copo e frutas" />
      </div>
    </div>
  )
}

export default BannerTop;