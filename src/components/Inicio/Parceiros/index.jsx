import React from 'react';
import LoremIpsum from '../../../assets/Inicio/images/LoremIpsum.png';
import TechLogo from '../../../assets/Inicio/images/TechLogo.png';
import NameLogo from '../../../assets/Inicio/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      <div className='container-fluid m-0 p-0 py-4'>
        <div className='bg-light-orange rounded-4 px-5 shadow'>
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
          <div id="carouselParceirosAutoplaying" class="carousel slide d-non d-sm-block d-md-none" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={NameLogo} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={TechLogo} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={LoremIpsum} class="d-block w-100" alt="..."/>
              </div>
            </div>
              <button className='carousel-control-prev' type='button' data-bs-target='#carouselEquipeAutoplaying' data-bs-slide='prev'>
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button className='carousel-control-next' type='button' data-bs-target='#carouselEquipeAutoplaying' data-bs-slide='next'>
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
