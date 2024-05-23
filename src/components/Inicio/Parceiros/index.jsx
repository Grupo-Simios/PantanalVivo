import React from 'react';
import LogoParceiros from '../../../assets/images/LogoParceiros.png';

export default function Parceiros() {
  return (
    <div className="container-fluid bg-light-orange rounded-4 mt-5 mb-5 shadow">
      <div className="row pt-4 pb-3">
        <div className="col font-regular text-black text-center">
          <h2>Parceiros</h2>
        </div>
      </div>
      <div className="row pb-4">
        <div className="col d-flex align-items-center justify-content-center">
          <div className='d-flex flex-wrap gap-5'>
            <div className='img-fluid'>
              <img src={LogoParceiros} alt="Logo do Parceiro" />
            </div>
            <div className='img-fluid'>
              <img src={LogoParceiros} alt="Logo do Parceiro" />
            </div>
            <div className='img-fluid'>
              <img src={LogoParceiros} alt="Logo do Parceiro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
