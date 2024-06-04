import React from 'react';
import HeaderImg from '../../../assets/images/HeaderImg.png';
import Style from './style.css';

export default function Header() {
  return (
    <div className={Style}>
      <div id="carouselHeader" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={HeaderImg} className="d-block w-100" alt="..."/>
          </div>
          {/*<div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
          </div>*/}
        </div>
        <div className="carousel-caption d-none d-md-block text-start position-absolute start-0 ms-5 ps-3 w-50">
          <h1 className='font-bold display-3'>Ajuda humanitária</h1>
          <p className='font-regular fs-4'>
            O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. <br /> 
            Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.
          </p>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
