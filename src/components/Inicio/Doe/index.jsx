import React from 'react';
import Vector1 from '../../../assets/Inicio/images/Vector1.svg';
import PixImg from '../../../assets/Inicio/images/PixImg.png';
import Image11 from '../../../assets/Inicio/images/image 11.png';
import Style from './style.css';

export default function Ajude() {
  return (
    <div className={Style}>
      <div className='py-4'>
        <img src={Vector1} alt='' className='img-fluid w-100 '/>
        <div className='container-fluid'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-12 col-sm-6 text-center img-fluid d-none d-sm-none d-md-block'>
              <img src={Image11} alt='' className='w-75' />
            </div>
            <div className='col-12 col-sm-6 container my-5 mb-5 pb-2 d-none d-sm-none d-md-block'>
              <div className='row '>
                <div className='col font-regular text-black'>
                  <h2 className='text-green display-6 font-bold pb-3 ps-2'>Doe agora</h2>
                  <div className='d-flex'>
                    <div className='text-start text-green font-regular fs-5'>
                      <img src={PixImg} alt='' className='img-fluid pb-3 ' />
                      <p className='letter-doe ps-2 text-center'>
                        Aponte a câmera
                        <br />
                        para o Pix QR Code
                      </p>
                    </div>
                    <div className='agencia ps-4 font-regular text-green pt-3  '>
                      <p>
                        Agência: 0000
                        <br />
                        Conta Corrente: 00-0
                        <br />
                        CNPJ: 00.000.0001/00
                        <br />
                        Banco Tal
                        <br />
                        <br />
                        <br />
                        Chave pix:
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mobile */}
            <div className=' container my-5 mb-5 pb-2 d-block d-sm-block d-md-none'>
              <div className='row '>
                <div className='col  font-regular text-black'>
                  <h2 className='text-green display-3 font-bold pb-3 ps-1'>Doe agora</h2>
                  <div className='agencia ps-1 font-regular text-green pt-1 fs-3 '>
                      <p>
                        Agência: 0000
                        <br />
                        Conta Corrente: 000000-0
                        <br />
                        CNPJ: 00.000.0001/00
                        <br />
                        Banco Tal
                        <br />
                        <br />
                        
                        Chave pix:
                      </p>
                      
                    </div>
                  
                    <div className='text-start text-green font-regular fs-3'>
                      <img src={PixImg} alt='' className='pix img-fluid pb-3 ' />
                      <p className='letter-doe ps-2 text-start'>
                        Aponte a câmera
                        para o Pix <br />QR Code
                      </p>
                    </div>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
