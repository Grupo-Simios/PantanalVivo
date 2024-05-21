import Container from '../components/Global/Container/index.jsx';
import Navbar from '../components/Global/Navbar/index.jsx';
import Footer from '../components/Global/Footer/index.jsx';
import Body from '../components/QuemSomos/Body/index.jsx';
import Header from '../components/QuemSomos/Header/index.jsx';

export default function QuemSomos() {
  return (
    <>
      <Navbar/>
      <Container>
        <Header/>
        <Body/>
      </Container>
      <Footer/>
    </>
  );
}