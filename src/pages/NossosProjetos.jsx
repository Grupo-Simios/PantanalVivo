import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';

export default function NossosProjetos() {
  return (
    <>
      <Container>
        <Navbar/>
          <h1 className='m-5 pt-5'>Nossos Projetos</h1>
        <Footer/>
      </Container>
    </>
  );
}