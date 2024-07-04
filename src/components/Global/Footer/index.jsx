import React from 'react';
import Style from './style.css';
import LogoFooter from '../../../assets/images/LogoFooter.png';
import IconeLiGs from '../../../assets/images/IconeLiGs.svg';
import IconeIgGs from '../../../assets/images/IconeIgGs.svg';
import IconeEmailContato from '../../../assets/images/IconeEmailContato.svg';
import IconeIgContato from '../../../assets/images/IconeIgContato.svg';
import IconeWppContato from '../../../assets/images/IconeWppContato.svg';

export default function Footer() {
  return (
    <div className={Style}>
      <footer className="bg-footer">
        <div className="container pt-5 pb-5">
          <div className="row font-bolder pb-3">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="col-4 align-items-start">
                <img src={LogoFooter} className="img-fluid" alt="..." />
                <p className="text-green fs-5">Juntos reconstruímos esperança</p>
              </div>
              <div className="col-2 text-green">
                <h3 className='fw-bold'>Links</h3>
                <p className='mb-0 pb-2'>Inicio</p>
                <p className='mb-0 pb-2'>Quem Somos</p>
                <p className='mb-0'>Nossos Projetos</p>
              </div>
              <div className="col-4 text-green">
                <h3 className='fw-bold'>Contato</h3>
                <div className='d-flex gap-1 pb-2'>
                  <img src={IconeEmailContato} width={24} height={24} className="img-fluid" alt="Icone de Email" />
                  <p className='mb-0'>email@email.com</p>
                </div>
                <div className='d-flex gap-1 pb-2'>
                  <img src={IconeWppContato} width={24} height={24} className="img-fluid" alt="Icone de WhatsApp" />
                  <p className='mb-0'>+55 99 99999-9999</p>
                </div>
                <div className='d-flex gap-1'>
                  <img src={IconeIgContato} width={24} height={24} className="img-fluid" alt="Icone de Instagram" />
                  <p className='mb-0'>@ongpantanalvivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className="divider mt-3 mb-3"/>
          </div>
          <div className="row">
            <div className="col align-items-start">
              <p className='text-white font-regular'>O site em desenvolvimento não possui função comercial, sendo destinado apenas para fins de estudo. Todas as imagens utilizadas estão devidamente creditadas aos seus respectivos proprietários.</p>
            </div>
            <div className="col d-flex justify-content-end align-items-center gap-2">
              <div className="d-flex align-items-center gap-1">
                <img src={IconeLiGs} width={24} height={24} className="img-fluid" alt="Icone de LinkedIn" />
                <img src={IconeIgGs} width={24} height={24} className="img-fluid" alt="Icone de Instagram" />
              </div>
              <p className='text-white font-bolder mb-0'>Todos os direitos reservados para Grupo Símios</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
