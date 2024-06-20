import React from 'react';
import LoremIpsum from '../../../assets/images/LoremIpsum.png';
import TechLogo from '../../../assets/images/TechLogo.png';
import NameLogo from '../../../assets/images/NameLogo.png';
import Style from './style.css';



export default function Parceiros() {
  return (
    <div className={Style}>
      <div className="container-fluid bg-light-orange rounded-4 mt-5 mb-5 shadow">
        <div className="row pt-4 ">
          <div className="col font-bold text-green text-start ps-5">
            <h2>Parceiros</h2>
          </div>
        </div>
        <div className=" pb-4">
          <div className='d-flex container align-items-center justify-content-around'>
            <div className='logoname img-fluid row flex-nowrap align-items-center'>
              <img src={NameLogo} alt="Logo do Parceiro" />
              <p className='text-green text-start font-regular fs-5'>NameLogo</p>
            </div>
            <div className='logotech img-fluid row flex-nowrap align-items-center '>
              <img src={TechLogo} alt="Logo do Parceiro" />
              <p className='text-green text-start font-regular fs-5'>TechLogo</p>
            </div>
            <div className='logolorem img-fluid row flex-nowrap align-items-center'>
              <img src={LoremIpsum} alt="Logo do Parceiro" />
              <p className='text-green text-start font-regular fs-5'>LoremIpsum</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
