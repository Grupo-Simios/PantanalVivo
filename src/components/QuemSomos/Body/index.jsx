import React from 'react';
import Style from './style.css';

export default function BodyQss() {
    return (
        <div className={Style}>
            <div className='bodyQs pt-5'>
                <div className='rounded-start-3 section-title fundo-title position-absolute end-0 mt-5'>
                    <h2 className=' text-start text-md-end pe-md-5 py-2 px-5 titleQs font-bold'>Nossa História</h2>
                </div>
                <div className='row contNs align-items-center rounded-end-4 gap-5 ps-4 mb-4 pb-5 px-md-5'>
                    <div className='col-12 col-md-5 TextNh px-4 px-md-5 font-regular'>
                        <p>Somos uma Organização da Sociedade Civil  (OSC) com sede em SP -Capital e sub sede em Miranda - MS. <br />Formada por indígenas e não indígenas, atuamos junto aos Povos Originários em situação de vulnerabilidade social na região pantaneira.</p>
                    </div>
                    <div className='col-12 col-md-6 TextNh font-regular px-4'>
                        <p>O IAPO nasceu como Movimento AJude o Pantanal Oficial em Setembro de 2020 na Terra Indígena Baía dos Guató - MS, a partir de uma situação emergencial onde 83% da aldeia foi consumida pelo fogo, ocorrendo assim a maior tragédia ambiental e social no Pantanal , gerando prejuízos ambientais, econômicos e sociais sem precedentes, em Abril de 2022 constituímos a nossa OSC.</p>
                    </div>
                </div>
                <div className='position-relative section__nossos-propositos'>
                    <div className='position-absolute section__nossos-propositos-list rounded-start-4 end-0 text-white py-5 px-md-5'>
                        <ul className='list__nossos-propositos px-4 px-md-5'>
                            <li className='d-md-flex pb-4 mb-4 mb-md-5'>
                                <h3 className='font-regular mb-5'>Nossa <br />missão</h3>
                                <p className='px-md-5 fs-4 font-regular'>Promover a restauração do ecossistema do Pantanal, apoiar às comunidades afetadas pelas queimadas e incentivar práticas sustentáveis visando a preservação do bioma e a qualidade de vida.</p>
                            </li>
                            <li className='d-md-flex pb-4 mb-4 mb-md-5'>
                                <h3 className='font-regular mb-5'>Nossa <br />visão</h3>
                                <p className='px-md-5 fs-4 font-regular'>Ser referência na recuperação ambiental e no apoio às comunidades, contribuindo para um futuro sustentável onde a natureza e as populações locais coexistam.</p>
                            </li>
                            <li className='d-md-flex'>
                                <h3 className='font-regular mb-5'>Nossos <br />valores</h3>
                                <ul className='px-md-5 w-75 fs-4 font-regular lista__nossos-valores'>
                                    <li>Solidariedade;</li>
                                    <li>Empatia;</li>
                                    <li>Transparência.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='section-title__nossos-propositos rounded-end-4 d-lg-flex align-items-center'>
                        <h2 className='title__nossos-propositos ps-4 pt-5 pt-lg-0 px-lg-5 font-bold'>Nossos <br />propósitos</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}