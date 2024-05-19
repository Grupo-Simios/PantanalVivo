import React from 'react';
import FooterStyles from './FooterStyles.css';
import LogoFooterImg from '../../assets/images/LogoFooterImg.png';

export default function Footer() {
  return(
    <div className={FooterStyles}>
      <footer>
        <div className='container font-regular pt-5 pb-5'>
          <div className="row align-items-center justify-content-center">
            <div className="col-3 img-footer">
              <img src={LogoFooterImg} className="img-fluid" alt="..." />
              <p>Frase de efeito</p>
            </div>
            <div className="col-3">
              <h3>Link</h3>
              <p>Inicio</p>
              <p>Quem Somos</p>
              <p>Nossos Projetos</p>
            </div>
            <div className="col-3">
              <h3>Contato</h3>
              <p>Redes Sociais</p>
              <p>Redes Sociais</p>
              <p>Redes Sociais</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

