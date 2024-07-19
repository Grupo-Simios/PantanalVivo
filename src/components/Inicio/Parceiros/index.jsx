import React from 'react';
import LoremIpsum from '../../../assets/Inicio/images/LoremIpsum.png';
import TechLogo from '../../../assets/Inicio/images/TechLogo.png';
import NameLogo from '../../../assets/Inicio/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      <div className="container-fluid bg-light-orange rounded-4 my-5 px-5 shadow">
        <div className="row pt-4 ">
          <div className=" font-bold text-green text-start">
            <h2 className='display-5'>Parceiros</h2>
          </div>
        </div>
        <div className="pb-4">
          <div className='d-flex container align-items-center justify-content-around'>
            <div className=' logoname img-fluid row flex-nowrap align-items-center'>
              <img src={NameLogo} alt="Logo do Parceiro" />
            </div>
            <div className='logotech img-fluid row flex-nowrap align-items-center '>
              <img src={TechLogo} alt="Logo do Parceiro" />
            </div>
            <div className='logolorem img-fluid row flex-nowrap align-items-center'>
              <img src={LoremIpsum} alt="Logo do Parceiro" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
