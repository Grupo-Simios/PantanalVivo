import React from 'react';
import HeaderImg from '../../assets/images/HeaderImg.png';
import HeaderIStyle from './HeaderIStyle.css';

export default function HeaderI() {
  return (
    <div className={HeaderIStyle}>
      <div className="container-fluid header position-relative">
        <img src={HeaderImg} className="img-fluid" alt="..." />
        <div className="position-absolute top-50 start-50 translate-middle text-start text-white">
          <h5 className="display-3">Ajuda humanitária</h5>
          <p className="fs-5"> O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.
          </p>
        </div>
      </div>
    </div>
  );
}
