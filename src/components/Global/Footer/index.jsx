import React from 'react';
import Style from './style.css';
import LogoFooter from '../../../assets/images/LogoFooter.png';
import IconeLiGs from '../../../assets/images/IconeLiGs.svg';
import IconeIgGs from '../../../assets/images/IconeIgGs.svg';
import IconeEmailContato from '../../../assets/images/IconeEmailContato.svg';
import IconeIgContato from '../../../assets/images/IconeIgContato.svg';
import IconeWppContato from '../../../assets/images/IconeWppContato.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  return (
    <div className={Style}>
      <footer className="bg-footer">
        <div className="container py-4 py-md-5 px-4 px-md-0">
          <div className="row font-bolder pb-3">
            <div className="d-flex justify-content-between align-items-center w-100 flex-column flex-md-row">
              <div className="col-12 col-md-5 align-items-start mb-4 mb-md-0">
                <img src={LogoFooter} className="img-fluid" alt="..." />
                <p className="text-green fs-5 p-juntos">Juntos reconstruímos esperança</p>
              </div>
              <div className="col-12 col-md-3 text-green mb-4 mb-md-0">
                <h3 className='fw-bold'>Links</h3>
                <p className='mb-0 pb-2 p-list'>Inicio</p>
                <p className='mb-0 pb-2 p-list'>Quem Somos</p>
                <p className='mb-0 p-list'>Nossos Projetos</p>
              </div>
              <div className="col-12 col-md-3 text-green">
                <h3 className='fw-bold'>Contato</h3>
                <div className='d-flex gap-2 pb-2'>
                  <img src={IconeEmailContato} width={24} height={24} className="img-fluid" alt="Icone de Email" />
                  <p className='mb-0 p-list'>email@email.com</p>
                </div>
                <div className='d-flex gap-2 pb-2'>
                  <img src={IconeWppContato} width={24} height={24} className="img-fluid" alt="Icone de WhatsApp" />
                  <p className='mb-0 p-list'>+55 99 99999-9999</p>
                </div>
                <div className='d-flex gap-2'>
                  <img src={IconeIgContato} width={24} height={24} className="img-fluid" alt="Icone de Instagram" />
                  <p className='mb-0 p-list'>@ongpantanalvivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className="divider mt-3 mb-3"/>
          </div>
          <div className="row flex-column flex-md-row">
            <div className="col-12 col-md-6 order-last order-md-first align-items-start mb-0">
              <p className='text-white p-site font-regular'>O site em desenvolvimento não possui função comercial, sendo destinado apenas para fins de estudo. Todas as imagens utilizadas estão devidamente creditadas aos seus respectivos proprietários.</p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end align-items-center gap-2">
              <div className="d-flex align-items-center gap-1">
                <img src={IconeLiGs} width={24} height={24} className="img-fluid" alt="Icone de LinkedIn" />
                <img src={IconeIgGs} width={24} height={24} className="img-fluid" alt="Icone de Instagram" />
              </div>
              <Link className={`text-white p-direitos font-bolder my-4 my-lg-0 ps-2 ps-md-1 ${location.pathname === '/grupo-simios' ? 'active' : ''}`} to="/grupo-simios">
                Todos os direitos reservados para Grupo Símios
              </Link>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}