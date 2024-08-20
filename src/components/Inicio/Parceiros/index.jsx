import React from 'react';
import LoremIpsum from '../../../assets/Inicio/images/LoremIpsum.png';
import TechLogo from '../../../assets/Inicio/images/TechLogo.png';
import NameLogo from '../../../assets/Inicio/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      {/* desktop */}
      <div className='container-fluid my-5 p-0 d-md-block d-none'>
        <div className='bg-light-orange rounded-4 shadow'>
          <div className='row pt-5 ps-5 ms-5'>
            <div className='col'>
              <h2 className='font-bold text-green display-5 font-bold'>Parceiros</h2>
            </div>
          </div>
          <div className='row pb-4 px-5 mx-5'>
            <div className='col-4 d-flex text-start'>
              <img src={NameLogo} className='img-fluid logo-size' alt='Logo Name Logo'/>
              <p className='text-green fs-4 align-self-center d-none d-lg-block'>NameLogo</p>
            </div>
            <div className='col-4 d-flex text-center aligin-items-center'>
              <img src={TechLogo} className='img-fluid logo-size' alt='Logo Tech Logo'/>
              <p className='text-green fs-4 align-self-center d-none d-lg-block'>TechLogo</p>
            </div>
            <div className='col-4 d-flex text-end aligin-items-center'>
              <img src={LoremIpsum} className='img-fluid logo-size' alt='Logo Lorem Ipsum'/>
              <p className='text-green fs-4 align-self-center d-none d-lg-block'>LoremIpsum</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile*/}
      <div className='container-fluid my-5 p-0 d-md-none d-block'>
        <div className='bg-light-orange rounded-4 shadow'>
          <div className='row pt-5 ps-5'>
            <div className='col'>
              <h2 className='font-bold text-green display-2 font-bold'>Parceiros</h2>
            </div>
          </div>
          <div className='row pb-4 px-3'>
            <div className='col'>
              <div id='carouselExampleIndicators' className='carousel slide'>
                <div className='carousel-indicators'>
                  <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                  <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
                  <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
                </div>
                <div className='carousel-inner pb-5'>
                  <div className='carousel-item active'>
                    <div className='d-flex justify-content-center'>
                      <img src={NameLogo} className='img-fluid logo-size-mobile' alt='Logo Name Logo'/>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='d-flex justify-content-center'>
                      <img src={TechLogo} className='img-fluid logo-size-mobile' alt='Logo Tech Logo'/>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='d-flex justify-content-center'>
                      <img src={LoremIpsum} className='img-fluid logo-size-mobile' alt='Logo Lorem Ipsum'/>
                    </div>
                  </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
