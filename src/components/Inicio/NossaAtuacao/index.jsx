import React from 'react';
import Mapa from '../../../assets/Inicio/images/Mapa.svg';
import Icon from '../../../assets/Inicio/icons/IconAtuacao.svg';

export default function NossaAtuacao() {
  return (
    <div className='container font-regular text-green px-5 py-4 pt-md-5'>
      <div className='row'>
        <div className='col text-center text-md-start mb-5'>
          <h2 className='display-5 font-bold'>Nossa Atuação</h2>
        </div>
      </div>
      <div className='row align-items-center '>
        <div className='col-12 col-md-7 mb-4 mb-md-0'>
          <img src={Mapa} className='img-fluid' alt='Mapa'/>
        </div>
        <div className='col-12 col-md-5 d-flex flex-column align-items-center'>
          <div className='text-start'>
            <div className='d-flex gap-3'>
              <img src={Icon} alt='ícone de localização' />
              <p className='fs-5'>São Paulo,<br/>São Paulo, Brasil</p>
            </div>
            <div className='d-flex gap-3 text'>
              <img src={Icon} alt='ícone de localização'/>
              <p className='fs-5'>Porto Murtinho, Pantanal<br/>Mato Grosso do Sul, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}