import React from 'react';
import HeaderImg from '../../assets/images/HeaderImg.png';
import Header from './Header.css';

export default function Headerr() {
  return (
    <div className={Header}>
      <div className="container-fluid position-relative">
        <img src={HeaderImg} className="img-fluid object-fit-fill" alt="..." />
        <div class="position-absolute top-50 start-50 translate-middle text-start text-white">
          <h5 className="display-3">Ajuda humanitária</h5>
          <p className="fs-5"> O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.
          </p>
        </div>
      </div>
    </div>
  );
}
