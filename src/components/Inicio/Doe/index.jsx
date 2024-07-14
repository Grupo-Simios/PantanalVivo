import React from 'react';
import Vector1 from '../../../assets/Inicio/images/Vector1.svg';

import PixImg from '../../../assets/Inicio/images/PixImg.png';


export default function Ajude() {
  return (
    <div className='mt-5 pt-5'>
      <img src={Vector1} alt="" className='img-fluid w-100 '/>
      <div className="container mt-5 pt-5 mb-5 pb-3">
        <div className="row align-items-center">
          <div className="col font-regular text-black">
            <h2 className='text-green font-bold pb-3 ps-3' >Doe agora</h2>
            <div className='d-flex'>
              <div className='text-center text-green font-regular fs-5'>
                <img src={PixImg} alt="" className='img-fluid pb-3 '/>
                <p>Aponte a câmera<br/>para o Pix QR Code</p>
              </div>
              <div className='ps-4 font-regular text-green fs-5 '>
                <p>Agência: 0000<br/>Conta Corrente: 000000-0<br/>CNPJ: 00.000.0001/00<br/>Banco Tal</p>
                <p className='pt-4'>Chave pix: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}