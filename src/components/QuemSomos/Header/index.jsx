import React from 'react';
import TestQs from '../../../assets/QuemSomos/images/TestQs.png';
import Style from './style.css';

export default function HeaderQss() {
    return(
        <div className={Style}>
            <div className='headerQs py-5 px-4 px-md-5 rounded-bottom-4 d-lg-flex align-items-center'>
                <div className='row align-items-center mt-5 ms-0 me-0'>
                    <div className='col-12 col-lg-5 px-md-5 d-flex flex-column'>
                        <h1 className='text-start pt-5 px-lg-5 display-3 h1Qs'>Quem Somos</h1>
                        <p className='text-start px-lg-5 pt-2 fs-4 textoQs'>Visamos construir um futuro mais sustentável e resiliente para o Pantanal e suas comunidades. Através de ações integradas e colaborativas, trabalhamos para que o Pantanal continue sendo um dos maiores tesouros naturais do mundo, com comunidades fortes e engajadas em sua preservação.</p>
                    </div>
                    <div className='col-12 col-lg-7 px-md-5 pt-lg-5 px-auto'>
                        <img src={TestQs} className='rounded mx-auto d-block img-fluid imgTest text-end' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );

}