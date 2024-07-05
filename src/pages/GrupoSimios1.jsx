import React from 'react';
import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';

export default function GrupoSimios() {
  return (
    <>
      <Container>
        <Navbar/>
          <h1 className='m-5 p-5'>Grupo Simios</h1>
        <Footer/>
      </Container>
    </>
  );
}