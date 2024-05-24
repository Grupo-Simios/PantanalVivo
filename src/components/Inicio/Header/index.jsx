import React from 'react';
// import HeaderImg from '../../../assets/images/HeaderImg.png';
import Style from './style.css';

export default function Header() {
  return (
    <div className={Style}>
      <header className='vh-100 d-flex position-relative'>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center text-center text-white overlay position-absolute">
            <div className="col-8">
              <h5 className="display-3">Ajuda humanitária</h5>
              <p className="fs-5">O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
