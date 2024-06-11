import React from 'react';
import Img from '../../../assets/images/img_Atuacao.png';
import Icon from '../../../assets/images/IconAtuacao.svg';

export default function NossaAtuacao() {
  return (
    <div className="container font-regular text-green pt-5 pb-5">
      <div className="row pb-4">
        <div className="col text-start">
          <h2 className='display-5 pt-4 pb-4 font-bold'>Nossa Atuação</h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-start pb-4 mb-5">
        <div id="carouselAtuacao" className="carousel slide col-5 me-4">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
              <img src={Img} className='img-fluid' id='carouselAtuacao' alt="" />
              
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselAtuacao" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselAtuacao" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row col-7">
          <div className='row pb-4 ps-5 align-items-start '>
            <div className='col-1 '>
              <img src={Icon} alt="" />
            </div>
            <div className="col-8 fs-3 ps-5">
              <p>Terra Indígena Cachoeirinha Miranda, Pantanal Mato Grosso do Sul, Brasil</p>
            </div>
          </div>
          <div className='row pt-4 ps-5 align-items-start'>
            <div className='col-1'>
              <img src={Icon} alt="" />
            </div>
            <div className="col-8 fs-3 ps-5">
              <p>Aldeia Mãe Terra Etnia Kinikinau Miranda, Pantanal Mato Grosso do Sul, Brasil</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}