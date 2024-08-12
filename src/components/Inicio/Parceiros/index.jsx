import React from 'react';
import LoremIpsum from '../../../assets/Inicio/images/LoremIpsum.png';
import TechLogo from '../../../assets/Inicio/images/TechLogo.png';
import NameLogo from '../../../assets/Inicio/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      <div className=' container-fluid m-0 p-0 py-4'>
        <div className=' parceirosmobile bg-light-orange rounded-4 px-5 shadow'>
          <div className='row pt-4 '>
            <div className=' font-bold text-green text-start'>
              <h2 className='display-5'>Parceiros</h2>
            </div>
          </div>
          <div className='pb-4'>
            <div className='d-flex container align-items-center justify-content-around '>
              <div className=' logoname img-fluid row flex-nowrap align-items-center d-none d-md-block d-lg-block'>
                <img src={NameLogo} alt='Logo do Parceiro' />
              </div>
              <div className='logotech img-fluid row flex-nowrap align-items-center d-none d-md-block d-lg-block'>
                <img src={TechLogo} alt='Logo do Parceiro' />
              </div>
              <div className='logolorem img-fluid row flex-nowrap align-items-center d-none d-md-block d-lg-block'>
                <img src={LoremIpsum} alt='Logo do Parceiro' />
              </div>
            </div>
          </div>
          {/* Mobile*/}
          <div className=' d-none d-sm-block d-md-none'>
            <div id='carouselEquipeAutoplaying' className='carousel slide' data-bs-ride='carousel'>
              <div className='carousel-inner text-center d-flex align-items-center '>
                <div className='carousel-item active'>
                  <div className='d-flex justify-content-center align-items-center'>
                    
                    <img src={NameLogo} className='img-fluid' alt='Colaboradora Jessica Santana'/>
                    
                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='d-flex justify-content-center align-items-center'>
                    
                    <img src={LoremIpsum} className='img-fluid' alt='Colaboradora Catarina Santos'/>
                    

                  </div>
                </div>
                <div className='carousel-item'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div className='h-25'>
                      <img src={TechLogo} className='w-50' alt='Colaborador Breno Santos'/>
                    </div>
                    
                  </div>
                </div>
              </div>
              <button className='carousel-control-prev' type='button' data-bs-target='#carouselEquipeAutoplaying' data-bs-slide='prev'>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button className='carousel-control-next' type='button' data-bs-target='#carouselEquipeAutoplaying' data-bs-slide='next'>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
