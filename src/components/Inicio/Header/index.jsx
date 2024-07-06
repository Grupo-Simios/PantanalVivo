import React from 'react';
import HeaderImg1 from '../../../assets/Inicio/images/HeaderImg1.png';
import HeaderImg2 from '../../../assets/Inicio/images/HeaderImg2.png';
import HeaderImg3 from '../../../assets/Inicio/images/HeaderImg3.png';
import Style from './style.css';

export default function Header() {
  return (
    <div className={Style}>
      <div id="carouselHeader" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={HeaderImg1} className="d-block w-100 img-fluid" alt="Menino indígena"/>
          </div>
          <div className="carousel-item">
            <img src={HeaderImg2} className="d-block w-100 img-fluid" alt="Jacarés"/>
          </div>
          <div className="carousel-item">
            <img src={HeaderImg3} className="d-block w-100 img-fluid" alt="Piranha"/>
          </div>
        </div>
        <div className="carousel-caption d-none d-md-block text-start position-absolute start-0 ms-5 ps-3 w-50">
          <h1 className='font-bold display-3'>Ajuda humanitária</h1>
          <p className='font-regular fs-4'>
            O nosso trabalho tem como principal objetivo ajudar
            as comunidades afetadas pelas queimadas no Pantanal,
            promovendo a recuperação ambiental,
            socioeconômica e cultural da região.
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
      {/*mobile*/}
      <div className='d-block d-md-none text-green px-4 py-5'>
        <h1 className='font-bold display-2 pb-2'>Ajuda humanitária</h1>
        <p className='font-regular fs-4'>O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. <br /> Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.</p>
      </div>
    </div>
  );
}
