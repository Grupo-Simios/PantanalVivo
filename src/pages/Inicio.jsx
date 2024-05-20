import Navbar from '../components/Navbar/Navbar.jsx';
import HeaderI from '../components/HeaderI/HeaderI.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Container from '../components/Container/Container.jsx';
import Parceiros from '../components/Parceiros/Parceiros.jsx';

export default function Inicio() {
  return (
    <>
      <Navbar/>
      <Container>
        <HeaderI/>
        <Parceiros/>
      </Container>
      <Footer/>
    </>
  );
}