import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';
import Header from '../components/NossosProjetos/Header/index.jsx';
import Projetos from '../components/NossosProjetos/Projetos/index.jsx';

export default function NossosProjetos() {
  return (
    <>
      <Navbar/>
      <Container>
        <Header/>
        <Projetos/>
        <Footer/>
      </Container>
    </>
  );
}