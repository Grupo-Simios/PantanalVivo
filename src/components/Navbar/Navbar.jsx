import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Navbar from './Navbar.css';
import Logo from '../../assets/images/Logo.png';

export default function Navbarr() {
  const location = useLocation();
  return (
    <>
      {/*nav grande*/}
      <div className={Navbar}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top font-regular d-none d-lg-block nav-large">
          <div className="container">
            <img src={Logo} alt="Logo Ajude O Pantanal"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto gap-4 me-5">
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">Quem Somos</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-white ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">Nossos Projetos</Link>
                </li>
              </ul>
              <button type="button" className="btn btn-outline-light rounded-3 me-5">Ajude-nos agora</button>
            </div>
          </div>
        </nav>
      </div>
      {/*nav pequena média*/}
      <nav className="navbar navbar-expand-lg bg-light fixed-top font-regular d-lg-none">
          <div className="container">
            <img src={Logo} alt="Logo Ajude O Pantanal"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-black ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-black ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">Quem Somos</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link fs-5 text-black ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">Nossos Projetos</Link>
                </li>
              </ul>
              <button type="button" className="btn btn-outline-dark rounded-3 me-5">Ajude-nos agora</button>
            </div>
          </div>
        </nav>
    </>
  );
}