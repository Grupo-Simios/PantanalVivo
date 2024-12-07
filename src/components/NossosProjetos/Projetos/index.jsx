import React from 'react';
import Projeto1 from '../../../assets/NossosProjetos/images/Projeto1.png';
import Projeto2 from '../../../assets/NossosProjetos/images/Projeto2.png';
import Projeto3 from '../../../assets/NossosProjetos/images/Projeto3.png';
import VetorLarge from '../../../assets/NossosProjetos/images/VetorLarge.png';
import VetorSmall from '../../../assets/NossosProjetos/images/VetorSmall.png';

export default function Projetos() {
  return (
    <>
      <div className='container mt-5 p-5 px-4 px-md-5'>
        <div className='row align-items-center flex-wrap'>
          <div className='col-lg-7 col-12'>
          <img src={Projeto1} className='img-fluid' alt='Imagem do projeto Recuperação Ambiental'/>
          </div>
          <div className='col-lg-5 col-12 text-green pt-5 pt-lg-0'>
            <h2 className='font-bold display-5 pb-3 pb-lg-0'>Recuperação Ambiental</h2>
            <p className='font-regular fs-5'>Nosso projeto que visa reflorestamento de áreas degradadas, implementação de ações de conservação de fauna e flora, monitoramento e prevenção de queimadas e parcerias com instituições de pesquisa para desenvolver e aplicar técnicas de recuperação ambiental.</p>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <img src={VetorLarge} alt='Vetor' className='w-100 d-none d-sm-block'/>
        <img src={VetorSmall} alt='Vetor' className='w-100 d-block d-sm-none'/>
      </div>
      <div className='container p-5 px-4 px-md-5'>
        <div className='row align-items-center'>
        <div className='col-lg-5 col-12 text-green'>
            <h2 className='font-bold display-5 pb-3 pb-lg-0'>Apoio às comunidades Locais</h2>
            <p className='font-regular fs-5'>Neste projeto acontecem ações de reconstrução de infraestrutura básica (casas, escolas, postos de saúde) destruída pelas queimadas, oferta de serviços de saúde e assistência psicológica para as comunidades afetadas, capacitação e treinamento em novas técnicas agrícolas sustentáveis e programas de geração de renda e desenvolvimento econômico.</p>
          </div>
          <div className='col-lg-7 col-12 pt-5 pt-lg-0'>
          <img src={Projeto2} className='img-fluid' alt='Imagem do projeto Apoio às comunidades Locais'/>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <img src={VetorLarge} alt='Vetor' className='w-100 d-none d-sm-block'/>
        <img src={VetorSmall} alt='Vetor' className='w-100 d-block d-sm-none'/>
      </div>
      <div className='container p-5 px-4 px-md-5'>
        <div className='row align-items-center'>
          <div className='col-lg-7 col-12'>
          <img src={Projeto3} className='img-fluid' alt='Imagem do projeto Educação e Conscientizaçã'/>
          </div>
          <div className='col-lg-5 col-12 text-green pt-5 pt-lg-0'>
            <h2 className='font-bold display-5 pb-3 pb-lg-0'>Educação e Conscientização</h2>
            <p className='font-regular fs-5'>São realizadas campanhas de conscientização sobre a importância do Pantanal e os impactos das queimadas, programas educativos para crianças e jovens sobre práticas sustentáveis e proteção ambiental e workshops e seminários para a comunidade sobre prevenção de incêndios e manejo sustentável dos recursos naturais.</p>
          </div>
        </div>
      </div>
      <div className='py-4 pb-5'>
        <img src={VetorLarge} alt='Vetor' className='w-100 d-none d-sm-block'/>
        <img src={VetorSmall} alt='Vetor' className='w-100 d-block d-sm-none'/>
      </div>
    </>
  )
}