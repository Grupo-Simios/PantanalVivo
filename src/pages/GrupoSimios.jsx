import React from 'react';
import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';
import Header from '../components/GrupoSimios/Header/index.jsx';
import Body from '../components/GrupoSimios/Body/index.jsx';

export default function GrupoSimios() {
  return (
    <>
      <Container>
        <Navbar/>
        <Header/>
        <Body/>
        <Footer/>
      </Container>
    </>
  );
}