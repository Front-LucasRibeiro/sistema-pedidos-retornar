import React from 'react';
import './styles.scss';
import bannerTop from './assets/banner-top.jpg';
import { useNavigate } from 'react-router-dom';

const BannerTop:React.FC = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate(-1);
    window.location.reload()
  }

  return (
    <div className="container">
      <div className="header__banner">
        <span className='header__voltar' onClick={backPage}></span>
        <img src={bannerTop} alt="açaí no copo e frutas" />
      </div>
    </div>
  )
}

export default BannerTop;