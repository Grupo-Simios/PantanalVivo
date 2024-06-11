import React from 'react';
import LogoFooter from '../../../assets/images/LogoFooter.svg';

export default function Footer() {
  return (
    <footer className="bg-footer">
      <div className="container font-bold pt-5 pb-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-3">
            <img src={LogoFooter} className="img-fluid" alt="..." />
            <p className="text-green">Juntos construímos esperança</p>
          </div>
          <div className="col-3 text-green">
            <h3>Link</h3>
            <p>Inicio</p>
            <p>Quem Somos</p>
            <p>Nossos Projetos</p>
          </div>
          <div className="col-3 text-green">
            <h3>Contato</h3>
            <p>E-mail: email@email.com</p>
            <p>Telefone: +55 99 99999-9999</p>
            <p>Instagram: @ajude_o_pantanaloficial</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className=''/>
            <p className='text-white'>Todos os direitos reservados para Grupo Símios</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
