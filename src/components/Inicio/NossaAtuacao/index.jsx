import React from 'react';
import Img from '../../../assets/images/GroupNossaAtuacao.png';
import Icon from '../../../assets/images/IconNossaAtuacao.svg';

export default function NossaAtuacao() {
  return (
    <div className="container font-regular text-green pt-5">
      <div className="row pb-4">
        <div className="col text-center">
          <h2>Nossa Atuação</h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-center pb-4">
        <div className="col-4">
          <img src={Img} className='img-fluid' alt="" />
        </div>
        <div className='col-1'>
          <img src={Icon} className='img-fluid' alt="" />
        </div>
        <div className="col-4">
          <p>Terra Indígena Cachoeirinha Miranda Mato Grosso do Sul Brasil</p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center pb-4">
        <div className='col-1'>
          <img src={Icon} className='img-fluid' alt="" />
        </div>
        <div className="col-4">
          <p>Aldeia Mãe Terra Etnia Kinikinau Miranda Mato Grosso do Sul Brasil</p>
        </div>
        <div className="col-4 text-end">
          <img src={Img} className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  );
}