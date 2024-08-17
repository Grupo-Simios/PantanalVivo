import React from 'react';
import LoremIpsum from '../../../assets/Inicio/images/LoremIpsum.png';
import TechLogo from '../../../assets/Inicio/images/TechLogo.png';
import NameLogo from '../../../assets/Inicio/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      {/* desktop */}
      <div className='container-fluid my-5 p-0'>
        <div className='bg-light-orange rounded-4 shadow'>
          <div className='row pt-5 ps-5 ms-5'>
            <div className='col'>
              <h2 className='font-bold text-green display-5 font-bold'>Parceiros</h2>
            </div>
          </div>
          <div className='row pb-4 px-5 mx-5'>
            <div className='col-4 text-start'>
              <img src={NameLogo} className='img-fluid logo-size' alt='Logo Name Logo'/>
            </div>
            <div className="col-4 text-center">
              <img src={TechLogo} className='img-fluid logo-size' alt='Logo Tech Logo'/>
            </div>
            <div className="col-4 text-end">
              <img src={LoremIpsum} className='img-fluid logo-size' alt='Logo Lorem Ipsum'/>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile*/}
    </div>
  );
}
