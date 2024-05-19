import Navbar from '../components/Navbar/Navbar.jsx';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Container from '../components/Container/Container.jsx';
import Parceiros from '../components/Parceiros/Parceiros.jsx';

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