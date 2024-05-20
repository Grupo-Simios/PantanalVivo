import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Container from '../components/Container/Container.jsx';

export default function NossosProjetos() {
  return (
    <>
      <Navbar/>
      <Container>
        <h1 className='m-5 pt-5'>Nossos Projetos</h1>
      </Container>
      <Footer/>
    </>
  );
}