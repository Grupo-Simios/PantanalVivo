import React from 'react';
import TestQs from '../../../assets/QuemSomos/images/TestQs.png';
import Style from './style.css';

export default function HeaderQss() {
    return(
        <div className={Style}>
            <div className='headerQs pb-5 pt-5 rounded-bottom-4'>
                <div className='row align-items-center mt-5 ms-0 me-0'>
                    <div className='col-4 ps-5 d-flex row justify-content-center align-items-center'>
                        <h1 className='text-start pt-5 ps-5 display-3 font-medium text-green'>Quem Somos</h1>
                        <p className='text-start ps-5 pt-2 fs-5 font-regular text-green'>Visamos construir um futuro mais sustentável e resiliente para o Pantanal e suas comunidades. Através de ações integradas e colaborativas, trabalhamos para que o Pantanal continue sendo um dos maiores tesouros naturais do mundo, com comunidades fortes e engajadas em sua preservação.</p>
                    </div>
                    <div className='col-8 ps-5 pt-5 '>
                        <img src={TestQs} className='rounded mx-auto d-block img-fluid imgTest text-end ' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );

}