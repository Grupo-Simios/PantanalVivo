import BodyQss from '../components/BodyQs/BodyQs.jsx';
import HeaderQs from '../components/HeaderQuemSomos/HeaderQs.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Container from '../components/Container/Container.jsx';

export default function QuemSomos() {
  return (
    <>
      <Navbar/>
      <Container>
        <HeaderQs/>
        <BodyQss/>
      </Container>
      <Footer/>
    </>
  );
}