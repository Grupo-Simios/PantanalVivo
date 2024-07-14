import React from 'react';
import JessicaSantana from '../../../assets/Inicio/images/JessicaSantana.png';
import BarbaraPaz from '../../../assets/Inicio/images/BarbaraPaz.png';
import CatarinaSantos from '../../../assets/Inicio/images/CatarinaSantos.png';
import JoaoReis from '../../../assets/Inicio/images/JoaoReis.png';
import BrenoSantos from '../../../assets/Inicio/images/BrenoSantos.png';

export default function NossaEquipe() {
  return (
    <div className="container font-regular my-5 position-relative overflow-hidden">
      <div className="row position-relative z-index-1">
        <div className='bg-dark-orange shadow rounded-4 font-regular' style={{ height: '369px', width: '869px' }}>
          <div className="col-3 p-5 m-5">
            <h2 className="text-white">Nossa equipe</h2>
            <p className="text-green fw-bold">Conheça quem faz tudo isso acontecer</p>
          </div>
          <div className="col position-absolute top-0 start-0 w-100 z-index-2 mt-5">
        <div class="d-flex justify-content-end align-items-center text-center gap-3 m-3">
          <div class="card bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center" style={{width: '10rem' }}>
            <img src={JessicaSantana} class="card-img-top w-75" alt="Colaboradora Jessica Santana"/>
            <div class="card-body text-green">
              <h3 class="card-title fs-5">Jéssica <br /> Santana</h3>
              <p class="card-text fw-bolder fs-5">Fundadora</p>
            </div>
          </div>
          <div class="card bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center" style={{width: '10rem' }}>
            <img src={BarbaraPaz} class="card-img-top w-75" alt="Colaboradora Bárbara Paz"/>
            <div class="card-body text-green">
              <h3 class="card-title fs-5">Bárbara <br /> Paz</h3>
              <p class="card-text fw-bolder fs-5">Ambientalista</p>
            </div>
          </div>
          <div class="card bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center" style={{width: '10rem' }}>
            <img src={CatarinaSantos} class="card-img-top w-75" alt="Colaboradora Catarina Santos"/>
            <div class="card-body text-green">
              <h3 class="card-title fs-5">Catarina <br /> Santos</h3>
              <p class="card-text fw-bolder fs-5">Bióloga</p>
            </div>
          </div>
          <div class="card bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center" style={{width: '10rem' }}>
            <img src={JoaoReis} class="card-img-top w-75" alt="Colaborador João Reis"/>
            <div class="card-body text-green">
              <h3 class="card-title fs-5">João <br /> Reis</h3>
              <p class="card-text fw-bolder fs-5">Psicólogo</p>
            </div>
          </div>
          <div class="card bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center" style={{width: '10rem' }}>
            <img src={BrenoSantos} class="card-img-top w-75" alt="Colaborador Breno Santos"/>
            <div class="card-body text-green">
              <h3 class="card-title fs-5">Breno <br /> Santos</h3>
              <p class="card-text fw-bolder fs-5">Voluntário</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
