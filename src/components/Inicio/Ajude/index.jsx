import React from 'react';
import Vector1 from '../../../assets/images/Vector1.png';
import Vector2 from '../../../assets/images/Vector2.png';
import PixImg from '../../../assets/images/PixImg.png';
import Frame199 from '../../../assets/images/Frame199.png';

export default function Ajude() {
  return (
    <div className='mt-5 mb-5'>
      <img src={Vector1} alt="" className='img-fluid w-100'/>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img src={Frame199} alt="" className='img-fluid'/>
          </div>
          <div className="col font-regular text-black">
            <h2>Ajude-nos agora</h2>
            <div className='d-flex'>
              <div className='text-center'>
                <img src={PixImg} alt="" className='img-fluid'/>
                <p>Pix QR CODE</p>
              </div>
              <div className='ps-4'>
                <p>Dados bancários <br />Dados bancários <br />Dados bancários</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Vector2} alt="" className='img-fluid w-100'/>
    </div>
  );
}