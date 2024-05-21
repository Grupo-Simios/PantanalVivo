import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';
import Header from '../components/Inicio/Header/index.jsx';
import Parceiros from '../components/Inicio/Parceiros/index.jsx';

export default function Inicio() {
  return (
    <>
      <Navbar/>
      <Container>
        <Header/>
        <Parceiros/>
      </Container>
      <Footer/>
    </>
  );
}