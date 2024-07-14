import React from 'react';
import Style from './style.css';
import JessicaSantana from '../../../assets/Inicio/images/JessicaSantana.png';
import BarbaraPaz from '../../../assets/Inicio/images/BarbaraPaz.png';
import CatarinaSantos from '../../../assets/Inicio/images/CatarinaSantos.png';
import JoaoReis from '../../../assets/Inicio/images/JoaoReis.png';
import BrenoSantos from '../../../assets/Inicio/images/BrenoSantos.png';

export default function NossaEquipe() {
  return (
    <div className={Style}>
      <div className="container font-regular my-5 position-relative overflow-hidden d-none d-sm-block">
        <div className="row position-relative z-index-1">
          {/*large*/}
            <div className="bg-dark-orange shadow rounded-4 font-regular frame-large">
              <div className="col-3 p-5 m-5">
                <h2 className="text-white">Nossa equipe</h2>
                <p className="text-green fw-bold">
                  Conheça quem faz tudo isso acontecer
                </p>
              </div>
              <div className="col position-absolute top-0 start-0 w-100 z-index-2 mt-5">
                <div className="d-flex justify-content-end align-items-center text-center gap-3 m-3">
                  <div className="card card-large bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                    <img src={JessicaSantana} className="card-img-top w-75" alt="Colaboradora Jessica Santana"/>
                    <div className="card-body text-green">
                      <h3 className="card-title fs-5">
                        Jéssica <br /> Santana
                      </h3>
                      <p className="card-text fw-bolder fs-5">Fundadora</p>
                    </div>
                  </div>
                  <div className="card card-large bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                    <img src={BarbaraPaz} className="card-img-top w-75" alt="Colaboradora Bárbara Paz"/>
                    <div className="card-body text-green">
                      <h3 className="card-title fs-5">
                        Bárbara <br /> Paz
                      </h3>
                      <p className="card-text fw-bolder fs-5">Ambientalista</p>
                    </div>
                  </div>
                  <div className="card card-large bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                    <img src={CatarinaSantos} className="card-img-top w-75" alt="Colaboradora Catarina Santos"/>
                    <div className="card-body text-green">
                      <h3 className="card-title fs-5">
                        Catarina <br /> Santos
                      </h3>
                      <p className="card-text fw-bolder fs-5">Bióloga</p>
                    </div>
                  </div>
                  <div className="card card-large bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                    <img src={JoaoReis} className="card-img-top w-75" alt="Colaborador João Reis"/>
                    <div className="card-body text-green">
                      <h3 className="card-title fs-5">
                        João <br /> Reis
                      </h3>
                      <p className="card-text fw-bolder fs-5">Psicólogo</p>
                    </div>
                  </div>
                  <div className="card card-large bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                    <img src={BrenoSantos} className="card-img-top w-75" alt="Colaborador Breno Santos"/>
                    <div className="card-body text-green">
                      <h3 className="card-title fs-5">
                        Breno <br /> Santos
                      </h3>
                      <p className="card-text fw-bolder fs-5">Voluntário</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/*small*/}
      <div className="container-fluid d-block d-sm-none pe-0">
        <div className="row bg-dark-orange shadow rounded-start-4 font-regular me-0 ms-5">
            <div className="col p-5 mt-5 mx-3">
              <h2 className="text-white display-2 lh-1">Nossa <br /> equipe</h2>
              <p className="text-green fw-bold fs-4">
                Conheça quem faz tudo isso acontecer
              </p>
            </div>
            <div className="col mb-5 pe-0">
              <div id="carouselEquipeAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center pe-4 pb-5 ps-3">
                  <div className="carousel-item active ps-3">
                    <div className='d-flex justify-content-end gap-3'>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={JessicaSantana} className="card-img-top w-75" alt="Colaboradora Jessica Santana"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            Jéssica <br /> Santana
                          </h3>
                          <p className="card-text fw-bolder fs-6">Fundadora</p>
                        </div>
                      </div>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={BarbaraPaz} className="card-img-top w-75" alt="Colaboradora Bárbara Paz"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            Bárbara <br /> Paz
                          </h3>
                          <p className="card-text fw-bolder fs-6">Ambientalista</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ps-3">
                    <div className='d-flex justify-content-end gap-3'>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={CatarinaSantos} className="card-img-top w-75" alt="Colaboradora Catarina Santos"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            Catarina <br /> Santos
                          </h3>
                          <p className="card-text fw-bolder fs-6">Bióloga</p>
                        </div>
                      </div>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={JoaoReis} className="card-img-top w-75" alt="Colaborador João Reis"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            João <br /> Reis
                          </h3>
                          <p className="card-text fw-bolder fs-6">Psicólogo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ps-3">
                    <div className='d-flex justify-content-end gap-3'>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={BrenoSantos} className="card-img-top w-75" alt="Colaborador Breno Santos"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            Breno <br /> Santos
                          </h3>
                          <p className="card-text fw-bolder fs-6">Voluntário</p>
                        </div>
                      </div>
                      <div className="card card-small bg-light-green p-3 pb-0 border-0 shadow rounded-4 align-items-center">
                        <img src={JessicaSantana} className="card-img-top w-75" alt="Colaboradora Jessica Santana"/>
                        <div className="card-body text-green">
                          <h3 className="card-title fs-5">
                            Jéssica <br /> Santana
                          </h3>
                          <p className="card-text fw-bolder fs-6">Fundadora</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselEquipeAutoplaying" data-bs-slide="prev">
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselEquipeAutoplaying" data-bs-slide="next">
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
